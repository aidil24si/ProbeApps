import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { supabase } from "../lib/supabaseClient"

const AuthContext = createContext(null)

export function getTierFromPoints(points = 0) {
  if (points > 1500) return "Platinum"
  if (points >= 501) return "Gold"
  if (points >= 101) return "Silver"
  return "Bronze"
}

export function getDiscountRate(tier = "Bronze") {
  const rates = {
    Bronze: 0.05,
    Silver: 0.1,
    Gold: 0.15,
    Platinum: 0.2,
  }

  return rates[tier] ?? rates.Bronze
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchProfile = async (userId) => {
    if (!userId) {
      setProfile(null)
      return null
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single()

    if (error) {
      setProfile(null)
      throw error
    }

    setProfile(data)
    return data
  }

  const refreshProfile = async () => {
    if (!user?.id) return null
    return fetchProfile(user.id)
  }

  useEffect(() => {
    let isMounted = true

    const initSession = async () => {
      setLoading(true)
      const { data } = await supabase.auth.getSession()
      const currentUser = data.session?.user ?? null

      if (!isMounted) return
      setUser(currentUser)

      if (currentUser) {
        try {
          await fetchProfile(currentUser.id)
        } catch (error) {
          console.error("Failed to load profile", error)
        }
      } else {
        setProfile(null)
      }

      if (isMounted) setLoading(false)
    }

    initSession()

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      setLoading(true)

      if (currentUser) {
        try {
          await fetchProfile(currentUser.id)
        } catch (error) {
          console.error("Failed to sync profile", error)
        }
      } else {
        setProfile(null)
      }

      setLoading(false)
    })

    return () => {
      isMounted = false
      listener.subscription.unsubscribe()
    }
  }, [])

  const login = async (emailOrUsername, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailOrUsername,
      password,
    })

    if (error) throw error

    setUser(data.user)
    const nextProfile = await fetchProfile(data.user.id)
    return nextProfile
  }

  const register = async ({ fullName, email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) throw error

    if (data.session?.user) {
      setUser(data.session.user)
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.session.user.id,
        full_name: fullName,
        email,
        role: "member",
        total_points: 0,
        tier: "Bronze",
      })

      if (profileError && profileError.code !== "23505") throw profileError
      await fetchProfile(data.session.user.id)
    }

    return data
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    setUser(null)
    setProfile(null)
  }

  const value = useMemo(
    () => ({
      user,
      profile,
      role: profile?.role ?? null,
      loading,
      login,
      register,
      logout,
      refreshProfile,
    }),
    [user, profile, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}

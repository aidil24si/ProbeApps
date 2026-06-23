import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Loading from "./Loading"

function roleHome(role) {
  return role === "admin" ? "/" : "/member"
}

export default function ProtectedRoute({ allowedRoles, guestOnly = false }) {
  const { user, role, loading } = useAuth()
  const location = useLocation()

  if (loading) return <Loading />

  if (guestOnly) {
    if (user) return <Navigate to={roleHome(role)} replace />
    return <Outlet />
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (allowedRoles?.length && !allowedRoles.includes(role)) {
    return <Navigate to={roleHome(role)} replace />
  }

  return <Outlet />
}

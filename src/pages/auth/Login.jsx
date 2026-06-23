import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import AlertBox from "../../components/AlertBox"
import { useAuth } from "../../context/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function homeFor(role) {
    return role === "admin" ? "/" : "/member"
}

export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const { login } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const profile = await login(dataForm.email, dataForm.password)
            const fallback = homeFor(profile?.role)
            navigate(location.state?.from?.pathname || fallback, { replace: true })
        } catch (err) {
            setError(err.message || "Login gagal")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Card className="border-0 shadow-none">
            <CardHeader className="px-0">
                <CardTitle className="text-center text-2xl font-semibold text-gray-700">
                    Welcome Back
                </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
                {error && <AlertBox type="error">{error}</AlertBox>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm placeholder-gray-400"
                            placeholder="you@example.com"
                            value={dataForm.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm placeholder-gray-400"
                            placeholder="********"
                            value={dataForm.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit" className="h-11 w-full bg-green-500 text-white hover:bg-green-600" disabled={loading}>
                        {loading ? "Mohon Tunggu..." : "Login"}
                    </Button>
                </form>
                <p className="mt-5 text-center text-sm text-gray-500">
                    Belum punya akun?{" "}
                    <Link to="/register" className="font-bold text-green-600 hover:underline">
                        Register
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}

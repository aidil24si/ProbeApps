import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AlertBox from "../../components/AlertBox"
import { useAuth } from "../../context/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Register() {
    const navigate = useNavigate()
    const { register } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [dataForm, setDataForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError("")
        setSuccess("")

        if (dataForm.password !== dataForm.confirmPassword) {
            setError("Konfirmasi password tidak sama.")
            return
        }

        setLoading(true)

        try {
            const data = await register(dataForm)
            if (data.session) {
                navigate("/member", { replace: true })
            } else {
                setSuccess("Registrasi berhasil. Silakan cek email atau login setelah akun aktif.")
            }
        } catch (err) {
            setError(err.message || "Registrasi gagal")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Card className="border-0 shadow-none">
            <CardHeader className="px-0">
                <CardTitle className="text-center text-2xl font-semibold text-gray-700">
                    Create Your Account
                </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
                {error && <AlertBox type="error">{error}</AlertBox>}
                {success && <AlertBox type="success">{success}</AlertBox>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm placeholder-gray-400"
                            placeholder="Nama lengkap"
                            value={dataForm.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
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

                    <div className="mb-5">
                        <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
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
                            minLength={6}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm placeholder-gray-400"
                            placeholder="********"
                            value={dataForm.confirmPassword}
                            onChange={handleChange}
                            required
                            minLength={6}
                        />
                    </div>

                    <Button type="submit" className="h-11 w-full bg-green-500 text-white hover:bg-green-600" disabled={loading}>
                        {loading ? "Mendaftarkan..." : "Register"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

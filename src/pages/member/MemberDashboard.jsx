import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getDiscountRate, useAuth } from "../../context/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MemberDashboard() {
  const { profile, logout } = useAuth()
  const navigate = useNavigate()
  const discount = Math.round(getDiscountRate(profile?.tier) * 100)

  const handleLogout = async () => {
    await logout()
    navigate("/login", { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-poppins text-[32px] font-bold text-gray-900">Dashboard Member</h1>
            <p className="text-sm font-semibold text-gray-400">Poin, tier, dan diskon aktif kamu.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link to="/catalog">Belanja</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/member/orders">Riwayat Pesanan</Link>
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="rounded-[2rem] bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Nama</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-black text-gray-800">{profile?.full_name}</p>
              <p className="mt-2 text-sm text-gray-400">{profile?.email}</p>
            </CardContent>
          </Card>
          <Card className="rounded-[2rem] bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Total Poin</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-black text-hijau">{profile?.total_points ?? 0}</p>
            </CardContent>
          </Card>
          <Card className="rounded-[2rem] bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Tier & Diskon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-black text-gray-800">{profile?.tier ?? "Bronze"}</p>
              <p className="mt-2 text-sm font-bold text-green-600">{discount}% diskon aktif</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

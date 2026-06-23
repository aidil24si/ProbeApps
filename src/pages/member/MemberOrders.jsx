import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AlertBox from "../../components/AlertBox"
import LoadingSpinner from "../../components/LoadingSpinner"
import { useAuth } from "../../context/AuthContext"
import { supabase } from "../../lib/supabaseClient"
import { Button } from "@/components/ui/button"

const formatCurrency = (value) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value || 0)

export default function MemberOrders() {
  const { profile } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadOrders = async () => {
      setLoading(true)
      const { data, error: ordersError } = await supabase
        .from("orders")
        .select("*, order_items(*, products(name))")
        .eq("user_id", profile.id)
        .order("created_at", { ascending: false })

      if (ordersError) setError(ordersError.message)
      else setOrders(data || [])
      setLoading(false)
    }

    loadOrders()
  }, [profile.id])

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-poppins text-[32px] font-bold text-gray-900">Riwayat Pesanan</h1>
            <p className="text-sm font-semibold text-gray-400">Daftar pesanan milik akun kamu.</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/catalog">Katalog</Link>
          </Button>
        </div>

        {error && <AlertBox type="error">{error}</AlertBox>}
        {loading && <LoadingSpinner text="Memuat riwayat..." />}

        {!loading && (
          <div className="overflow-x-auto rounded-[2rem] border border-gray-50 bg-white shadow-sm">
            <table className="w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Order</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Item</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Status</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Total</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Poin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">#{order.id.slice(0, 8)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.order_items?.map((item) => item.products?.name || "Produk").join(", ")}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">{order.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700">{formatCurrency(order.total_final)}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{order.points_earned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

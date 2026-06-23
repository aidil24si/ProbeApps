import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AlertBox from "../../components/AlertBox"
import LoadingSpinner from "../../components/LoadingSpinner"
import { getDiscountRate, useAuth } from "../../context/AuthContext"
import { supabase } from "../../lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const formatCurrency = (value) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value || 0)

export default function Catalog() {
  const { profile } = useAuth()
  const [products, setProducts] = useState([])
  const [quantities, setQuantities] = useState({})
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const loadProducts = async () => {
    setLoading(true)
    setError("")
    const { data, error: productsError } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })

    if (productsError) {
      setError(productsError.message)
    } else {
      setProducts(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const checkout = async (product) => {
    const quantity = Number(quantities[product.id] || 1)
    if (quantity < 1) return
    if (quantity > product.stock) {
      setError("Jumlah melebihi stok tersedia.")
      return
    }

    setSavingId(product.id)
    setError("")
    setSuccess("")

    const totalOriginal = Number(product.price) * quantity
    const discountAmount = Math.floor(totalOriginal * getDiscountRate(profile?.tier))
    const totalFinal = totalOriginal - discountAmount

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: profile.id,
        total_original: totalOriginal,
        discount_amount: discountAmount,
        total_final: totalFinal,
        points_earned: 0,
        status: "Pending",
      })
      .select()
      .single()

    if (orderError) {
      setError(orderError.message)
      setSavingId("")
      return
    }

    const { error: itemError } = await supabase.from("order_items").insert({
      order_id: order.id,
      product_id: product.id,
      quantity,
      price_at_purchase: product.price,
    })

    if (itemError) {
      setError(itemError.message)
    } else {
      setSuccess("Checkout berhasil. Pesanan masuk dengan status Pending.")
      setQuantities((current) => ({ ...current, [product.id]: 1 }))
      loadProducts()
    }

    setSavingId("")
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-poppins text-[32px] font-bold text-gray-900">Katalog Produk</h1>
            <p className="text-sm font-semibold text-gray-400">Pilih produk dan checkout satu item.</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/member">Dashboard</Link>
          </Button>
        </div>

        {error && <AlertBox type="error">{error}</AlertBox>}
        {success && <AlertBox type="success">{success}</AlertBox>}
        {loading && <LoadingSpinner text="Memuat produk..." />}

        {!loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="rounded-[2rem] bg-white shadow-sm">
                {product.image_url && (
                  <img src={product.image_url} alt={product.name} className="h-48 w-full object-cover" />
                )}
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="min-h-12 text-sm text-gray-500">{product.description || "Tanpa deskripsi"}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xl font-black text-gray-900">{formatCurrency(product.price)}</span>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                      Stok {product.stock}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantities[product.id] || 1}
                    onChange={(event) => setQuantities((current) => ({ ...current, [product.id]: event.target.value }))}
                    className="h-10 w-24 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-green-100"
                  />
                  <Button disabled={savingId === product.id || product.stock < 1} onClick={() => checkout(product)}>
                    {savingId === product.id ? "Memproses..." : "Checkout"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

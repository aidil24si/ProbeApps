import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import { getTierFromPoints } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient"; 

const statusList = ["Pending", "Diproses", "Selesai", "Dibatalkan"];

const formatCurrency = (value) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value || 0);

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const loadOrders = async () => {
        setLoading(true);
        const { data, error: orderError } = await supabase
            .from("orders")
            .select("*, profiles(full_name, email, total_points), order_items(*, products(name))")
            .order("created_at", { ascending: false });

        if (orderError) setError(orderError.message);
        else setOrders(data || []);
        setLoading(false);
    };

    useEffect(() => {
        loadOrders();
    }, []);

    const awardPointsIfNeeded = async (order, nextStatus) => {
        if (nextStatus !== "Selesai" || order.status === "Selesai" || Number(order.points_earned) > 0 || !order.user_id) {
            return { pointsEarned: Number(order.points_earned || 0) };
        }

        const pointsEarned = Math.floor(Number(order.total_final || 0) / 10000);
        const currentPoints = Number(order.profiles?.total_points || 0);
        const nextPoints = currentPoints + pointsEarned;
        const nextTier = getTierFromPoints(nextPoints);

        const { error: profileError } = await supabase
            .from("profiles")
            .update({
                total_points: nextPoints,
                tier: nextTier,
            })
            .eq("id", order.user_id);

        if (profileError) throw profileError;

        return { pointsEarned };
    };

    const handleStatusChange = async (order, nextStatus) => {
        setUpdatingId(order.id);
        setError("");
        setSuccess("");

        try {
            const { pointsEarned } = await awardPointsIfNeeded(order, nextStatus);
            const { error: updateError } = await supabase
                .from("orders")
                .update({
                    status: nextStatus,
                    points_earned: pointsEarned,
                })
                .eq("id", order.id);

            if (updateError) throw updateError;

            setSuccess("Status order berhasil diperbarui.");
            await loadOrders();
        } catch (err) {
            setError(err.message || "Gagal memperbarui status order.");
        } finally {
            setUpdatingId("");
        }
    };

    return (
        <div id="orders-container" className="p-10 animate-in fade-in duration-700">
            <PageHeader 
                title="Orders" 
                breadcrumb={["Dashboard", "Order List"]}
            >
                <button 
                    id="add-button" 
                    className="bg-hijau hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center gap-2"
                >
                    <span className="text-xl">+</span> Add New Order
                </button>
            </PageHeader>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            <div id="orders-table" className="mt-10 overflow-x-auto rounded-[2rem] border border-gray-50 bg-white shadow-sm">
                {loading ? (
                    <LoadingSpinner text="Memuat order..." />
                ) : (
                    <table className="w-full table-auto">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Customer Name</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Items</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Total Price</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Order Date</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Points</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                        #{order.id.slice(0, 8)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {order.profiles?.full_name || "Customer"}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                                        {order.order_items?.map((item) => `${item.products?.name || "Produk"} (${item.quantity}x)`).join(", ")}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <select
                                            value={order.status}
                                            disabled={updatingId === order.id}
                                            onChange={(event) => handleStatusChange(order, event.target.value)}
                                            className={`rounded-full px-3 py-1 text-xs font-bold outline-none ${
                                                order.status === 'Selesai' ? 'bg-green-100 text-green-700' : 
                                                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
                                                order.status === 'Diproses' ? 'bg-blue-100 text-blue-700' :
                                                'bg-red-100 text-red-700'
                                            }`}
                                        >
                                            {statusList.map((status) => (
                                                <option key={status} value={status}>{status}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">
                                        {formatCurrency(order.total_final)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(order.created_at).toLocaleDateString("id-ID")}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                        {order.points_earned}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

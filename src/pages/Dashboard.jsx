import { useEffect, useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";

const formatCurrency = (value) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value || 0);

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalOrders: 0,
        completedOrders: 0,
        canceledOrders: 0,
        revenue: 0,
    });
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const loadDashboard = async () => {
            const { data: orders, error } = await supabase
                .from("orders")
                .select("id, status, total_final, created_at, profiles(full_name)")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Failed to load dashboard", error);
                return;
            }

            const orderList = orders || [];
            setStats({
                totalOrders: orderList.length,
                completedOrders: orderList.filter((order) => order.status === "Selesai").length,
                canceledOrders: orderList.filter((order) => order.status === "Dibatalkan").length,
                revenue: orderList
                    .filter((order) => order.status === "Selesai")
                    .reduce((sum, order) => sum + Number(order.total_final || 0), 0),
            });
            setActivities(orderList.slice(0, 3));
        };

        loadDashboard();
    }, []);

    return (
        <div id="dashboard-container" className="p-10 animate-in fade-in duration-700">
            {/* Grid Stat Cards */}
            <div id="dashboard-grid" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard icon={<FaShoppingCart />} count={stats.totalOrders} label="Total Orders" color="green" />
                <StatCard icon={<FaTruck />} count={stats.completedOrders} label="Total Selesai" color="green" />
                <StatCard icon={<FaBan />} count={stats.canceledOrders} label="Total Dibatalkan" color="red" />
                <StatCard icon={<FaDollarSign />} count={formatCurrency(stats.revenue)} label="Total Revenue" color="green" />
            </div>

            <div id="extra-dashboard-component" className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-8 rounded-[3rem] shadow-sm border border-gray-50">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-xl font-black text-gray-800">Revenue Analytics</h3>
                            <p className="text-xs text-gray-400">Statistik pendapatan order selesai</p>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-100 uppercase tracking-widest">Live Report</span>
                    </div>
                    <div className="h-72 w-full bg-gray-50 rounded-[2rem] flex items-center justify-center border-2 border-dashed border-gray-200">
                         <div className="flex items-end gap-3 h-40">
                            {[45, 70, 55, 80, 65, 95, 75].map((h, i) => (
                                <div key={i} style={{height: `${h}%`}} className="w-8 bg-green-500 rounded-t-xl opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></div>
                            ))}
                         </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-50">
                    <h3 className="text-xl font-black text-gray-800 mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {activities.length === 0 && (
                            <p className="text-sm text-gray-400">Belum ada aktivitas order.</p>
                        )}
                        {activities.map((order) => (
                            <div key={order.id} className="flex gap-4 items-start border-l-2 border-green-100 pl-4 relative">
                                <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-green-500"></div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-800">{order.profiles?.full_name || "Customer"}</span>
                                    <span className="text-[11px] text-gray-500">Order #{order.id.slice(0, 8)} - {order.status}</span>
                                    <span className="text-[10px] text-gray-300 mt-1 uppercase font-bold">
                                        {new Date(order.created_at).toLocaleDateString("id-ID")}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 bg-gray-50 text-gray-400 text-xs font-bold rounded-2xl hover:bg-green-50 hover:text-green-600 transition-all border border-transparent hover:border-green-100">
                        View All System Logs
                    </button>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, count, label, color }) {
    const colorClass = color === "red" ? "bg-red-50 text-red-500" : "bg-green-50 text-green-500";
    return (
        <div className="flex items-center gap-6 rounded-[2.5rem] bg-white p-8 shadow-sm border border-gray-50 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className={`flex h-20 w-20 items-center justify-center rounded-full text-4xl ${colorClass}`}>
                {icon}
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-poppins text-3xl font-black text-gray-900 leading-tight">{count}</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
            </div>
        </div>
    );
}

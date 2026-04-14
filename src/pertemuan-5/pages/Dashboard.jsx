import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="p-10 animate-in fade-in duration-700">
            {/* Grid Layout untuk 4 Kolom Stat Card */}
            <div id="dashboard-grid" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                
                {/* 1. Total Orders */}
                <div id="dashboard-orders" className="flex items-center gap-6 rounded-[2.5rem] bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                    <div id="orders-icon" className="flex h-22 w-22 items-center justify-center rounded-full bg-hijau/15 text-4xl text-hijau">
                        <FaShoppingCart />
                    </div>
                    <div id="orders-info" className="flex flex-col gap-1">
                        <span id="orders-count" className="font-poppins text-5xl font-black text-gray-900 leading-tight">75</span>
                        <span id="orders-text" className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Total Orders</span>
                    </div>
                </div>

                {/* 2. Total Delivered */}
                <div id="dashboard-delivered" className="flex items-center gap-6 rounded-[2.5rem] bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                    <div id="delivered-icon" className="flex h-22 w-22 items-center justify-center rounded-full bg-hijau/15 text-4xl text-hijau">
                        <FaTruck />
                    </div>
                    <div id="delivered-info" className="flex flex-col gap-1">
                        <span id="delivered-count" className="font-poppins text-5xl font-black text-gray-900 leading-tight">357</span>
                        <span id="delivered-text" className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Total Delivered</span>
                    </div>
                </div>

                {/* 3. Total Canceled */}
                <div id="dashboard-canceled" className="flex items-center gap-6 rounded-[2.5rem] bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                    <div id="canceled-icon" className="flex h-22 w-22 items-center justify-center rounded-full bg-merah/15 text-4xl text-merah">
                        <FaBan />
                    </div>
                    <div id="canceled-info" className="flex flex-col gap-1">
                        <span id="canceled-count" className="font-poppins text-5xl font-black text-gray-900 leading-tight">65</span>
                        <span id="canceled-text" className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Total Canceled</span>
                    </div>
                </div>

                {/* 4. Total Revenue */}
                <div id="dashboard-revenue" className="flex items-center gap-6 rounded-[2.5rem] bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                    <div id="revenue-icon" className="flex h-22 w-22 items-center justify-center rounded-full bg-hijau/15 text-4xl text-hijau">
                        <FaDollarSign />
                    </div>
                    <div id="revenue-info" className="flex flex-col gap-1">
                        <span id="revenue-amount" className="font-poppins text-5xl font-black text-gray-900 leading-tight">$128</span>
                        <span id="revenue-text" className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Total Revenue</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
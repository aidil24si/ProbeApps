import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function Customers() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadCustomers = async () => {
            setLoading(true);
            const { data, error: customerError } = await supabase
                .from("profiles")
                .select("*")
                .eq("role", "member")
                .order("created_at", { ascending: false });

            if (customerError) setError(customerError.message);
            else setCustomers(data || []);
            setLoading(false);
        };

        loadCustomers();
    }, []);

    return (
        <div id="customers-container" className="p-10 animate-in fade-in duration-700">
            <PageHeader 
                title="Customers" 
                breadcrumb={["Dashboard", "Customer List"]}
            >
                <button 
                    id="add-customer-button" 
                    className="bg-hijau hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center gap-2"
                >
                    <span className="text-xl">+</span> Add Customer
                </button>
            </PageHeader>

            {error && <AlertBox type="error">{error}</AlertBox>}

            <div id="customers-table" className="mt-10 overflow-x-auto rounded-[2rem] border border-gray-50 bg-white shadow-sm">
                {loading ? (
                    <LoadingSpinner text="Memuat customer..." />
                ) : (
                    <table className="w-full table-auto">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Customer ID</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Points</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Loyalty</th>
                                <th className="px-6 py-5 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {customers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                        #{customer.id.slice(0, 8)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        <Link 
                                            to={`/customers/${customer.id}`} 
                                            className="text-emerald-500 hover:text-emerald-700 font-semibold transition-colors">
                                            {customer.full_name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {customer.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {customer.total_points}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                                            customer.tier === 'Gold' ? 'bg-yellow-100 text-yellow-700' : 
                                            customer.tier === 'Silver' ? 'bg-slate-100 text-slate-700' : 
                                            customer.tier === 'Platinum' ? 'bg-purple-100 text-purple-700' :
                                            'bg-orange-100 text-orange-700'
                                        }`}>
                                            {customer.tier}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                        <Link to={`/customers/${customer.id}`} className="text-hijau hover:underline font-bold">View</Link>
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

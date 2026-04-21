import PageHeader from "../components/PageHeader";

export default function Orders() {
    return (
        <div id="orders-container" className="p-10 animate-in fade-in duration-700">   
            {/* <PageHeader title="Orders" subtitle="Manage your restaurant orders here" /> */}

            <div id="orders-table" className="mt-10 overflow-x-auto rounded-[2rem] border border-gray-50 bg-white shadow-sm">           
                <table className="w-full table-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Items</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#1001</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Doe</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Burger, Fries</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$15.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Completed</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button className="text-blue-600 hover:text-blue-900 font-medium">View</button>
                                <button className="ml-4 text-red-600 hover:text-red-900 font-medium">Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#1002</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jane Smith</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pizza, Salad</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$20.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Pending</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button className="text-blue-600 hover:text-blue-900 font-medium">View</button>
                                <button className="ml-4 text-red-600 hover:text-red-900 font-medium">Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#1003</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Alice Johnson</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pasta, Wine</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$30.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">Cancelled</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button className="text-blue-600 hover:text-blue-900 font-medium">View</button>
                                <button className="ml-4 text-red-600 hover:text-red-900 font-medium">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
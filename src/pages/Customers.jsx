import PageHeader from "../components/PageHeader";
export default function Customers() {
    return (
        <div id="customers-container" className="p-10 animate-in fade-in duration-700">   
            {/* <PageHeader title="Customers" subtitle="Manage your restaurant customers here" /> */}
            <div id="customers-table" className="mt-10 overflow-x-auto rounded-[2rem] border border-gray-50 bg-white shadow-sm">
                <table className="w-full table-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Customer ID</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#C001</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Doe</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">123-456-7890</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#C002</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jane Smith</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">987-654-3210</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#C003</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Alice Johnson</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">555-123-4567</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
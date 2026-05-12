import PageHeader from "../components/PageHeader";
// Pastikan path import ini sesuai dengan tempat kamu menyimpan file JSON tadi
import productData from "../data/products.json"; 
import { Link } from "react-router-dom";

export default function Products() {
    return (
        <div id="products-container" className="p-10 h-screen flex flex-col animate-in fade-in duration-700">   
            
            {/* Bagian Header Tetap Diam di Atas */}
            <div className="flex-none">
                <PageHeader 
                    title="Products" 
                    breadcrumb={["Dashboard", "Product List"]}
                >
                    <button 
                        id="add-button" 
                        className="bg-hijau hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center gap-2"
                    >
                        <span className="text-xl">+</span> Add New Product
                    </button>
                </PageHeader>
            </div>

            {/* Bagian Kontainer Tabel yang Bisa di-Scroll */}
            {/* Kita gunakan flex-grow dan overflow-hidden agar memenuhi sisa layar */}
            <div id="table-wrapper" className="mt-10 flex-grow overflow-hidden rounded-[2rem] border border-gray-50 bg-white shadow-sm flex flex-col">
                
                {/* overflow-y-auto di sini membuat scroll hanya terjadi di dalam div ini */}
                <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
                    <table className="w-full table-auto border-collapse">
                        {/* sticky top-0 agar header tabel tetap terlihat saat di-scroll */}
                        <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
                            <tr>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Code</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Tittle</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Brand</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-5 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Stock</th>
                                {/* <th className="px-6 py-5 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Action</th> */}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {productData.map((product) => (
                                <tr key={product.code} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                        {product.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                        {product.code}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        <Link to={`/products/${product.id}`} className="text-emerald-500 hover:text-emerald-900">
                                            {product.tittle}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg--100 text-green-700">
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                                        {product.brand}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                        Rp {product.price.toLocaleString('id-ID')}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-gray-600">
                                        {product.stock}
                                    </td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                        <button className="text-hijau hover:underline font-bold">Edit</button>
                                        <button className="ml-4 text-red-500 hover:underline font-bold">Delete</button>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
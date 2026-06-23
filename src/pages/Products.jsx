import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import { supabase } from "../lib/supabaseClient"; 
import { Link } from "react-router-dom";

const emptyForm = {
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
};

export default function Products() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState(emptyForm);
    const [editingProduct, setEditingProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const loadProducts = async () => {
        setLoading(true);
        const { data, error: productError } = await supabase
            .from("products")
            .select("*")
            .order("created_at", { ascending: false });

        if (productError) setError(productError.message);
        else setProducts(data || []);
        setLoading(false);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const openCreateModal = () => {
        setEditingProduct(null);
        setForm(emptyForm);
        setModalOpen(true);
    };

    const openEditModal = (product) => {
        setEditingProduct(product);
        setForm({
            name: product.name || "",
            description: product.description || "",
            price: product.price || "",
            stock: product.stock || "",
            image_url: product.image_url || "",
        });
        setModalOpen(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSaving(true);
        setError("");
        setSuccess("");

        const payload = {
            name: form.name,
            description: form.description,
            price: Number(form.price),
            stock: Number(form.stock),
            image_url: form.image_url || null,
        };

        const result = editingProduct
            ? await supabase.from("products").update(payload).eq("id", editingProduct.id)
            : await supabase.from("products").insert(payload);

        if (result.error) {
            setError(result.error.message);
        } else {
            setSuccess(editingProduct ? "Produk berhasil diperbarui." : "Produk berhasil ditambahkan.");
            setModalOpen(false);
            await loadProducts();
        }

        setSaving(false);
    };

    const handleDelete = async (product) => {
        const confirmed = confirm(`Hapus produk ${product.name}?`);
        if (!confirmed) return;

        const { error: deleteError } = await supabase
            .from("products")
            .delete()
            .eq("id", product.id);

        if (deleteError) setError(deleteError.message);
        else {
            setSuccess("Produk berhasil dihapus.");
            loadProducts();
        }
    };

    return (
        <div id="products-container" className="p-10 h-screen flex flex-col animate-in fade-in duration-700">   
            <div className="flex-none">
                <PageHeader 
                    title="Products" 
                    breadcrumb={["Dashboard", "Product List"]}
                >
                    <button 
                        id="add-button" 
                        onClick={openCreateModal}
                        className="bg-hijau hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center gap-2"
                    >
                        <span className="text-xl">+</span> Add New Product
                    </button>
                </PageHeader>
            </div>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            <div id="table-wrapper" className="mt-10 flex-grow overflow-hidden rounded-[2rem] border border-gray-50 bg-white shadow-sm flex flex-col">
                {loading ? (
                    <LoadingSpinner text="Memuat produk..." />
                ) : (
                    <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
                        <table className="w-full table-auto border-collapse">
                            <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
                                <tr>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-5 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Stock</th>
                                    <th className="px-6 py-5 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                            {product.id.slice(0, 8)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            <Link to={`/products/${product.id}`} className="text-emerald-500 hover:text-emerald-900">
                                                {product.name}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                            {product.description || "-"}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                            Rp {Number(product.price).toLocaleString('id-ID')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-gray-600">
                                            {product.stock}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                            <button onClick={() => openEditModal(product)} className="text-hijau hover:underline font-bold">Edit</button>
                                            <button onClick={() => handleDelete(product)} className="ml-4 text-red-500 hover:underline font-bold">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {modalOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 p-6">
                    <div className="w-full max-w-lg rounded-[2rem] bg-white p-8 shadow-2xl">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-xl font-black text-gray-800">
                                {editingProduct ? "Edit Product" : "Add Product"}
                            </h3>
                            <button onClick={() => setModalOpen(false)} className="rounded-full bg-gray-100 px-3 py-1 text-gray-500">x</button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input name="name" value={form.name} onChange={handleChange} required placeholder="Nama produk" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:ring-2 focus:ring-green-100" />
                            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Deskripsi" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:ring-2 focus:ring-green-100" />
                            <input name="price" type="number" min="0" value={form.price} onChange={handleChange} required placeholder="Harga" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:ring-2 focus:ring-green-100" />
                            <input name="stock" type="number" min="0" value={form.stock} onChange={handleChange} required placeholder="Stok" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:ring-2 focus:ring-green-100" />
                            <input name="image_url" value={form.image_url} onChange={handleChange} placeholder="Image URL" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:ring-2 focus:ring-green-100" />
                            <button disabled={saving} className="w-full rounded-2xl bg-hijau px-6 py-3 font-bold text-white hover:bg-green-600 disabled:opacity-60">
                                {saving ? "Menyimpan..." : "Simpan"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

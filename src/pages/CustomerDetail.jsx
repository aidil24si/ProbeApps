import { useParams, useNavigate } from "react-router-dom";
import customerData from "../data/customers.json";
import PageHeader from "../components/PageHeader";

export default function CustomerDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Mencari data customer berdasarkan ID string (CUS-XXX)
    const customer = customerData.find(c => c.id === id);

    if (!customer) {
        return (
            <div className="p-10 h-screen flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold text-gray-800">Ups! Data tidak ditemukan</h2>
                <button onClick={() => navigate("/customers")} className="mt-4 text-hijau font-bold hover:underline">
                    Kembali ke Daftar Pelanggan
                </button>
            </div>
        );
    }

    return (
        <div className="p-10 min-h-screen bg-gray-50/50 animate-in fade-in duration-700">
            {/* Header dengan Tombol Aksi */}
            <PageHeader 
                title="Detail Pelanggan" 
                breadcrumb={["Dashboard", "Customers", customer.name]}
            >
                <div className="flex gap-3">
                    <button 
                        onClick={() => navigate("/customers")}
                        className="bg-white border border-gray-200 text-gray-600 px-6 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95 shadow-sm text-sm"
                    >
                        Kembali
                    </button>
                    <button className="bg-hijau hover:bg-green-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-green-100 transition-all active:scale-95 text-sm">
                        Edit Profil
                    </button>
                </div>
            </PageHeader>

            <div className="mt-10 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* KARTU PROFIL UTAMA (KIRI) */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center h-fit">
                        <div className="relative">
                            <div className="w-32 h-32 bg-gradient-to-tr from-green-400 to-hijau rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-green-200">
                                {customer.name.charAt(0)}
                            </div>
                            <div className="absolute bottom-1 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                <span className="text-lg">✨</span>
                            </div>
                        </div>
                        
                        <h2 className="mt-6 text-2xl font-black text-gray-800">{customer.name}</h2>
                        <p className="text-gray-400 font-medium text-sm">{customer.id}</p>
                        
                        <div className={`mt-4 inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
                            customer.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-600' :
                            customer.loyalty === 'Silver' ? 'bg-blue-50 text-blue-600' :
                            'bg-orange-100 text-orange-600'
                        }`}>
                            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                            {customer.loyalty} Member
                        </div>
                    </div>

                    {/* DETAIL INFORMASI (KANAN) */}
                    <div className="md:col-span-2 space-y-6">
                        
                        {/* Box Informasi Kontak */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-hijau rounded-full"></span>
                                Informasi Personal
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
                                <InfoItem label="Alamat Email" value={customer.email} icon="✉️" />
                                <InfoItem label="Nomor Telepon" value={customer.phone} icon="📞" />
                                <InfoItem label="Status Akun" value="Aktif" icon="✅" />
                                <InfoItem label="Bergabung Sejak" value="12 Mei 2024" icon="🗓️" />
                            </div>
                        </div>

                        {/* Box Quick Stats (Dummy tambahan agar lebih menarik) */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Total Pesanan</p>
                                <p className="text-2xl font-black text-gray-800">48</p>
                            </div>
                            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Total Poin</p>
                                <p className="text-2xl font-black text-hijau">2.450</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Komponen Kecil agar kode lebih bersih
function InfoItem({ label, value, icon }) {
    return (
        <div className="flex items-start gap-4">
            <div className="text-xl bg-gray-50 w-10 h-10 flex items-center justify-center rounded-xl">
                {icon}
            </div>
            <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-1">
                    {label}
                </label>
                <p className="text-gray-700 font-bold">{value}</p>
            </div>
        </div>
    );
}
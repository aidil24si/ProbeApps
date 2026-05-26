import PageHeader from "../components/PageHeader";

export default function FiturXYZ(){
    return (
        <div id="orders-container" className="p-10 animate-in fade-in duration-700">
            <PageHeader 
                            title="Fitur XYZ" 
                            breadcrumb={["Dashboard", "Xyz"]}
                        >
                            {/* Tombol Add Order dimasukkan sebagai children */}
                            <button 
                                id="add-button" 
                                className="bg-hijau hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center gap-2"
                            >
                                <span className="text-xl">+</span> Fitur
                            </button>
                        </PageHeader>
                    <p>Ini halaman fitur xyz</p>
        </div>
    )
}
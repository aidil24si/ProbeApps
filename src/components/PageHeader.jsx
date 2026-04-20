export default function PageHeader() {
    return (
        <div id="pageheader-container" className="flex items-center justify-between mb-10">
            {/* Bagian Kiri: Judul & Breadcrumb */}
            <div id="pageheader-left" className="flex flex-col gap-2">
                <span id="page-title" className="font-poppins text-[32px] font-bold text-gray-900 leading-none">
                    Dashboard
                </span>
                <div id="breadcrumb-links" className="flex items-center gap-2 text-sm">
                    <span id="breadcrumb-home" className="font-semibold text-hijau cursor-pointer hover:underline">
                        Dashboard
                    </span>
                    <span id="breadcrumb-separator" className="font-bold text-gray-300">/</span>
                    <span id="breadcrumb-current" className="font-medium text-gray-400">
                        Order List
                    </span>
                </div>
            </div>

            {/* Bagian Kanan: Action Button */}
            <div id="action-button">
                <button 
                    id="add-button" 
                    className="bg-hijau hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center gap-2"
                >
                    <span className="text-xl">+</span> Add New Order
                </button>
            </div>
        </div>
    );
}
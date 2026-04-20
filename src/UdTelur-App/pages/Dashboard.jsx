import useStore from "../store/useStore";
import servicesData from "../data/services.json";

export default function Dashboard() {
  const { stokTelur } = useStore();

  return (
    <div className="space-y-10"> {/* Menjaga jarak antar section */}
      
      {/* --- SMART ALERT MULTI-LEVEL --- */}
      {stokTelur < 500 && (
        <div className={`p-8 rounded-[2.5rem] flex items-center gap-6 border-2 animate-in fade-in slide-in-from-top-4 duration-500 
          ${stokTelur === 0 ? 'bg-rose-50 border-rose-200 shadow-lg shadow-rose-100' : 'bg-amber-50 border-amber-200'}`}>
          
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl 
            ${stokTelur === 0 ? 'bg-rose-500 animate-pulse' : 'bg-amber-500'}`}>
            {stokTelur === 0 ? '!' : 'i'}
          </div>
          
          <div>
            <h3 className={`text-xl font-black ${stokTelur === 0 ? 'text-rose-800' : 'text-amber-800'}`}>
              {stokTelur === 0 ? 'Peringatan: Stok Habis!' : 'Perhatian: Stok Menipis!'}
            </h3>
            <p className={`font-medium ${stokTelur === 0 ? 'text-rose-600/80' : 'text-amber-600/80'}`}>
              {stokTelur === 0 
                ? 'Segera lakukan pengisian stok di menu Admin untuk melanjutkan operasional.' 
                : `Sisa stok saat ini hanya ${stokTelur} butir. Segera hubungi supplier.`}
            </p>
          </div>
        </div>
      )}

      {/* --- HEADER RINGKASAN --- */}
      <section className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-black text-gray-800 tracking-tight">Ringkasan Gudang</h2>
          <p className="text-gray-400 font-medium">Pantau ketersediaan stok dan layanan aktif.</p>
        </div>
        
        <div className={`p-8 rounded-[2rem] shadow-xl transition-all duration-500 border-2
          ${stokTelur === 0 
            ? 'bg-rose-600 border-rose-700 text-white scale-105' 
            : 'bg-white border-gray-100 text-right'}`}>
          <p className={`${stokTelur === 0 ? 'text-rose-100' : 'text-gray-400'} text-xs font-bold uppercase tracking-widest mb-1`}>Total Stok</p>
          <p className="text-5xl font-black">
            {stokTelur.toLocaleString()} 
            <span className={`text-xl font-medium ml-2 ${stokTelur === 0 ? 'text-rose-200' : 'text-gray-300'}`}>Butir</span>
          </p>
        </div>
      </section>

      {/* --- LAYANAN SECTION --- */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-gray-700 flex items-center gap-2">
          Layanan Tersedia <span className="px-2 py-0.5 bg-gray-100 text-[10px] rounded-md text-gray-400">{servicesData.length}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-[2.5rem] shadow-sm border border-gray-50 hover:shadow-2xl transition-all duration-300 group">
              <div className="overflow-hidden rounded-3xl mb-4 h-44 bg-gray-100">
                <img src={item.image} alt={item.nama} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h4 className="font-bold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors">{item.nama}</h4>
              <p className="text-amber-600 font-black text-xl">Rp {item.harga.toLocaleString()}</p>
              
              <button 
                disabled={stokTelur === 0}
                className={`w-full mt-4 py-4 rounded-2xl font-black text-sm transition-all
                ${stokTelur === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-900 text-white hover:bg-amber-500 shadow-lg shadow-gray-200 hover:shadow-amber-200'}`}
              >
                {stokTelur === 0 ? 'Stok Tidak Cukup' : 'Pesan Layanan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
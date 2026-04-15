import useStore from "../store/useStore";
import servicesData from "../data/services.json";

export default function Dashboard() {
  const { stokTelur } = useStore();

  return (
    <>
{/* --- PELETAKAN EMPTY STATE DISINI --- */}
      {stokTelur === 0 && (
        <div className="mb-8 bg-rose-50 border-2 border-rose-200 p-6 rounded-[2rem] flex items-center gap-5 animate-pulse">
          <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-rose-200">
            ⚠️
          </div>
          <div>
            <h3 className="text-rose-800 font-black text-lg">Peringatan: Stok Habis!</h3>
            <p className="text-rose-600/80 font-medium text-sm">Segera lakukan pengisian stok di menu Admin untuk melanjutkan operasional.</p>
          </div>
        </div>
      )}
      {/* ------------------------------------ */}

      <section className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-gray-800 tracking-tight">Ringkasan Gudang</h2>
          <p className="text-gray-400 font-medium">Pantau ketersediaan stok dan layanan aktif.</p>
        </div>
        
        {/* Card Stok yang akan berubah warna jika 0 */}
        <div className={`p-6 rounded-3xl shadow-sm border transition-all ${stokTelur === 0 ? 'bg-rose-500 border-rose-600 text-white' : 'bg-white border-gray-100 text-right'}`}>
          <p className={`${stokTelur === 0 ? 'text-rose-100' : 'text-gray-400'} text-[10px] font-bold uppercase tracking-widest mb-1`}>Total Stok Telur</p>
          <p className="text-4xl font-black">
            {stokTelur.toLocaleString()} 
            <span className={`text-lg font-normal ${stokTelur === 0 ? 'text-rose-200' : 'text-gray-300'}`}> Butir</span>
          </p>
        </div>
      </section>

      <h3 className="text-xl font-bold mb-6 text-gray-700">Layanan Tersedia</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-[2rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden rounded-2xl mb-4">
              <img src={item.image} alt={item.nama} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h4 className="font-bold text-gray-800 mb-1">{item.nama}</h4>
            <p className="text-amber-600 font-black text-lg">Rp {item.harga.toLocaleString()}</p>
            <button className="w-full mt-4 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-amber-500 transition-colors">
              Pesan Layanan
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
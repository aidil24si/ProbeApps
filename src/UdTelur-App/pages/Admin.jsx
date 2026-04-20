import { useState } from "react";
import useStore from "../store/useStore";

// Komponen Kecil untuk Stat Card (4 Kotak Atas)
const StatCard = ({ icon, label, count, color, bg }) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50 flex items-center gap-5 hover:shadow-xl transition-all">
    <div className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center text-2xl shadow-inner`}>
      {icon}
    </div>
    <div>
      <p className="text-2xl font-black text-gray-800 leading-none mb-1">{count}</p>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</p>
    </div>
  </div>
);

export default function Admin() {
  const { stokTelur, tambahStok, kurangStok, resetStok, tambahLog } = useStore();
  const [jumlahInput, setJumlahInput] = useState("");

  const handleAction = (type) => {
    const qty = parseInt(jumlahInput);
    if (!qty || qty <= 0) return alert("Masukkan jumlah valid!");
    
    if (type === "tambah") {
      tambahStok(qty);
      tambahLog(`Stok Masuk: +${qty}`, "Admin");
    } else {
      if (qty > stokTelur) return alert("Stok tidak cukup!");
      kurangStok(qty);
      tambahLog(`Stok Keluar: -${qty}`, "Admin");
    }
    setJumlahInput("");
  };

  return (
    <div className="space-y-8">
      {/* ROW 1: STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon="🛒" label="Total Orders" count="75" color="text-emerald-500" bg="bg-emerald-50" />
        <StatCard icon="🚚" label="Total Delivered" count="357" color="text-blue-500" bg="bg-blue-50" />
        <StatCard icon="🚫" label="Total Canceled" count="65" color="text-rose-500" bg="bg-rose-50" />
        <StatCard icon="💰" label="Total Revenue" count={`Rp ${(stokTelur * 2000).toLocaleString()}`} color="text-amber-500" bg="bg-amber-50" />
      </div>

      {/* ROW 2: FORM & CHART AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Update */}
        <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black text-gray-800 mb-2">Update Gudang</h3>
            <p className="text-xs text-gray-400 mb-8 font-medium italic">Klik tombol untuk sinkronisasi stok.</p>
            
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-2 block">Input Jumlah (Butir)</label>
            <input 
              type="number" 
              value={jumlahInput}
              onChange={(e) => setJumlahInput(e.target.value)}
              placeholder="Contoh: 1000"
              className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-amber-200 font-bold text-lg mb-4"
            />
          </div>
          
          <div className="space-y-3">
            <button onClick={() => handleAction("tambah")} className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-sm hover:bg-amber-500 shadow-lg transition-all">
              + KONFIRMASI STOK MASUK
            </button>
            <button onClick={() => handleAction("kurang")} className="w-full py-4 bg-white text-rose-500 border border-rose-100 rounded-2xl font-black text-sm hover:bg-rose-50 transition-all">
              - CATAT STOK KELUAR
            </button>
          </div>
        </div>

        {/* Visual Info (Simulasi Chart) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center text-4xl mb-4 border-4 border-white shadow-xl">🥚</div>
          <h2 className="text-5xl font-black text-gray-800">{stokTelur.toLocaleString()}</h2>
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">Kapasitas Gudang Terisi</p>
          <div className="w-full max-w-xs h-2 bg-gray-50 rounded-full mt-6 overflow-hidden">
             <div className="h-full bg-amber-500 rounded-full transition-all duration-1000" style={{width: `${(stokTelur/5000)*100}%`}}></div>
          </div>
        </div>
      </div>

      {/* ROW 3: TABEL DETAIL */}
      <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-50">
        <div className="flex justify-between items-center mb-8">
           <h3 className="text-2xl font-black text-gray-800">Detail Inventaris</h3>
           <button className="bg-blue-50 text-blue-600 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-100 transition-all">
             Save Report
           </button>
        </div>
        <div className="overflow-hidden rounded-3xl border border-gray-50 shadow-inner">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase font-black tracking-widest">
              <tr>
                <th className="p-6">Komoditas</th>
                <th className="p-6 text-center">Stok Gudang</th>
                <th className="p-6 text-center">Status Keamanan</th>
                <th className="p-6 text-right">Manajemen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 font-bold">
              <tr className="hover:bg-amber-50/30 transition-colors">
                <td className="p-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-xs">🐔</span>
                  Telur Ayam Negeri
                </td>
                <td className="p-6 text-center text-2xl font-black text-gray-800">{stokTelur.toLocaleString()}</td>
                <td className="p-6 text-center">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] uppercase ${stokTelur < 500 ? 'bg-rose-100 text-rose-600 animate-pulse' : 'bg-emerald-100 text-emerald-600'}`}>
                    {stokTelur < 500 ? 'Bahaya' : 'Aman'}
                  </span>
                </td>
                <td className="p-6 text-right">
                  <button className="text-xs text-blue-500 hover:underline">Edit Detail</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
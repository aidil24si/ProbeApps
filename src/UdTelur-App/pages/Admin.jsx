// src/UdTelur-App/pages/Admin.jsx
import useStore from "../store/useStore";

export default function Admin() {
  const { stokTelur, tambahStok, kurangStok, resetStok } = useStore();

  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
      <h2 className="text-3xl font-black text-gray-800 mb-2">Panel Manajemen Stok</h2>
      <p className="text-gray-400 mb-8">Update ketersediaan stok telur di gudang secara real-time.</p>

      <div className="flex items-center gap-10 bg-amber-50 p-8 rounded-3xl border border-amber-100">
        <div>
          <p className="text-amber-800 font-bold uppercase tracking-widest text-xs mb-1">Stok Gudang Saat Ini</p>
          <p className="text-6xl font-black text-amber-600">{stokTelur.toLocaleString()} <span className="text-xl font-medium">Butir</span></p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <button onClick={() => tambahStok(100)} className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-500 transition-colors">
              + 100 Butir
            </button>
            <button onClick={() => kurangStok(100)} className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-xl font-bold hover:bg-rose-50 transition-colors">
              - 100 Butir
            </button>
          </div>
          <button onClick={() => resetStok()} className="text-rose-500 font-bold text-sm underline mt-2 text-left px-2">
            Reset Stok (Habiskan)
          </button>
        </div>
      </div>
    </div>
  );
}
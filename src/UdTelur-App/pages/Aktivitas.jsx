import useStore from "../store/useStore";

export default function Aktivitas() {
  // Ambil data logs dari Zustand store
  const { logs } = useStore();

  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-800">Log Aktivitas Gudang</h2>
        <p className="text-gray-400 mt-1">Riwayat transaksi stok dan pesanan layanan secara real-time.</p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-50 shadow-inner">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-900 text-white text-[10px] uppercase font-bold tracking-widest">
            <tr>
              <th className="p-6">ID Aktivitas</th>
              <th className="p-6">Aksi / Layanan</th>
              <th className="p-6">Jumlah/Status</th>
              <th className="p-6">Waktu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {logs.length > 0 ? (
              logs.map((log) => (
                <tr key={log.id} className="hover:bg-amber-50/50 transition-colors group">
                  <td className="p-6 text-gray-300 font-mono text-xs">#{log.id.toString().slice(-5)}</td>
                  <td className="p-6">
                    <div className="font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                      {log.aksi}
                    </div>
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${
                      log.jumlah.includes('+') ? 'bg-green-100 text-green-600' : 
                      log.jumlah.includes('-') ? 'bg-rose-100 text-rose-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {log.jumlah === "1" ? "PESANAN BARU" : log.jumlah}
                    </span>
                  </td>
                  <td className="p-6 text-gray-400 text-sm font-medium">{log.waktu}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-20 text-center text-gray-300 font-medium italic">
                  Belum ada aktivitas tercatat hari ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
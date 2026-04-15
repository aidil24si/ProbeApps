import useStore from "../store/useStore";
import servicesData from "../data/services.json";

export default function Katalog() {
  // Mengambil fungsi tambahLog dari store agar bisa mencatat pesanan
  const { tambahLog } = useStore();

  const handlePesan = (namaLayanan) => {
    // Menambahkan log aktivitas baru
    tambahLog(`Pesan: ${namaLayanan}`, "1");
    
    // Memberikan feedback ke user
    alert(`Berhasil memesan ${namaLayanan}! Riwayat pesanan telah dicatat di menu Aktivitas.`);
  };

  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
      {/* Header Halaman */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-black text-gray-800 tracking-tight">Katalog Layanan</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Pilih berbagai layanan pendukung operasional UD Telur dengan harga terbaik dan pengerjaan profesional.
        </p>
      </div>

      {/* Grid Katalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((item) => (
          <div 
            key={item.id} 
            className="group border border-gray-100 rounded-[2rem] p-6 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-100 transition-all duration-300"
          >
            {/* Bagian Gambar */}
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img 
                src={item.image} 
                alt={item.nama} 
                className="w-full h-56 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-amber-500 px-4 py-1.5 rounded-full shadow-lg">
                  Layanan Unggulan
                </span>
              </div>
            </div>

            {/* Informasi Produk */}
            <h4 className="text-2xl font-black text-gray-800 group-hover:text-amber-600 transition-colors">
              {item.nama}
            </h4>
            <p className="text-gray-400 text-sm mt-2 line-clamp-2">
              Layanan profesional untuk mendukung kualitas produksi dan kebersihan alat peternakan Anda.
            </p>

            <hr className="my-6 border-gray-50" />

            {/* Harga dan Tombol */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">Mulai Dari</p>
                <p className="text-2xl font-black text-gray-900">
                  Rp {item.harga.toLocaleString()}
                </p>
              </div>
              <button 
                onClick={() => handlePesan(item.nama)}
                className="bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-amber-500 hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Pesan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
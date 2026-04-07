import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  /* 1. Inisialisasi DataForm di awal */
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    selectedDeveloper: "", // Tambahkan di sini agar konsisten
  });

  /* 2. Handle perubahan nilai input form */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* 3. Deklarasi Logic Search & Filter (Gunakan dataForm secara langsung) */
  const _searchTerm = dataForm.searchTerm.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    // Filter berdasarkan teks (Nama atau Deskripsi)
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    // Filter berdasarkan tag
    const matchesTag = dataForm.selectedTag 
      ? framework.tags.includes(dataForm.selectedTag) 
      : true;

    // Filter berdasarkan developer
    const matchesDeveloper = dataForm.selectedDeveloper 
      ? framework.details.developer === dataForm.selectedDeveloper 
      : true;

    return matchesSearch && matchesTag && matchesDeveloper;
  });

  /** Deklarasi pengambilan data unik untuk Dropdown **/
  const allTags = [...new Set(frameworkData.flatMap((f) => f.tags))].sort();
  const allDevelopers = [...new Set(frameworkData.map((f) => f.details.developer))].sort();

  return (
    <div className="p-8 bg-[#1a1a1a] min-h-screen font-serif text-[#d4af37]">
      <h1 className="text-4xl text-center mb-12 uppercase tracking-[0.2em] border-b-2 border-amber-600 pb-4">
        Arsip Agung Framework
      </h1>

      {/* --- PANEL KONTROL KERAJAAN --- */}
      <div className="max-w-4xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Cari naskah..."
          className="p-3 bg-[#262626] border border-amber-700 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none text-amber-200"
          name="searchTerm"
          value={dataForm.searchTerm}
          onChange={handleChange}
        />

        {/* Filter Tag */}
        <select
          className="p-3 bg-[#262626] border border-amber-700 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none text-amber-200"
          name="selectedTag"
          value={dataForm.selectedTag}
          onChange={handleChange}
        >
          <option value="">Semua Tag</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>◈ {tag}</option>
          ))}
        </select>

        {/* Filter Developer */}
        <select
          className="p-3 bg-[#262626] border border-amber-700 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none text-amber-200"
          name="selectedDeveloper"
          value={dataForm.selectedDeveloper}
          onChange={handleChange}
        >
          <option value="">Semua Penempa (Dev)</option>
          {allDevelopers.map((dev, index) => (
            <option key={index} value={dev}>⚙ {dev}</option>
          ))}
        </select>
      </div>

      {/* --- DAFTAR FRAMEWORK --- */}
      <div className="max-w-4xl mx-auto">
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item, idx) => (
            <div
              key={item.id}
              className="relative border-2 border-amber-700 p-8 mb-10 rounded-sm bg-[#262626] 
                         shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 
                         hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
                         animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>

              <h2 className="text-3xl font-bold text-amber-400 mb-2 uppercase tracking-wide">
                {item.name}
              </h2>

              <p className="text-gray-300 italic mb-4 leading-relaxed border-l-4 border-red-800 pl-4">
                "{item.description}"
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Ditempa oleh:{" "}
                <span className="text-amber-200 font-bold uppercase">
                  {item.details.developer}
                </span>
                <span className="mx-2">|</span>
                Tahun Era:{" "}
                <span className="text-amber-200">{item.details.releaseYear}</span>
              </p>

              <div className="mt-6">
                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-900 text-amber-200 px-6 py-2 border border-amber-600 
                             hover:bg-amber-600 hover:text-black transition-colors duration-300 
                             text-sm font-bold uppercase tracking-widest"
                >
                  Kunjungi Situs Resmi
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 border border-amber-900 bg-[#1d1d1d] text-amber-500 
                               text-[10px] uppercase tracking-tighter rounded-sm shadow-inner"
                  >
                    ◈ {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-20 border-2 border-dashed border-amber-900 rounded-lg">
             <p className="text-amber-800 italic">Maaf, naskah tidak ditemukan dalam pustaka ini.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
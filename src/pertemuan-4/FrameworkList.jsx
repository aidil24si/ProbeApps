import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8 bg-[#1a1a1a] min-h-screen font-serif text-[#d4af37]">
            <h1 className="text-4xl text-center mb-12 uppercase tracking-[0.2em] border-b-2 border-amber-600 pb-4">
                Arsip Agung Framework
            </h1>
            
            <div className="max-w-4xl mx-auto">
                {frameworkData.map((item, idx) => (
                    <div 
                        key={item.id} 
                        className="relative border-2 border-amber-700 p-8 mb-10 rounded-sm bg-[#262626] 
                                   shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 
                                   hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
                                   animate-fade-in-up"
                        style={{ animationDelay: `${idx * 150}ms` }}
                    >
                        {/* Ornamen Sudut */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>

                        {/* Judul & Deskripsi */}
                        <h2 className="text-3xl font-bold text-amber-400 mb-2 uppercase tracking-wide">
                            {item.name}
                        </h2>
                        <p className="text-gray-300 italic mb-4 leading-relaxed border-l-4 border-red-800 pl-4">
                            "{item.description}"
                        </p>
                        
                        {/* Info Developer */}
                        <p className="text-sm text-gray-400 mt-2">
                            Ditempa oleh: <span className="text-amber-200 font-bold uppercase">{item.details.developer}</span> 
                            <span className="mx-2">|</span> 
                            Tahun Era: <span className="text-amber-200">{item.details.releaseYear}</span>
                        </p>

                        {/* Link Website */}
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

                        {/* Tags sebagai Segel Kerajaan */}
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
                ))}
            </div>

            {/* CSS Animasi Sederhana */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
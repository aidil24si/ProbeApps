export default function TailwindCSS(){
    return(
        <div>
           
            <Spacing1/>
            <Typography1/>
            <BorderRadius1/>
            <BackgroundColors1/>
            <FlexboxGrid1/>
            <ShadowEffects1/>
        </div>
    )
}

function Spacing(){
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold m-4">Card Title</h2>
            <p className="mt-2 text-gray-600 m-4">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography(){
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-600 m-4">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2 m-4 ">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-blue-500 text-white p-6 m-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="text-lg font-bold">Logout</h1>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function Spacing1() {
  return (
    <div className="bg-white/50 border-y border-stone-200 py-8 my-12 text-center shadow-sm">
      <p className="text-stone-500 font-serif italic tracking-widest text-sm uppercase">
        — Maklumat Resmi Digital Kerajaan Tailwind —
      </p>
    </div>
  );
}

function Typography1() {
  return (
    <div className="text-center mb-16 px-4">
      <h2 className="text-7xl font-serif font-black text-stone-900 tracking-tighter uppercase mb-4">
        Titah Sang Baginda
      </h2>
      <div className="h-1.5 w-40 bg-amber-600 mx-auto rounded-full mb-6"></div>
      <p className="text-xl text-stone-600 font-medium italic max-w-2xl mx-auto leading-relaxed">
        "Membangun harmoni dalam setiap baris kode untuk kemaslahatan seluruh rakyat digital di jagat raya."
      </p>
    </div>
  );
}

function BorderRadius1() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mb-16">
      <button className="bg-stone-900 text-amber-500 px-10 py-4 rounded-tl-[2rem] rounded-br-[2rem] border-2 border-amber-600 font-black uppercase tracking-widest hover:bg-amber-600 hover:text-stone-900 transition-all duration-300 shadow-xl active:scale-95">
        Sudut Tajam
      </button>
      <button className="bg-amber-600 text-stone-900 px-10 py-4 rounded-full border-2 border-stone-900 font-black uppercase tracking-widest hover:bg-stone-900 hover:text-amber-500 transition-all duration-300 shadow-xl active:scale-95">
        Sudut Bulat
      </button>
    </div>
  );
}

function BackgroundColors1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 px-6">
      <div className="group bg-red-950 p-8 rounded-2xl shadow-lg border-l-8 border-red-600 transform hover:-translate-y-2 transition-all">
        <h4 className="text-red-500 font-black tracking-[0.2em] mb-2">DIVISI</h4>
        <p className="text-white text-2xl font-serif font-bold italic">Panji Perang</p>
      </div>
      <div className="group bg-emerald-950 p-8 rounded-2xl shadow-lg border-l-8 border-emerald-500 transform hover:-translate-y-2 transition-all">
        <h4 className="text-emerald-400 font-black tracking-[0.2em] mb-2">WILAYAH</h4>
        <p className="text-white text-2xl font-serif font-bold italic">Zona Aman</p>
      </div>
      <div className="group bg-amber-900 p-8 rounded-2xl shadow-lg border-l-8 border-amber-400 transform hover:-translate-y-2 transition-all">
        <h4 className="text-amber-300 font-black tracking-[0.2em] mb-2">PERBENDAHARAAN</h4>
        <p className="text-white text-2xl font-serif font-bold italic">Kas Negara</p>
      </div>
    </div>
  );
}

function FlexboxGrid1() {
  return (
    <nav className="flex justify-between items-center bg-stone-900 p-6 px-12 text-amber-500 shadow-[0_10px_30px_rgba(0,0,0,0.3)] sticky top-0 z-50 border-b-2 border-amber-700/30 backdrop-blur-md bg-opacity-95">
      <div className="flex items-center gap-4 group cursor-pointer">
        <span className="text-3xl group-hover:rotate-12 transition-transform">🏰</span>
        <h1 className="text-2xl font-serif font-black tracking-[0.2em] uppercase">KingdomOS</h1>
      </div>
      
      <ul className="hidden md:flex space-x-12 font-bold text-[10px] tracking-[0.3em] uppercase">
        <li className="hover:text-white cursor-pointer transition-colors relative group">
          Istana
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all"></span>
        </li>
        <li className="hover:text-white cursor-pointer transition-colors relative group">
          Ksatria
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all"></span>
        </li>
        <li className="hover:text-white cursor-pointer transition-colors relative group">
          Arsip
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all"></span>
        </li>
      </ul>

      <button className="text-[10px] font-black uppercase tracking-[0.2em] border-2 border-amber-600 px-6 py-2 rounded-full hover:bg-amber-600 hover:text-stone-900 transition-all active:scale-90">
        Keluar Gerbang
      </button>
    </nav>
  );
}

function ShadowEffects1() {
  return (
    <div className="max-w-3xl mx-auto mb-24 px-6">
      <div className="bg-white p-16 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(120,90,40,0.15)] border border-stone-100 text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700"></div>
        <h3 className="text-xs font-black text-stone-400 mb-8 uppercase tracking-[0.5em]">Segel Keamanan Kerajaan</h3>
        <div className="w-32 h-32 bg-stone-50 rounded-full mx-auto flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] mb-6 group-hover:scale-110 transition-transform duration-500">
            <span className="text-6xl filter drop-shadow-lg">👑</span>
        </div>
        <p className="text-stone-800 text-2xl font-serif italic font-bold">"Terautentikasi oleh Dewan Kode Tinggi"</p>
      </div>
    </div>
  );
}

// --- Komponen Utama ---

function Awal(){
    return(
        <div>
                    <h1 classN="border m-4">Belajar Tailwind CSS 4</h1>
            <button className="bg-blue-700 text-white
                                px-4 py-2 mx-4 rounded
                                shadow-lg">Click Me</button> 
        </div>

    );
 
} 
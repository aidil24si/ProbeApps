import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Katalog from "./pages/Katalog";
import Aktivitas from "./pages/Aktivitas";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";

export default function App() {
  return (
    // Container utama harus flex agar sidebar dan konten bersebelahan
    <div className="flex min-h-screen bg-[#F9FAFB] w-full">
      
      {/* 1. SIDEBAR (Tetap di kiri) */}
      <aside className="w-64 bg-white border-r border-gray-100 fixed h-full z-20">
        <Navbar />
      </aside>

      {/* 2. AREA KONTEN UTAMA (Harus ada ml-64 agar tidak tertutup sidebar) */}
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        
        {/* HEADER ATAS */}
        <header className="flex justify-between items-center p-10 bg-[#F9FAFB]/80 backdrop-blur-md sticky top-0 z-10">
          <div className="relative w-96">
            <input 
              type="text" 
              placeholder="Search here..." 
              className="w-full bg-white p-3 pl-12 rounded-2xl border border-gray-100 outline-none shadow-sm focus:ring-2 focus:ring-amber-100 text-sm"
            />
            <span className="absolute left-4 top-3.5 text-gray-300 text-lg">🔍</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-black text-gray-800">Admin UD Telur</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Super Admin</p>
            </div>
            <div className="w-12 h-12 bg-amber-200 rounded-2xl overflow-hidden border-2 border-white shadow-md">
              <img src="https://ui-avatars.com/api/?name=Admin+Telur&background=FFBF00&color=fff" alt="Profile" />
            </div>
          </div>
        </header>

        {/* AREA DINAMIS (KONTEN HALAMAN) */}
        <div className="px-10 pb-10 flex-1">
          <Routes>
            {/* Route utama menggunakan index agar langsung muncul */}
            <Route index element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/aktivitas" element={<Aktivitas />} />
            <Route path="/admin" element={<Admin />} />
            
            {/* Jika nyasar, balikkan ke Dashboard */}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <footer className="py-8 border-t border-gray-100 text-center bg-white/50">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 <span className="text-amber-600">UD TELUR</span> Management System
          </p>
        </footer>
      </main>
    </div>
  );
}
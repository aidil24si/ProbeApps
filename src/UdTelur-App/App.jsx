import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Katalog from "./pages/Katalog";
import Aktivitas from "./pages/Aktivitas";

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white border-r border-gray-100 fixed h-full z-10">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
      </aside>
      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-64 p-10 flex flex-col">
        {" "}
        {/* Ditambah flex-col agar footer bisa di bawah */}
        {/* TOP HEADER */}
        <header className="flex justify-between items-center mb-10">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-white p-3 pl-12 rounded-2xl border border-gray-100 outline-none shadow-sm focus:ring-2 focus:ring-amber-100 transition-all text-sm"
            />
            <span className="absolute left-4 top-3.5 text-gray-300 text-lg">
              🔍
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-3 mr-4">
              <button className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center relative">
                🔔{" "}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  21
                </span>
              </button>
              <button className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center">
                ⚙️
              </button>
            </div>
            <div className="h-10 w-[1px] bg-gray-100 mx-2"></div>
            <div className="text-right">
              <p className="text-sm font-black text-gray-800">Admin UD Telur</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Super Admin
              </p>
            </div>
            <div className="w-12 h-12 bg-amber-200 rounded-2xl overflow-hidden border-2 border-white shadow-md">
              <img
                src="https://ui-avatars.com/api/?name=Admin+Telur&background=FFBF00&color=fff"
                alt="Profile"
              />
            </div>
          </div>
        </header>
        {/* PAGE CONTENT */}
        <div className="animate-in fade-in duration-500 flex-1">
          {activePage === "dashboard" && <Dashboard />}
          {activePage === "admin" && <Admin />}
          {activePage === "katalog" && <Katalog />}
          {activePage === "aktivitas" && <Aktivitas />}

          {/* FOOTER DI DALAM MAIN CONTENT */}
          <footer className="mt-20 py-8 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              © 2026 <span className="text-amber-600">UD TELUR</span> Management
              System v1.0
            </p>
          </footer>
        </div>
      </main>{" "}
      {/* INI TADI YANG KURANG: Tag penutup main */}
    </div> // INI TADI YANG KURANG: Tag penutup div utama
  );
}

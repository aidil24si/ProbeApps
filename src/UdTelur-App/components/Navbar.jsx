import { NavLink } from "react-router-dom"; //

export default function Navbar() {
  // Fungsi styling untuk menu aktif
  const menuClass = ({ isActive }) => 
    `flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all font-bold text-sm
    ${isActive 
      ? "bg-green-500/10 text-green-600 shadow-sm translate-x-2" // Gaya Sedap Hijau Aktif
      : "text-gray-400 hover:bg-gray-50 hover:text-amber-600"}`;

  return (
    <div className="flex flex-col h-full p-6">
      {/* LOGO AREA */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-amber-200">U</div>
        <h1 className="text-xl font-black text-gray-800 tracking-tight">UD TELUR<span className="text-amber-500">.</span></h1>
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink to="/" className={menuClass}>
              <span className="text-xl">📊</span> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={menuClass}>
              <span className="text-xl">🛍️</span> Order List
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={menuClass}>
              <span className="text-xl">👥</span> Customers
            </NavLink>
          </li>
          <li>
            <NavLink to="/katalog" className={menuClass}>
              <span className="text-xl">🍳</span> Katalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/aktivitas" className={menuClass}>
              <span className="text-xl">📝</span> Aktivitas
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={menuClass}>
              <span className="text-xl">⚙️</span> Admin
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* HELP CARD */}
      <div className="bg-amber-500 p-6 rounded-[2.5rem] relative overflow-hidden group">
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400 rounded-full opacity-50 group-hover:scale-150 transition-all duration-500"></div>
        <div className="relative z-10 text-center">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">💡</div>
          <p className="text-white font-bold text-xs leading-relaxed mb-4">Butuh bantuan dalam mengelola stok?</p>
          <button className="bg-white text-amber-600 w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-lg">Kontak Support</button>
        </div>
      </div>
    </div>
  );
}
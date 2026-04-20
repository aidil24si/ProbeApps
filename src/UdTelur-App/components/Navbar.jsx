export default function Navbar({ activePage, setActivePage }) {
  const menus = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "katalog", label: "Katalog Layanan", icon: "🍳" },
    { id: "aktivitas", label: "Aktivitas Log", icon: "📝" },
    { id: "admin", label: "Manajemen Stok", icon: "⚙️" },
  ];

  return (
    <div className="flex flex-col h-full p-6">
      {/* LOGO AREA */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-amber-200">
          UD
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tighter text-gray-800 leading-none">SEDAP.</h1>
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Telur App</p>
        </div>
      </div>

      {/* MENU LIST */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menus.map((menu) => (
            <li 
              key={menu.id}
              onClick={() => setActivePage(menu.id)}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all font-bold text-sm
                ${activePage === menu.id 
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-100 translate-x-2" 
                  : "text-gray-400 hover:bg-gray-50 hover:text-amber-600"}`}
            >
              <span className="text-xl">{menu.icon}</span>
              {menu.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* FOOTER SIDEBAR */}
      <div className="mt-auto bg-gray-900 p-6 rounded-[2rem] relative overflow-hidden group">
        <p className="text-white text-xs font-bold relative z-10">Butuh bantuan?</p>
        <button className="mt-3 bg-white text-gray-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase relative z-10 hover:bg-amber-500 hover:text-white transition-all">
          Kontak Support
        </button>
        <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform"></div>
      </div>
    </div>
  );
}
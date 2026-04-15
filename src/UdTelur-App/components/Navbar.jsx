export default function Navbar({ activePage, setActivePage }) {
  const menus = ["dashboard", "katalog", "aktivitas", "admin"];

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm border-b">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xl cursor-pointer" onClick={() => setActivePage("dashboard")}>UD</div>
        <h1 className="text-xl font-black tracking-tighter text-gray-800 uppercase">Telur App</h1>
      </div>
      <ul className="flex gap-8 font-semibold text-gray-500 text-sm uppercase tracking-wider">
        {menus.map((menu) => (
          <li 
            key={menu}
            onClick={() => setActivePage(menu)}
            className={`cursor-pointer transition-all ${activePage === menu ? "text-amber-600 border-b-2 border-amber-600 pb-1" : "hover:text-amber-600"}`}
          >
            {menu}
          </li>
        ))}
      </ul>
    </nav>
  );
}
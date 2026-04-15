// src/UdTelur-App/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard"; // <-- Vite error di sini karena file ini belum ada tadi
import Admin from "./pages/Admin";
import Katalog from "./pages/Katalog";
import Aktivitas from "./pages/Aktivitas";
import Footer from "./components/Footer";

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="p-10 max-w-7xl mx-auto">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "admin" && <Admin />}
        {activePage === "katalog" && <Katalog />}
        {activePage === "aktivitas" && <Aktivitas />}
      </main>
      <Footer />
    </div>
  );
}
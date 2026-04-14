import { createRoot } from "react-dom/client";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import Dashboard from "./pages/Dashboard";
// Keluar ke folder assets untuk mengambil tailwind.css
import "./assets/tailwind.css";

createRoot(document.getElementById("root")).render(
    <div className="flex min-h-screen w-full bg-[#f3f4f6]">
        <Sidebar />
        <div className="flex flex-1 flex-col">
            <Header />
            <main className="p-10">
                <PageHeader />
                <Dashboard />
            </main>
        </div>
    </div>
);
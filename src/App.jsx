import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { createRoot } from "react-dom/client";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import Dashboard from "./pages/Dashboard";
// Keluar ke folder assets untuk mengambil tailwind.css
import "./assets/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";  

function App() {
  return (
    <div className="flex min-h-screen w-full bg-[#f3f4f6]">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="p-10">
          <PageHeader />
          {/* <Dashboard /> */}
          
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;

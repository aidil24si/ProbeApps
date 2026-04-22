import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import PageHeader from "./components/PageHeader";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./pages/ErrorPage"; // Import komponen ErrorPage
import "./assets/tailwind.css";

function App() {
  return (
    <div className="flex min-h-screen w-full bg-[#f3f4f6]">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="p-10">
          {/* PageHeader dipindahkan ke dalam masing-masing page agar prop title/breadcrumb dinamis */}
          
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* Error Pages Test Routes sesuai instruksi latihan */}
            <Route 
              path="/error-400" 
              element={
                <ErrorPage 
                  errorCode="400" 
                  errorTitle="Bad Request: Permintaan tidak dapat dipahami oleh server karena sintaks yang salah." 
                  errorImg="https://illustrations.popsy.co/gray/falling.svg" 
                />
              } 
            />
            <Route 
              path="/error-401" 
              element={
                <ErrorPage 
                  errorCode="401" 
                  errorTitle="Unauthorized: Anda harus melakukan autentikasi terlebih dahulu untuk mengakses halaman ini." 
                  errorImg="https://illustrations.popsy.co/gray/falling.svg" 
                />
              } 
            />
            <Route 
              path="/error-403" 
              element={
                <ErrorPage 
                  errorCode="403" 
                  errorTitle="Forbidden: Anda tidak memiliki izin untuk mengakses sumber daya ini." 
                  errorImg="https://illustrations.popsy.co/gray/falling.svg" 
                />
              } 
            />

            {/* Fallback untuk route yang tidak terdaftar (404) */}
            <Route 
              path="*" 
              element={
                <ErrorPage 
                  errorCode="404" 
                  errorTitle="Halaman yang Anda cari tidak ditemukan." 
                  errorImg="https://illustrations.popsy.co/gray/falling.svg" 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
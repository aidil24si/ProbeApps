import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./pages/ErrorPage"; // Import komponen ErrorPage
import PageHeader from "./components/PageHeader";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import MainLayout from "./layouts/MainLayout";
import "./assets/tailwind.css";


function App() {
  // const Dashboard = lazy(() => import("./pages/Dashboard"));
  // const Orders = lazy(() => import("./pages/Orders"));
  // const Customers = lazy(() => import("./pages/Customers"));
  // const ErrorPage = lazy(() => import("./pages/ErrorPage"));
  return (
    <Routes>
      <Route element={<MainLayout />}>
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
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
    </Routes>
  );
}

export default App;

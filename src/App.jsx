import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Loading from "./components/Loading";
import Notes from "./pages/Notes";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  const Orders = React.lazy(() => import("./pages/Orders"));
  const Customers = React.lazy(() => import("./pages/Customers"));
  const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
  const Login = React.lazy(() => import("./pages/auth/Login"));
  const Register = React.lazy(() => import("./pages/auth/Register"));
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
  const Products = React.lazy(() => import("./pages/Products"));
  // Lazy load untuk file detail obat
  const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
  const CustomerDetail = React.lazy(() => import("./pages/CustomerDetail"));
  const FiturXYZ = React.lazy(() => import("./pages/FiturXYZ"))
  const MemberDashboard = React.lazy(() => import("./pages/member/MemberDashboard"));
  const Catalog = React.lazy(() => import("./pages/member/Catalog"));
  const MemberOrders = React.lazy(() => import("./pages/member/MemberOrders"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route element={<MainLayout />}>
          {/* Main Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/customers/:id" element={<CustomerDetail />} />
          <Route path="/fiturxyz" element={<FiturXYZ/>}/>
          <Route path="/notes" element={<Notes/>}/>
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
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["member"]} />}>
          <Route path="/member" element={<MemberDashboard />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/member/orders" element={<MemberOrders />} />
        </Route>
        <Route element={<ProtectedRoute guestOnly />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

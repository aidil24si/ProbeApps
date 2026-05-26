import React from "react";
import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FiturXYZ() {
  // Mock data untuk tabel CRUD
  const dataXyz = [
    { id: 'XYZ-001', nama: 'Voucher Diskon 20%', kategori: 'Promo', status: 'Aktif', kuota: 150 },
    { id: 'XYZ-002', nama: 'Paket Bundling Makan Siang', kategori: 'Penjualan', status: 'Aktif', kuota: 50 },
    { id: 'XYZ-003', nama: 'Flash Sale Akhir Bulan', kategori: 'Promo', status: 'Nonaktif', kuota: 0 },
    { id: 'XYZ-004', nama: 'Program Loyalitas Poin', kategori: 'Reward', status: 'Draf', kuota: '-' },
  ];

  return (
    <div id="orders-container" className="p-10 animate-in fade-in duration-700">
      <PageHeader 
        title="Fitur XYZ" 
        breadcrumb={["Dashboard", "Xyz"]}
      >
        {/* Tombol Add dimasukkan sebagai children */}
        <button 
          id="add-button" 
          className="bg-hijau hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center gap-2"
        >
          <span className="text-xl">+</span> 
          Fitur          
        </button>
      </PageHeader>

      <Button variant="outline">Batal</Button>
      <Button variant="ghost">Batal</Button>
      <Button variant="destructive">Batal</Button>

      <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
     <Badge variant="default | outline | secondary | destructive">Badge</Badge>

    

      {/* --- KONTEN UTAMA FITUR XYZ --- */}
      <div className="flex flex-col gap-6 mt-8">
        
        {/* 1. Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Fitur</p>
              <h3 className="text-3xl font-bold text-gray-800">24</h3>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-xl">
              📊
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Fitur Aktif</p>
              <h3 className="text-3xl font-bold text-gray-800">18</h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-xl">
              ✅
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Menunggu Aksi</p>
              <h3 className="text-3xl font-bold text-gray-800">6</h3>
            </div>
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 text-xl">
              ⏳
            </div>
          </div>
        </div>

        {/* 2. Main Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-2">
          
          {/* Table Header & Search/Filter */}
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50/30">
            <h3 className="font-semibold text-lg text-gray-800">Daftar Data XYZ</h3>
            <div className="flex gap-3 w-full sm:w-auto">
              <input 
                type="text" 
                placeholder="Cari ID atau Nama..." 
                className="border border-gray-200 rounded-xl text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 w-full sm:w-64 transition-all"
              />
              <select className="border border-gray-200 rounded-xl text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 cursor-pointer transition-all">
                <option>Semua Status</option>
                <option>Aktif</option>
                <option>Nonaktif</option>
                <option>Draf</option>
              </select>
            </div>
          </div>
          
          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                  <th className="px-6 py-5 font-semibold">ID Fitur</th>
                  <th className="px-6 py-5 font-semibold">Nama / Deskripsi</th>
                  <th className="px-6 py-5 font-semibold">Kategori</th>
                  <th className="px-6 py-5 font-semibold">Status</th>
                  <th className="px-6 py-5 font-semibold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {dataXyz.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 border-b border-gray-50 transition-colors">
                    <td className="px-6 py-5 font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-5">{item.nama}</td>
                    <td className="px-6 py-5">{item.kategori}</td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        item.status === 'Aktif' ? 'bg-green-100 text-green-700' : 
                        item.status === 'Nonaktif' ? 'bg-red-100 text-red-700' : 
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-blue-500 hover:text-blue-700 font-medium mr-4 transition-colors">Edit</button>
                      <button className="text-red-500 hover:text-red-700 font-medium transition-colors">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <span>Menampilkan 1 hingga 4 dari 24 entri</span>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium">Sebelumnya</button>
              {/* Note: Menggunakan custom class "bg-hijau" Anda di sini */}
              <button className="px-4 py-2 bg-hijau text-white rounded-lg shadow-sm font-medium hover:bg-green-600 transition-colors">1</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium">2</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium">Selanjutnya</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
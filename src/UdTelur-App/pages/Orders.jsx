import React from 'react';

export default function Orders() {
  // Data dummy untuk simulasi tampilan
  const orders = [
    { id: "OR-001", name: "Budi Santoso", item: "Telur Ayam Negeri (5kg)", status: "Delivered", date: "21 April 2026" },
    { id: "OR-002", name: "Siti Aminah", item: "Telur Bebek (2kg)", status: "Pending", date: "21 April 2026" },
    { id: "OR-003", name: "Toko Berkah", item: "Telur Ayam Kampung (10kg)", status: "Canceled", date: "20 April 2026" },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-800 tracking-tight">Order List</h2>
        <p className="text-gray-400 font-medium italic">Monitor semua transaksi pesanan telur masuk.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-[10px] uppercase font-black text-gray-400 tracking-[0.2em]">
            <tr>
              <th className="p-8">ID Order</th>
              <th className="p-8">Customer</th>
              <th className="p-8">Pesanan</th>
              <th className="p-8 text-center">Status</th>
              <th className="p-8 text-right">Tanggal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 font-bold">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-amber-50/30 transition-colors group">
                <td className="p-8 text-amber-600 font-mono">{order.id}</td>
                <td className="p-8 text-gray-800">{order.name}</td>
                <td className="p-8 text-gray-500 font-medium">{order.item}</td>
                <td className="p-8 text-center">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest ${
                    order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-600' :
                    order.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-rose-100 text-rose-600'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-8 text-right text-gray-400 text-sm">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
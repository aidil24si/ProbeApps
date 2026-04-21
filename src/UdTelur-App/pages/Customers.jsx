import React from 'react';

export default function Customers() {
  const customers = [
    { name: "Andi Wijaya", email: "andi@mail.com", type: "Grosir", orders: 12 },
    { name: "Ratna Sari", email: "ratna@mail.com", type: "Retail", orders: 5 },
    { name: "Catering Lezat", email: "info@lezat.com", type: "Grosir", orders: 45 },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-800 tracking-tight">Customers</h2>
        <p className="text-gray-400 font-medium italic">Daftar pelanggan aktif dan mitra bisnis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {customers.map((customer, index) => (
          <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors">
              👤
            </div>
            <h3 className="text-xl font-black text-gray-800 mb-1">{customer.name}</h3>
            <p className="text-gray-400 text-sm mb-6">{customer.email}</p>
            
            <div className="flex justify-between items-center pt-6 border-t border-gray-50">
              <div>
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Tipe</p>
                <p className="font-bold text-amber-600">{customer.type}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Total Order</p>
                <p className="font-bold text-gray-800">{customer.orders}x</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
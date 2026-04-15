import { create } from 'zustand';

const useStore = create((set) => ({
  stokTelur: 2500,
  logs: [
    { id: Date.now(), aksi: "Sistem Dimulai", jumlah: "0", waktu: "Baru saja", status: "Berhasil" }
  ],
  
  tambahStok: (qty) => set((state) => ({ 
    stokTelur: state.stokTelur + qty,
    logs: [{ id: Date.now(), aksi: "Tambah Stok", jumlah: `+${qty}`, waktu: "Baru saja", status: "Berhasil" }, ...state.logs]
  })),

  kurangStok: (qty) => set((state) => ({ 
    stokTelur: Math.max(0, state.stokTelur - qty),
    logs: [{ id: Date.now(), aksi: "Pengurangan", jumlah: `-${qty}`, waktu: "Baru saja", status: "Berhasil" }, ...state.logs]
  })),

  tambahLog: (aksi, jumlah) => set((state) => ({
    logs: [{ id: Date.now(), aksi, jumlah, waktu: "Baru saja", status: "Berhasil" }, ...state.logs]
  }))
}));

export default useStore;
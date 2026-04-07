import React, { useState } from 'react';
import './custom.css';
import Container from './Container';
import Header from './Header';
import About from './About';
import FormInput from './FormInput';

const EkspedisiDashboard = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    nama: '',
    umur: '',
    perlengkapan: '',
    gunung: 'Semeru',
    jalur: 'Reguler'
  });

  // State untuk menangani error validasi
  const [errors, setErrors] = useState({});
  // State untuk menampilkan hasil setelah submit (Conditional Rendering)
  const [submittedData, setSubmittedData] = useState(null);

  // Fungsi Validasi dengan minimal 3 kriteria per input
  const validate = (name, value) => {
    let msg = "";
    if (name === "nama") {
      if (!value) msg = "Nama wajib diisi!";
      else if (/[0-9]/.test(value)) msg = "Nama tidak boleh mengandung angka!";
      else if (value.length < 3) msg = "Nama minimal harus 3 karakter!";
    }
    if (name === "umur") {
      if (!value) msg = "Umur tidak boleh kosong!";
      else if (value < 17) msg = "Minimal usia pendaki adalah 17 tahun!";
      else if (value > 65) msg = "Usia maksimal pendaki adalah 65 tahun!";
    }
    if (name === "perlengkapan") {
      if (!value) msg = "Harap sebutkan perlengkapan utama!";
      else if (value.length < 5) msg = "Deskripsi perlengkapan terlalu pendek!";
      else if (value.toLowerCase().includes("mantan")) msg = "Dilarang membawa beban masa lalu!";
    }
    setErrors(prev => ({ ...prev, [name]: msg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
    // Sembunyikan hasil lama jika user mengedit form kembali
    setSubmittedData(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  // Logika untuk menampilkan tombol submit hanya jika semua input valid
  const isFormValid = 
    formData.nama && formData.umur && formData.perlengkapan &&
    !errors.nama && !errors.umur && !errors.perlengkapan;

  return (
    <Container>
      {/* Komponen Header & About dari Pertemuan 2 */}
      <Header />
      <About />

      {/* Bagian Form Pendaftaran Ekspedisi */}
      <div className="section form-section">
        <h2 className="form-title">PENDAFTARAN EKSPEDISI</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Menggunakan Reusable Component FormInput */}
          <FormInput 
            label="Nama Lengkap" 
            name="nama" 
            value={formData.nama} 
            onChange={handleChange} 
            error={errors.nama} 
          />
          
          <FormInput 
            label="Umur" 
            name="umur" 
            type="number" 
            value={formData.umur} 
            onChange={handleChange} 
            error={errors.umur} 
          />
          
          <FormInput 
            label="Perlengkapan Utama" 
            name="perlengkapan" 
            value={formData.perlengkapan} 
            onChange={handleChange} 
            error={errors.perlengkapan} 
          />

          {/* 2 Select Dropdown sesuai kriteria */}
          <div className="form-group">
            <label className="form-label">Pilih Gunung</label>
            <select 
              name="gunung" 
              className="mapala-select" 
              value={formData.gunung} 
              onChange={handleChange}
            >
              <option value="Semeru">Gn. Semeru</option>
              <option value="Rinjani">Gn. Rinjani</option>
              <option value="Kerinci">Gn. Kerinci</option>
              <option value="Merbabu">Gn. Merbabu</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Jalur Pendakian</label>
            <select 
              name="jalur" 
              className="mapala-select" 
              value={formData.jalur} 
              onChange={handleChange}
            >
              <option value="Reguler">Jalur Reguler</option>
              <option value="Ekstrim">Jalur Ekstrim (Pro)</option>
              <option value="Lintas Jalur">Lintas Jalur</option>
            </select>
          </div>

          {/* Conditional Rendering: Tombol muncul jika valid */}
          {isFormValid && (
            <button type="submit" className="btn-submit">
              KONFIRMASI PENDAFTARAN
            </button>
          )}
        </form>

        {/* Conditional Rendering: Menampilkan hasil inputan */}
        {submittedData && (
          <div className="result-box">
            <h3>✅ Pendaftaran Berhasil!</h3>
            <div className="result-content">
              <p>Salam Rimba, <strong>{submittedData.nama}</strong>!</p>
              <p>Anda terdaftar untuk mendaki <strong>{submittedData.gunung}</strong> melalui <strong>{submittedData.jalur}</strong>.</p>
              <p>Pastikan perlengkapan <em>{submittedData.perlengkapan}</em> sudah siap di tas carrier Anda!</p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default EkspedisiDashboard;
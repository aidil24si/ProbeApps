import React from 'react';

const About = () => {
  return (
    <div className="section about-section">
      <h2>
        <span style={{ borderLeft: '4px solid #8fb339', paddingLeft: '15px' }}>
          JELAJAH TANPA BATAS
        </span>
      </h2>
      <p style={{ lineHeight: '1.8', color: '#ccc', fontSize: '0.95rem' }}>
        Kami adalah kolektif penjelajah yang mendedikasikan diri pada keindahan puncak-puncak tertinggi Nusantara. 
        Bagi kami, mendaki bukan sekadar menaklukkan ketinggian, melainkan perjalanan mengenal diri dan 
        menjaga kelestarian alam.
      </p>
      <div className="mission-statement" style={{ marginTop: '15px', fontStyle: 'italic', color: '#8fb339' }}>
        "Jangan ambil sesuatu kecuali gambar, jangan tinggalkan sesuatu kecuali jejak, jangan bunuh sesuatu kecuali waktu."
      </div>
    </div>
  );
};

export default About;
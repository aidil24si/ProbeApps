import React from 'react';

const Header = () => {
  return (
    <header className="header-section" style={{ textAlign: 'center' }}>
      <div className="logo-area">
        <span style={{ fontSize: '2rem' }}>🏔️</span>
      </div>
      <h1>ADVENTURE ARCHIVE</h1>
      <p className="subtitle">EKSPEDISI RIMBA & PENDAKIAN TINGGI | SINCE 2024</p>
      <div style={{ 
        width: '50px', 
        height: '3px', 
        background: '#8fb339', 
        margin: '15px auto' 
      }}></div>
    </header>
  );
};

export default Header;
import React from 'react';

const FormInput = ({ label, type = "text", name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mapala-input"
        placeholder={`Masukkan ${label}...`}
      />
      {error && <p className="error-msg">⚠️ {error}</p>}
    </div>
  );
};

export default FormInput;
import React from "react";

export default function Checkbox(props) {
  let { label, onClick, value, name } = props;
  return (
    <div className="form-check">
      <input
        onClick={onClick}
        value={value}
        name={name}
        className="form-check-input"
        type="checkbox"
      />
      <label className="form-check-label">{label}</label>
    </div>
  );
}

import React from "react";

export default function Checkbox(props) {
  let { label, onChange, value } = props;
  return (
    <div className="form-check">
      <input
        onChange={onChange}
        value={value}
        className="form-check-input"
        type="checkbox"
      />
      <label className="form-check-label">{label}</label>
    </div>
  );
}

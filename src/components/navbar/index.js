import React from "react";
import logo from "../../assets/Logo.svg";
import "./index.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />;
    </nav>
  );
}

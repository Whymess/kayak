import React from "react";
import { Navbar, Details } from "../../components";
import "./index.scss";
export default function Application() {
  return (
    <div className="container-fluid application">
      <Navbar />
      <Details />
    </div>
  );
}

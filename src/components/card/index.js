import React from "react";
import "./index.scss";
import img from "../../assets/AA.png";
export default function Card() {
  return (
    <div className="detail-card">
      <img src={img} alt="" style={{ width: "32px", height: "32px" }} />
      <div className="detail-card--specs">Delta</div>
    </div>
  );
}

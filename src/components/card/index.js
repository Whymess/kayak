import React from "react";
import "./index.scss";
import img from "../../assets/AA.png";
export default function Card(props) {
  let { name, phone, site, alliance } = props;

  return (
    <div className="detail-card">
      <img
        src={img}
        alt=""
        style={{ width: "32px", height: "32px", margin: "18px" }}
      />
      <div className="detail-card--specs">
        {name}
        <div className="detail-card--hide">
          <div className="detail-card--info__alliance"> {alliance}</div>
          <div className="detail-card--info__phone">{phone}</div>
          <div className="detail-card--info__site">{site}</div>
        </div>
      </div>
    </div>
  );
}

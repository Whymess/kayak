import React from "react";
import "./index.scss";
import { Card } from "../../components/";

export default function CardContainer() {
  return (
    <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

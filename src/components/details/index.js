import React from "react";
import "./index.scss";
import data from "../../data";
import { Checkbox } from "../../components/common";

export default function Details() {
  const renderFilters = () => {
    return data.filters.map((el, i) => {
      return <Checkbox label={el} key={i + 1} />;
    });
  };

  return (
    <div className="details-wrapper">
      <div className="details-wrapper--left">
        <h1 className="details-wrapper--title">Airlines</h1>
        <p className="details-wrapper--filter"> Filter by Alliances </p>
        <div className="details-wrapper--options">{renderFilters()}</div>
      </div>
    </div>
  );
}

import React from "react";
import "./index.scss";
import filters from "../../data";
import { Checkbox } from "../../components/common";

export default function Details(props) {
  let { onClick } = props;

  const renderFilters = () => {
    return Object.entries(filters).map((el, i) => {
      return (
        <Checkbox onClick={onClick} label={el[1]} name={el[0]} key={i + 1} />
      );
    });
  };

  return (
    <div className="details-wrapper">
      <div className="details-wrapper--left">
        <h1 className="details-wrapper--title">Airlines</h1>
        <p className="details-wrapper--filter">Filter by Alliances</p>
        <div className="details-wrapper--options">{renderFilters()}</div>
      </div>
    </div>
  );
}

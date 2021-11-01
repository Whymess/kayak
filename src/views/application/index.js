import React, { useState } from "react";
import { Navbar, Details, CardContainer } from "../../components";
import "./index.scss";

export default function Application() {
  const [filters, setFilters] = useState({});

  const onFilterChange = (e) => {
    let { name, checked } = e.target;

    setFilters({
      ...filters,
      [name]: checked,
    });
  };

  const removeUncheckedFilters = () => {
    let keys = Object.keys(filters);

    return keys.filter((key) => {
      return filters[key];
    });
  };

  return (
    <div className="container-fluid application">
      <Navbar />
      <Details onClick={onFilterChange} />
      <CardContainer checkedboxes={removeUncheckedFilters()} />
    </div>
  );
}

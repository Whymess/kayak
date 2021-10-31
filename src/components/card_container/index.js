import React, { useEffect } from "react";
import "./index.scss";
import { Card, Loader } from "../../components/";
import { useGetAirlines } from "../../api";

export default function CardContainer() {
  const { data, execute, isLoading } = useGetAirlines();

  useEffect(() => {
    try {
      execute();
    } catch (error) {
      return error;
    }
  }, [execute]);

  const renderCard = () => {
    if (isLoading) {
      return <Loader />;
    }

    return (
      data &&
      data.map((el, i) => {
        let { phone, site, name, alliance } = el;
        return (
          <Card
            phone={phone}
            site={site}
            name={name}
            alliance={alliance}
            key={i + 1}
          />
        );
      })
    );
  };

  return <div className="card-container">{renderCard()}</div>;
}

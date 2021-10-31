import React, { useEffect } from "react";
import "./index.scss";
import { Card } from "../../components/";
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
    return (
      data &&
      data.map((el, i) => {
        let { phone, site, name } = el;
        return <Card phone={phone} site={site} name={name} />;
      })
    );
  };

  return <div className="card-container">{renderCard()}</div>;
}

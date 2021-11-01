import React, { useEffect } from "react";
import "./index.scss";
import { Card, Loader } from "../../components/";
import { useGetAirlines } from "../../api";

export default function CardContainer(props) {
  const { data, execute, isLoading } = useGetAirlines();
  let { checkedboxes } = props;

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
        if (checkedboxes.length === 0) {
          return (
            <Card
              phone={phone}
              site={site}
              name={name}
              alliance={alliance}
              key={i + 1}
            />
          );
        }

        if (checkedboxes.includes(alliance)) {
          return (
            <Card
              phone={phone}
              site={site}
              name={name}
              alliance={alliance}
              key={i + 1}
            />
          );
        }

        return false;
      })
    );
  };

  return <div className="card-container">{renderCard()}</div>;
}

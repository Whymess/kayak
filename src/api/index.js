import { useState, useCallback } from "react";
import fetchJsonp from "fetch-jsonp";

export const getAirlines = async () => {
  return fetchJsonp(
    "https://kayak.com/h/mobileapis/directory/airlines/homework",
    {
      jsonpCallback: "jsonp",
    }
  ).then(function (response) {
    return response.json();
  });
};

export const useGetAirlines = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async () => {
    try {
      setIsLoading(true);
      const airlineData = await getAirlines();
      setData(airlineData);
      setIsLoading(false);
      return airlineData;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []),
  };
};

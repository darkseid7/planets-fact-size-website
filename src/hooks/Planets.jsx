import { useState, useEffect, useCallback } from "react";

export const usePlanets = () => {
  const [data, setData] = useState([]);
  const [newUrl, setNewUrl] = useState("/earth");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      const splitNewUrl = newUrl.split("/");
      setLoading(true);
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setData(data[`${splitNewUrl[1]}`]);
          setLoading(false);
        });
      // .finally(() => {
      //   setTimeout(() => {
      //     setLoading(false);
      //   }, 400);
      // });
    };
    getData();
  }, [newUrl]);

  return { data, newUrl, setNewUrl, loading };
};

import { useState, useEffect } from "react";
import { usePlanetDataStorage } from "../store/PlanetsData";

export const usePlanets = () => {
  const { dataP, setDataPlanet } = usePlanetDataStorage();

  const [data, setData] = useState([]);
  const [newUrl, setNewUrl] = useState("/earth");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data.json");
      const splitNewUrl = newUrl.split("/");
      const data = await response.json();
      setData(data[`${splitNewUrl[1]}`]);
      setDataPlanet(data[`${splitNewUrl[1]}`]);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    getData();
  }, [newUrl]);

  return { data, setNewUrl, loading };
};

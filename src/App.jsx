import { useState, useEffect } from "react";

import { MainContainerApp } from "./styled-components/Layout";

import Planet from "./components/Planet";
import Header from "./components/Header/Header";
import Sky from "./components/Sky";
import Loader from "./components/Loader";

import { usePlanets } from "./hooks/Planets";

function App() {
  const { data, setNewUrl, loading } = usePlanets();
  const [planet, setPlanet] = useState(data);

  useEffect(() => {
    setPlanet(data);
  }, [data]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Sky />
      <MainContainerApp initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Header setNewUrl={setNewUrl} />
        <Planet planet={planet} />
      </MainContainerApp>
    </>
  );
}

export default App;

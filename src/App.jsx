import { MainContainerApp } from "./styled-components/Layout";
import { usePlanetDataStorage } from "./store/PlanetsData";

import Planet from "./components/Planet/Planet";
import Header from "./components/Header/Header";
import Sky from "./components/common/Sky";
import Loader from "./components/common/Loader";

import { usePlanets } from "./hooks/Planets";

function App() {
  const { setNewUrl, loading } = usePlanets();
  const { dataP } = usePlanetDataStorage();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Sky />
      <MainContainerApp
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Header setNewUrl={setNewUrl} />
        <Planet planet={dataP} />
      </MainContainerApp>
    </>
  );
}

export default App;

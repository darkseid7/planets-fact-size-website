import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Planet from "./components/Planet";
import Header from "./components/Header/Header";
import Sky from "./components/Sky";
import Loader from "./components/Loader";

import { usePlanets } from "./hooks/Planets";

const MainApp = styled(motion.div)`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  const { data, setNewUrl, loading } = usePlanets();
  const [activeButton, setActiveButton] = useState("earth");

  useEffect(() => {
    setNewUrl(`/${activeButton}`);
  }, [activeButton, setNewUrl]);

  const Planets = [
    { name: "mercury", color: "#419ebb" },
    { name: "venus", color: "#eda249" },
    { name: "earth", color: "#6F2ED6" },
    { name: "mars", color: "#d14c32" },
    { name: "jupiter", color: "#d83a34" },
    { name: "saturn", color: "#cd5120" },
    { name: "uranus", color: "#1ec2a4" },
    { name: "neptune", color: "#2d68f0" },
  ];

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setInitialLoading(true);
    } else {
      setInitialLoading(false);
    }
  }, [loading]);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <>
      <Sky />
      <MainApp initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Header
          planets={Planets}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <Planet planet={data} />
      </MainApp>
    </>
  );
}

export default App;

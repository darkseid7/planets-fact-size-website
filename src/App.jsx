import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Planet from "./components/Planet";
import Header from "./components/Header/Header";
import Sky from "./components/Sky";
const MainApp = styled(motion.div)`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  const [planet, setPlanet] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [newUrl, setNewUrl] = useState("/mercury");

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

  useEffect(() => {
    async function getData() {
      const response = await fetch("data.json");
      const splitNewUrl = newUrl.split("/");
      const data = await response.json();
      setPlanet(data[`${splitNewUrl[1]}`]);
    }
    getData();
  }, [newUrl]);

  useEffect(() => {
    window.document.title = `Planet Facts: ${planet.name}`;
  }, [planet.name]);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(!isFirstLoad);
    }
  }, [isFirstLoad]);

  return (
    <>
      <Sky />
      {planet.length === 0 ? (
        <>
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "grid",
              placeItems: "center",
            }}
            className=""
          >
            <motion.img
              initial={{
                width: "100px",
                display: "grid",
                placeItems: "center",
              }}
              animate={{
                scale: [1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
              }}
              src="./assets/planet-earth.svg"
              alt=""
            />
          </div>
        </>
      ) : (
        <MainApp initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Header planets={Planets} newUrl={newUrl} setNewUrl={setNewUrl} />
          <Planet planet={planet} />
        </MainApp>
      )}
    </>
  );
}

export default App;

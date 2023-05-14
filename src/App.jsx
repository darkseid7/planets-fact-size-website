import { useState, useEffect } from "react";
import Planet from "./components/Planet";
import Header from "./components/Header/Header";
import styled from "styled-components";

const MainApp = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  const [planet, setPlanet] = useState([]);
  // const [newUrl, setNewUrl] = useState("http://localhost:3000/mercury");
  const [newUrl, setNewUrl] = useState("http://192.168.1.4:3000/mercury");

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
      const response = await fetch(newUrl);
      const data = await response.json();
      setPlanet(data);
    }
    getData();
  }, [newUrl]);

  if (planet.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <MainApp>
        <Header planets={Planets} newUrl={newUrl} setNewUrl={setNewUrl} />
        <Planet planet={planet} />
      </MainApp>
    </>
  );
}

export default App;

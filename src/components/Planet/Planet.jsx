/* eslint-disable react/prop-types */
import styled from "styled-components";
import { motion } from "framer-motion";

import PlanetDetails from "./PlanetDetails/PlanetDetails";
import PlanetFacts from "./PanetFacts/PlanetFacts";

const PlanetContainer = styled(motion.section)`
  max-width: 1150px;
  margin: 0 auto;
  padding-top: 10px;
  padding-right: 18px;
  padding-left: 18px;
  text-align: center;
`;

const Planet = () => {
  return (
    <>
      <PlanetContainer>
        <PlanetDetails />
        <PlanetFacts />
      </PlanetContainer>
    </>
  );
};

export default Planet;

/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import PlanetDetails from "./PlanetDetails/PlanetDetails";
import PlanetInfo from "../PlanetInfo";

const PlanetContainer = styled(motion.section)`
  max-width: 1150px;
  margin: 0 auto;
  padding-top: 10px;
  text-align: center;

  .container {
    padding: 0 18px;
    display: flex;
    justify-content: space-between;

    .description {
      max-width: 350px;
    }
  }
`;

const Planet = ({ planet }) => {
  const { rotation, revolution, radius, temperature } = planet;

  return (
    <>
      <PlanetContainer>
        <PlanetDetails />
        <PlanetInfo
          rotation={rotation}
          revolution={revolution}
          radius={radius}
          temp={temperature}
        />
      </PlanetContainer>
    </>
  );
};

export default Planet;

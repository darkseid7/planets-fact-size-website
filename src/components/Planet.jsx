/* eslint-disable react/prop-types */
import styled from "styled-components";
import PlanetDescription from "./PlanetDescription/PlanetDescription";
import PlanetInfo from "./PlanetInfo";
import { motion } from "framer-motion";

const PlanetContainer = styled(motion.section)`
  text-align: center;
  max-width: 1150px;
  margin: 0 auto;
`;
const Planet = ({ planet }) => {
  const {
    images,
    name,
    overview,
    structure,
    geology,
    color,
    rotation,
    revolution,
    radius,
    temperature,
  } = planet;
  return (
    <>
      <PlanetContainer>
        <PlanetDescription
          images={images}
          name={name}
          overview={overview}
          structure={structure}
          geology={geology}
          color={color}
        />

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

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
  return (
    <>
      <PlanetContainer>
        <PlanetDescription
          images={planet.images}
          name={planet.name}
          overview={planet.overview}
          structure={planet.structure}
          geology={planet.geology}
          color={planet.color}
        />

        <PlanetInfo
          rotation={planet.rotation}
          revolution={planet.revolution}
          radius={planet.radius}
          temp={planet.temperature}
        />
      </PlanetContainer>
    </>
  );
};

export default Planet;

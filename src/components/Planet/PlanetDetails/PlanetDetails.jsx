import { useState } from "react";
import styled from "styled-components";

import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetInformation from "./PlanetInformation/PlanetInformation";

const StyledPlanetDetails = styled.section`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.5s ease-out;

  @media only screen and (max-width: 1060px) {
    display: block;
    padding-top: 4rem;
  }

  @media only screen and (max-width: 664px) {
    padding-top: 0;
  }
`;

function PlanetDetails() {
  const [selectedButton, setSelectedButton] = useState("overview");

  return (
    <StyledPlanetDetails>
      <PlanetImage button={selectedButton} />
      <PlanetInformation
        button={selectedButton}
        setButton={setSelectedButton}
      />
    </StyledPlanetDetails>
  );
}

export default PlanetDetails;

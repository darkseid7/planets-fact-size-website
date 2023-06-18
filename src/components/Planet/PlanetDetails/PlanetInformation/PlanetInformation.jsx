import React from "react";
import styled from "styled-components";

import PlanetTextContent from "./PlanetTextContent/PlanetTextContent";
import PlanetActionButtons from "./PlanetActionButtons/PlanetActionButtons";

const StyledPlanetInformation = styled.div`
  @media only screen and (max-width: 1060px) {
    padding-top: 120px;
    padding: 1rem;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 1060px) {
    padding: 1rem 0;
  }
`;

function PlanetInformation({ button, setButton }) {
  return (
    <StyledPlanetInformation>
      <PlanetTextContent button={button} />
      <PlanetActionButtons button={button} setButton={setButton} />
    </StyledPlanetInformation>
  );
}

export default PlanetInformation;

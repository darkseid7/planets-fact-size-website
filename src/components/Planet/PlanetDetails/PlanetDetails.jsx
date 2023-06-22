import { useState } from "react";
import styled from "styled-components";

import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetInformation from "./PlanetInformation/PlanetInformation";
import PlanetActionButtonsResponsive from "./PlanetInformation/PlanetActionButtons/PlanetActionButtonsResponsive/PlanetActionButtonsResponsive";

import { media } from "../../../styled-components/Global";

const StyledPlanetDetails = styled.section`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-top: 50px;

  ${media.tablet} {
    display: block;
    padding-top: 4rem;
  }
`;

function PlanetDetails() {
  const [selectedButton, setSelectedButton] = useState("overview");

  return (
    <StyledPlanetDetails>
      <PlanetActionButtonsResponsive
        button={selectedButton}
        setButton={setSelectedButton}
      />
      <PlanetImage button={selectedButton} />
      <PlanetInformation
        button={selectedButton}
        setButton={setSelectedButton}
      />
    </StyledPlanetDetails>
  );
}

export default PlanetDetails;

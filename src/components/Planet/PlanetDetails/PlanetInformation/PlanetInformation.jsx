import styled from "styled-components";

import PlanetTextContent from "./PlanetTextContent/PlanetTextContent";
import PlanetActionButtons from "./PlanetActionButtons/PlanetActionButtons";

import { media } from "../../../../styled-components/Global";

const StyledPlanetInformation = styled.div`
  ${media.tablet} {
    padding-top: 120px;
    padding: 1rem 0;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function PlanetInformation({ button, setButton }) {
  return (
    <StyledPlanetInformation>
      <PlanetTextContent button={button} />
      <PlanetActionButtons
        button={button}
        setButton={setButton}
      />
    </StyledPlanetInformation>
  );
}

export default PlanetInformation;

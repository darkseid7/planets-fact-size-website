import styled from "styled-components";

import { media } from "../../../styled-components/Global";

import FactText from "./FactText/FactText";
import FactValue from "./FactValue/FactValue";

import { usePlanetDataStorage } from "../../../store/PlanetsData";

const StyledPlanetFacts = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.97rem;
  padding: 30px 0 60px 0;
  text-transform: uppercase;

  ${media.phone} {
    display: block;
    padding: 1.5rem 0;
  }
`;

const Info = styled.li`
  padding: 23px;
  display: flex;
  flex-direction: column;
  color: #fff;
  border: 2px solid rgb(151, 151, 151, 0.2);
  text-align: start;

  ${media.tablet} {
    padding: 12px;
  }

  ${media.tablet_s} {
    padding: 13px;
  }

  ${media.phone} {
    width: 100%;
    margin: 0.5rem 0;
    flex-direction: initial;
    justify-content: space-between;
    align-items: center;
    padding: 13px 1.5rem;
  }
`;

function PlanetFacts() {
  const { dataP } = usePlanetDataStorage();
  const { rotation, revolution, radius, temperature } = dataP;
  return (
    <StyledPlanetFacts>
      <Info>
        <FactText>Rotation time</FactText>
        <FactValue>{rotation}</FactValue>
      </Info>
      <Info>
        <FactText>revolution time</FactText>
        <FactValue>{revolution}</FactValue>
      </Info>
      <Info>
        <FactText>radius</FactText>
        <FactValue>{radius}</FactValue>
      </Info>
      <Info>
        <FactText>average temp.</FactText>
        <FactValue>{temperature}</FactValue>
      </Info>
    </StyledPlanetFacts>
  );
}

export default PlanetFacts;

/* eslint-disable react/prop-types */
import anime from "animejs";
import { useEffect } from "react";
import styled from "styled-components";

const fontSpartan = "Spartan";
const fontAntonio = "Antonio";

const InfoWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 60px 0;
  text-transform: uppercase;

  @media only screen and (max-width: 664px) {
    display: block;
    padding: 1.5rem;
  }
`;

const Info = styled.li`
  width: 255px;
  padding: 23px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  color: #fff;
  border: 2px solid rgb(151, 151, 151, 0.2);
  text-align: start;

  .info-text {
    font-size: 11px;
    font-family: ${fontSpartan};
    font-weight: 700;
    letter-spacing: 1px;
    opacity: 0.5;
    mix-blend-mode: normal;
  }

  .info-value {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1.5px;
    font-family: ${fontAntonio};
  }

  @media only screen and (max-width: 1030px) {
    padding: 12px;
    .info-value {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 164px;
    margin: 0 6px;
    padding: 13px;
    .info-text {
      font-size: 8px;
      letter-spacing: 0.73px;
      padding-bottom: 0.8rem;
    }

    .info-value {
      font-size: 24px;
      line-height: 31px;
      letter-spacing: -0.9px;
    }
  }

  @media only screen and (max-width: 664px) {
    width: 100%;
    margin: 0.5rem 0;
    flex-direction: initial;
    justify-content: space-between;
    align-items: center;
    padding: 13px 1.5rem;
    .info-text {
      padding-bottom: 0;
    }
  }
`;

const PlanetInfo = ({ rotation, revolution, radius, temp }) => {
  useEffect(() => {
    // anime({
    //   targets: ".textoo",
    //   scale: [0, 1],
    //   duration: 1000,
    //   easing: "easeOutExpo",
    // });
    anime({
      targets: [".planet-info"],
      opacity: [0, 1],
      duration: 600,
      easing: "easeInQuad",
    });
  }, [rotation]);

  return (
    <>
      <InfoWrapper className="planet-info">
        <Info>
          <span className="info-text">Rotation time</span>
          <span className="info-value">{rotation}</span>
        </Info>
        <Info>
          <span className="info-text">revolution time</span>
          <span className="info-value">{revolution}</span>
        </Info>
        <Info>
          <span className="info-text">radius</span>
          <span className="info-value">{radius}</span>
        </Info>
        <Info>
          <span className="info-text">average temp.</span>
          <span className="info-value">{temp}</span>
        </Info>
      </InfoWrapper>
    </>
  );
};

export default PlanetInfo;

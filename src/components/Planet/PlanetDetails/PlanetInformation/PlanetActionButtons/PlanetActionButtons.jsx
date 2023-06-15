import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { fontSpartan } from "../../../../../styled-components/Global";
import { usePlanetDataStorage } from "../../../../../store/PlanetsData";

export const StyledPlanetActionButtons = styled(motion.div)`
  padding: 2rem 0;
  display: grid;

  button {
    width: 350px;
    height: 48px;
    padding-top: 4px;
    margin: 8px 0;
    text-transform: uppercase;
    font-family: ${fontSpartan};
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 2.57px;
    background-color: transparent;
    border: 1px solid #38384f;
    border-radius: 0%;
    color: #fff;
    cursor: pointer;
    text-align: start;

    span {
      padding: 0 25px 0 28px;
      opacity: 0.5;
    }

    &.btn-active {
      background-color: ${({ color }) => color} !important;
    }
  }

  @media only screen and (max-width: 768px) {
    button {
      font-size: 9px;
      letter-spacing: 1.9px;
      width: 281px;
      height: 40px;
    }
  }

  @media only screen and (max-width: 664px) {
    display: none;
  }
`;

const buttonVariants = {
  hover: {
    scale: 1.02,
    backgroundColor: "#38384f",
  },
  initial: {
    scale: 1,
  },
  tap: {
    scale: [0.9, 1],
  },
};

function PlanetActionButtons({ button, setButton, setIsHandleClick }) {
  const { dataP } = usePlanetDataStorage();
  const { color } = dataP;

  useEffect(() => {
    setIsHandleClick(false);
  }, [setIsHandleClick]);

  function handleClick(buttonName) {
    setButton(buttonName);
    setIsHandleClick(true);
  }

  return (
    <StyledPlanetActionButtons color={color}>
      <motion.button
        key={button}
        variants={buttonVariants}
        // initial="initial"
        whileTap="tap"
        whileHover="hover"
        name="overview"
        className={button === "overview" ? "btn-active" : ""}
        onClick={() => handleClick("overview")}
      >
        <span> 01 </span> overview
      </motion.button>
      <motion.button
        name="internal-structure"
        variants={buttonVariants}
        // initial="initial"
        whileTap="tap"
        whileHover="hover"
        className={button === "internal-structure" ? "btn-active" : ""}
        onClick={() => handleClick("internal-structure")}
      >
        <span>02</span> internal structure
      </motion.button>
      <motion.button
        variants={buttonVariants}
        // initial="initial"
        whileTap="tap"
        whileHover="hover"
        name="surface-geology"
        className={button === "surface-geology" ? "btn-active" : ""}
        onClick={() => handleClick("surface-geology")}
      >
        <span>03</span> surface geology
      </motion.button>
    </StyledPlanetActionButtons>
  );
}

export default PlanetActionButtons;

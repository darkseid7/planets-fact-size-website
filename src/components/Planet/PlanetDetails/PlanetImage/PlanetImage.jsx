import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { media } from "../../../../styled-components/Global";

import { usePlanetDataStorage } from "../../../../store/PlanetsData";

const StyledPlanetImage = styled.div`
  width: 100%;
  margin-right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 1140px) {
    margin-right: 0rem;
  }

  @media only screen and (max-width: 1060px) {
    width: 100%;
    height: 600px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 664px) {
    height: 300px;
  }
`;

const Image = styled(motion.img)`
  position: absolute;

  &.surface-image {
    width: 163px;
    height: 199px;
    z-index: 1;
    top: 80px;
  }

  @media only screen and (max-width: 768px) {
    &.surface-image {
      top: 400px;
    }
  }

  ${media.tablet} {
    &.surface-image {
      top: 380px;
    }
  }

  @media only screen and (max-width: 664px) {
    width: ${({ size }) => size};

    &.surface-image {
      width: 80px;
      height: 96px;
      top: 160px;
    }
  }
`;

function PlanetImage({ button }) {
  const { dataP, executeAnimation } = usePlanetDataStorage();
  const { geology, internal, planet, responsive } = dataP.images;

  const [currentImage, setCurrentImage] = useState(planet);
  const [geologyImage, setGeologyImage] = useState(geology);
  const [showGeologyImage, setShowGeologyImage] = useState(false);

  const variants = {
    event: {
      x: executeAnimation ? [-400, 0] : 0,
      scale: executeAnimation ? 1 : [0.9, 1],
      y: [10, -10],
    },
    transicion: {
      duration: executeAnimation ? 0.5 : 1,
      y: { repeat: Infinity, duration: 5, repeatType: "reverse" },
    },
  };

  useEffect(() => {
    switch (button) {
      case "overview":
        setCurrentImage(planet);
        setShowGeologyImage(false);
        break;
      case "internal-structure":
        setCurrentImage(internal);
        setShowGeologyImage(false);
        break;
      case "surface-geology":
        setCurrentImage(planet);
        setGeologyImage(geology);
        setShowGeologyImage(true);
        break;
      default:
        setCurrentImage(planet);
    }
  }, [planet, internal, geology, button]);

  return (
    <StyledPlanetImage>
      <Image
        key={[planet, button]}
        variants={variants}
        animate="event"
        transition={variants.transicion}
        className="planet-image"
        src={currentImage}
        alt="currentImage"
        size={responsive}
      />

      <AnimatePresence>
        {showGeologyImage ? (
          <Image
            key={planet}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="surface-image"
            src={geologyImage}
          />
        ) : null}
      </AnimatePresence>
    </StyledPlanetImage>
  );
}

export default PlanetImage;

import styled from "styled-components";
import { motion } from "framer-motion";

import { fontSpartan, media } from "../../../../../styled-components/Global";
import svgSourceIcon from "../../../../../assets/icon-source.svg";

import { usePlanetDataStorage } from "../../../../../store/PlanetsData";

const StyledPlanetTextContent = styled.div`
  .name {
    margin: 120px 0 10px 0;
    font-size: 80px;
    text-transform: uppercase;
    text-align: start;
    font-style: normal;
  }

  .information {
    max-width: 350px;
    height: 200px;
    text-align: start;
    font-size: 14px;
    font-family: ${fontSpartan};
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    transition: opacity 0.9s ease-in-out;
    opacity: 1;
  }

  .source {
    padding-top: 1rem;
    font-family: ${fontSpartan};
    text-align: start;
    opacity: 0.5;

    a {
      text-decoration: underline;
    }

    .sourceIcon {
      margin-left: 6px;
    }
  }

  ${media.tablet} {
    width: 339px;

    .name {
      margin: 0 0 30px 0;
      font-size: 48px;
    }

    .information {
      font-size: 11px;
    }
  }

  ${media.tablet_s} {
    height: 253px;

    .name {
      margin-bottom: 20px;
    }

    .information {
      line-height: 22px;
      height: 132px;
    }

    .source {
      padding-top: 1.5rem;
      font-size: 12px;
    }
  }

  ${media.phone} {
    width: 100%;

    .name {
      text-align: center;
    }

    .information {
      width: 327px;
      margin: 0 auto;
      text-align: center;
      font-weight: 400;
    }

    .source {
      padding: 2rem 0;
      text-align: center;
    }
  }
`;

function PlanetTextContent({ button }) {
  const { dataP } = usePlanetDataStorage();

  const { name, overview, structure, geology } = dataP;

  return (
    <StyledPlanetTextContent>
      <h1 className="name">{name}</h1>
      <motion.p
        key={button}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="information"
      >
        {button === "overview"
          ? overview.content
          : button === "internal-structure"
          ? structure.content
          : button === "surface-geology"
          ? geology.content
          : ""}
      </motion.p>
      <p className="source">
        Source: &nbsp;
        <a
          href={
            button === "overview"
              ? overview.source
              : button === "internal-structure"
              ? structure.source
              : button === "surface-geology"
              ? geology.source
              : ""
          }
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
          <img
            className="sourceIcon"
            src={svgSourceIcon}
            alt=""
          />
        </a>
      </p>
    </StyledPlanetTextContent>
  );
}

export default PlanetTextContent;

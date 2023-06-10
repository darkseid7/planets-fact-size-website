/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Description,
  ImgContainer,
  PlanetFacts,
  ButtonInfo,
  Facts,
} from "./PlanetDescriptionStyledComponent";
import ResponsiveButtonInfo from "../ResponsiveButtonInfo/ResponsiveButtonInfo";

import svgSourceIcon from "../../assets/icon-source.svg";

const PlanetDescription = ({
  color,
  images,
  name,
  overview,
  structure,
  geology,
}) => {
  const [currentImage, setCurrentImage] = useState(
    "./assets/planet-mercury.svg"
  );
  const [selectedButton, setSelectedButton] = useState("overview");
  const [isHandleClick, setIsHandleClick] = useState(false);
  const [geologyImage, setGeologyImage] = useState(images.geology);
  const [showGeologyImage, setShowGeologyImage] = useState("hidden");
  const [sourceLink, setSourceLink] = useState(overview.source);

  useEffect(() => {
    setCurrentImage(images.planet);
    setSelectedButton("overview");
    setGeologyImage(images.geology);
    setShowGeologyImage("hidden");
    setIsHandleClick(false);
  }, [images]);

  const handleClick = (name) => {
    setSelectedButton(name);
    setIsHandleClick(true);
    switch (name) {
      case "overview":
        setCurrentImage(images?.planet);
        setShowGeologyImage("hidden");
        setSourceLink(overview.source);
        break;
      case "internal-structure":
        setCurrentImage(images?.internal);
        setShowGeologyImage("hidden");
        setSourceLink(structure.source);
        break;
      case "surface-geology":
        setGeologyImage(images?.geology);
        setCurrentImage(images?.planet);
        setShowGeologyImage("visible");
        setSourceLink(geology.source);
        break;
      default:
        setCurrentImage(images?.planet);
    }
  };

  return (
    <>
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ResponsiveButtonInfo
          handleClick={handleClick}
          selectedButton={selectedButton}
          color={color}
        />
        <Description>
          <ImgContainer showSurface={showGeologyImage} size={images.responsive}>
            <motion.img
              key={currentImage}
              initial={{ x: isHandleClick ? 0 : -400 }}
              animate={{ x: 0, scale: isHandleClick ? [0.9, 1] : 1 }}
              transition={{ duration: 0.5 }}
              className="planet-image"
              src={currentImage}
              alt=""
            />

            <motion.img
              key={geologyImage}
              animate={{
                opacity: selectedButton === "surface-geology" ? 1 : 0,
              }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="surface-image"
              src={geologyImage}
            />
          </ImgContainer>

          <PlanetFacts>
            <Facts className="planet-facts">
              <h1 className="name">{name}</h1>
              <p className="information">
                {selectedButton === "overview"
                  ? overview.content
                  : selectedButton === "internal-structure"
                  ? structure.content
                  : selectedButton === "surface-geology"
                  ? geology.content
                  : ""}
              </p>
              <p className="source">
                Source: &nbsp;
                <a href={sourceLink} target="_blank" rel="noreferrer">
                  Wikipedia
                  <img src={svgSourceIcon} alt="" />
                </a>
              </p>
            </Facts>
            <ButtonInfo color={color}>
              <button
                name="overview"
                className={selectedButton === "overview" ? "btn-active" : ""}
                onClick={() => handleClick("overview")}
              >
                <span> 01 </span> overview
              </button>
              <button
                name="internal-structure"
                className={
                  selectedButton === "internal-structure" ? "btn-active" : ""
                }
                onClick={() => handleClick("internal-structure")}
              >
                <span>02</span> internal structure
              </button>
              <button
                name="surface-geology"
                className={
                  selectedButton === "surface-geology" ? "btn-active" : ""
                }
                onClick={() => handleClick("surface-geology")}
              >
                <span>03</span> surface geology
              </button>
            </ButtonInfo>
          </PlanetFacts>
        </Description>
      </motion.div>
    </>
  );
};

export default PlanetDescription;

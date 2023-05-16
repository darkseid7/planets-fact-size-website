/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
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
  const [geologyImage, setGeologyImage] = useState(images.geology);
  const [showGeologyImage, setShowGeologyImage] = useState("hidden");
  const [sourceLink, setSourceLink] = useState(overview.source);

  useEffect(() => {
    setCurrentImage(images.planet);
    setSelectedButton("overview");
    setGeologyImage(images.geology);
    setShowGeologyImage("hidden");

    anime({
      targets: [".planet-facts"],
      opacity: [0, 1],
      duration: 600,
      easing: "easeInQuad",
    });
  }, [images]);

  const handleClick = (name) => {
    setSelectedButton(name);
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

    anime({
      targets: ".planet-image",
      scale: [0.9, 1],
      duration: 500,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".information",
      opacity: [0, 1],
      duration: 600,
      easing: "easeInQuad",
    });

    anime({
      targets: ".surface-image",
      opacity: [0, 1],
      duration: 200,
      easing: "easeInQuad",
    });
  };

  let newPath = "";
  let newPath2 = "";
  if (currentImage) {
    const changeImgPath = currentImage;
    const changeImgPath2 = geologyImage;

    const splitedPath = changeImgPath.split("/");
    const splitedPath2 = changeImgPath2.split("/");
    newPath = `/src/assets/${splitedPath[2]}`;
    newPath2 = `/src/assets/${splitedPath2[2]}`;
  }

  return (
    <>
      <ResponsiveButtonInfo
        handleClick={handleClick}
        selectedButton={selectedButton}
        color={color}
      />
      <Description>
        <ImgContainer showSurface={showGeologyImage} size={images.responsive}>
          <img className="planet-image" src={newPath} alt="" />
          <img className="surface-image" src={newPath2} />
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
    </>
  );
};

export default PlanetDescription;

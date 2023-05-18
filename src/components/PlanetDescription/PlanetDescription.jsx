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

    anime({
      targets: ".planet-image",
      translateX: (image) => {
        return [-image.clientWidth, 0];
      },
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1500,
      complete: () => {
        anime({
          targets: [".planet-image", ".surface-image"],
          translateY: "10px",
          direction: "alternate",
          loop: true,
          easing: "easeInOutQuad",
          duration: 2000,
        });
      },
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

    //Animations
    // anime({
    //   targets: ".planet-image",
    //   translateX: (el) => {
    //     return [el.clientWidth, 0];
    //   },
    //   opacity: [0, 1],
    //   easing: "easeOutExpo",
    //   duration: 1500,
    // });
    // anime({
    //   targets: ".planet-image",
    //   scale: [0.9, 1],
    //   opacity: [0, 1],
    //   duration: 400,
    //   easing: "easeOutExpo",
    // });

    anime({
      targets: ".information",
      opacity: [0, 1],
      duration: 400,
      easing: "easeInQuad",
    });

    anime({
      targets: ".surface-image",
      opacity: [0, 1],
      duration: 200,
      easing: "easeInQuad",
      delay: 200,
    });
  };

  return (
    <>
      <ResponsiveButtonInfo
        handleClick={handleClick}
        selectedButton={selectedButton}
        color={color}
      />
      <Description>
        <ImgContainer showSurface={showGeologyImage} size={images.responsive}>
          <img className="planet-image" src={currentImage} alt="" />
          <img className="surface-image" src={geologyImage} />
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

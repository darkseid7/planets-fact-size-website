/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Description,
  ImgContainer,
  PlanetFacts,
  ButtonInfo,
  Facts,
} from "./PlanetDescriptionStyledComponent";
import ResponsiveButtonInfo from "../ResponsiveButtonInfo/ResponsiveButtonInfo";
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

  useEffect(() => {
    setCurrentImage(images.planet);
    setSelectedButton("overview");
    setGeologyImage(images.geology);
  }, [images]);

  const handleClick = (name) => {
    setSelectedButton(name);
    switch (name) {
      case "overview":
        setCurrentImage(images?.planet);
        break;
      case "internal-structure":
        setCurrentImage(images?.internal);
        break;
      case "surface-geology":
        setCurrentImage(images?.geology);
        setGeologyImage(images?.planet);
        break;
      default:
        setCurrentImage(images?.planet);
    }
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
        <ImgContainer size={images.responsive}>
          {selectedButton === "surface-geology" ? (
            <>
              <img src={newPath2} alt="" />
              <img className="surface-image" src={newPath} />
            </>
          ) : (
            <img src={newPath} alt="" />
          )}
        </ImgContainer>

        <PlanetFacts>
          <Facts>
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
              Source:
              <a href="ass" target="_blank">
                Wikipedia
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

/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  HeaderStyledComponent,
  Logo,
  PlanetsWrapper,
  Planet,
} from "./HeaderStyledComponent";

import ResponsiveHeader from "../ResponsiveHeader/ResponsiveHeader";
import { usePlanets } from "../../hooks/Planets";

const Header = ({ planets, activeButton, setActiveButton }) => {
  const { setNewUrl } = usePlanets();
  const handlePlanetChange = (e) => {
    e.preventDefault();
    setActiveButton(e.target.text);
  };

  return (
    <>
      <HeaderStyledComponent>
        <Logo>
          <a href="/">the planets</a>
        </Logo>
        <PlanetsWrapper>
          {planets.map(({ name, color }) => {
            const isActive = activeButton === name;
            return (
              <Planet color={color} key={name} className="planet ">
                <a
                  href=""
                  className={`${isActive ? "btn-active" : ""}`}
                  onClick={handlePlanetChange}
                >
                  {name}
                </a>
              </Planet>
            );
          })}
        </PlanetsWrapper>
      </HeaderStyledComponent>
      <ResponsiveHeader planets={planets} setNewUrl={setNewUrl} />
    </>
  );
};

export default Header;

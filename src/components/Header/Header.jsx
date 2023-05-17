/* eslint-disable react/prop-types */
import {
  HeaderStyledComponent,
  Logo,
  PlanetsWrapper,
  Planet,
} from "./HeaderStyledComponent";

import ResponsiveHeader from "../ResponsiveHeader/ResponsiveHeader";
import { useState } from "react";

const Header = ({ planets, setNewUrl }) => {
  const [activeButton, setactiveButton] = useState("mercury");

  const handlePlanetChange = (e) => {
    e.preventDefault();
    setactiveButton(e.target.text);
    setNewUrl(`/${e.target.text}`);
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

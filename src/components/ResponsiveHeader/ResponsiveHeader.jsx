/* eslint-disable react/prop-types */
import { useState } from "react";
import { PlanetsArray } from "../../utils/PlanetsArray";

import iconChevron from "../../assets/icon-chevron.svg";
import {
  MenuResponsive,
  ResponsiveItems,
  ResponsiveItem,
  ItemName,
  Circle,
} from "./styled-components/ResponsiveHeaderStyles";

import Logo from "./Logo/Logo";

const ResponsiveHeader = ({ setNewUrl }) => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  const handlePlanetChange = (e) => {
    e.preventDefault();
    setNewUrl(`/${e.target.text}`);
    setShowResponsiveMenu(false);
  };

  return (
    <>
      <Logo
        showResponsiveMenu={showResponsiveMenu}
        setShowResponsiveMenu={setShowResponsiveMenu}
      />

      <MenuResponsive
        className="menu-responsive"
        showMenu={() => (showResponsiveMenu ? "block" : "none")}
      >
        <ResponsiveItems>
          {PlanetsArray.map(({ name, color }) => {
            return (
              <ResponsiveItem className="planet-option" key={name}>
                <ItemName>
                  <Circle color={color} />
                  <a href="" onClick={handlePlanetChange}>
                    {name}
                  </a>
                </ItemName>
                <img src={iconChevron} alt="" />
              </ResponsiveItem>
            );
          })}
        </ResponsiveItems>
      </MenuResponsive>
    </>
  );
};

export default ResponsiveHeader;

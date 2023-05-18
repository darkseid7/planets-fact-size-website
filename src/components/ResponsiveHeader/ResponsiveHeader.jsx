/* eslint-disable react/prop-types */
import { useState } from "react";
import anime from "animejs";

import movileMenu from "../../assets/icon-hamburger.svg";
import iconChevron from "../../assets/icon-chevron.svg";
import {
  LogoResponsive,
  MenuResponsive,
  ResponsiveItems,
  ResponsiveItem,
  ItemName,
  Circle,
} from "./ResponsiveHeaderStyledComponent";

const ResponsiveHeader = ({ planets, setNewUrl }) => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  const planetNames = planets;

  const showMobileMenu = (e) => {
    e.preventDefault();
    if (showResponsiveMenu) {
      setShowResponsiveMenu(false);
    } else {
      anime({
        targets: ".planet-option",
        translateX: [-270, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(50),
      });
      setShowResponsiveMenu(true);
    }
  };

  const handlePlanetChange = (e) => {
    e.preventDefault();
    setNewUrl(`/${e.target.text}`);
    setShowResponsiveMenu(false);
  };

  return (
    <>
      <LogoResponsive>
        <div className="logo-wrapper">
          <h2 className="header-logo-text header-logo-movile">the planets</h2>
          <a href="" className="icon" onClick={showMobileMenu}>
            <img src={movileMenu} alt="" />
          </a>
        </div>
      </LogoResponsive>

      <MenuResponsive
        className="menu-responsive"
        showMenu={() => (showResponsiveMenu ? "block" : "none")}
      >
        <ResponsiveItems>
          {planetNames.map(({ name, color }) => {
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

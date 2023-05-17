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
      setTimeout(() => {
        anime({
          targets: ".planet-option",
          translateX: [0, -370],
          duration: 800,
          delay: anime.stagger(60),
        });
        setShowResponsiveMenu(false);
      });
    } else {
      anime({
        targets: ".planet-option",
        translateX: [-270, 0],
        duration: 1000,
        delay: anime.stagger(50),
      });
      setShowResponsiveMenu(true);
    }
  };

  const handlePlanetChange = (e) => {
    e.preventDefault();
    // setNewUrl(`http://localhost:3000/${e.target.text}`);
    // setNewUrl(`http://192.168.1.4:3000/${e.target.text}`);
    setNewUrl(`/${e.target.text}`);

    anime({
      targets: ".planet-option",
      duration: 900,
      translateX: [0, -390],
      delay: anime.stagger(50),
    });
    setTimeout(() => {
      setShowResponsiveMenu(false);
    }, 700);
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

      <MenuResponsive showMenu={() => (showResponsiveMenu ? "block" : "none")}>
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

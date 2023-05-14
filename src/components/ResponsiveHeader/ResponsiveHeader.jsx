/* eslint-disable react/prop-types */
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
import { useState } from "react";

const ResponsiveHeader = ({ planets, setNewUrl }) => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  const planetNames = planets;

  const showMobileMenu = (e) => {
    e.preventDefault();
    setShowResponsiveMenu(!showResponsiveMenu);
  };

  const handlePlanetChange = (e) => {
    e.preventDefault();
    // setNewUrl(`http://localhost:3000/${e.target.text}`);
    setNewUrl(`http://192.168.1.4:3000/${e.target.text}`);
    setShowResponsiveMenu(!showResponsiveMenu);
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

      {showResponsiveMenu ? (
        <MenuResponsive>
          <ResponsiveItems>
            {planetNames.map(({ name, color }) => {
              return (
                <ResponsiveItem key={name}>
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
      ) : (
        ""
      )}
    </>
  );
};

export default ResponsiveHeader;

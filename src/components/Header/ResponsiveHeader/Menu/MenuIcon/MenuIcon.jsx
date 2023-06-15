import { useState } from "react";
import styled from "styled-components";
import anime from "animejs";

import movileMenu from "../../../../../assets/icon-hamburger.svg";
import { media } from "../../../../../styled-components/Global";

const StyledMenuIcon = styled.a`
  display: none;

  ${media.phone} {
    display: block;
  }
`;

function MenuIcon({ showResponsiveMenu, setShowResponsiveMenu }) {
  const showMobileMenu = (e) => {
    e.preventDefault();
    setShowResponsiveMenu(!showResponsiveMenu);
  };

  return (
    <StyledMenuIcon href="" className="icon" onClick={showMobileMenu}>
      <img src={movileMenu} alt="" />
    </StyledMenuIcon>
  );
}

export default MenuIcon;

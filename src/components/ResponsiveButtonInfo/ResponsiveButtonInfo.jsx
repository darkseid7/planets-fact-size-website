/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";

const fontSpartan = "Spartan";
const MenuContainer = styled.div`
  display: none;

  .menu-responsive {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
  }

  @media only screen and (max-width: 664px) {
    display: block;
  }
`;

const MenuItem = styled.div`
  font-family: ${fontSpartan};
  font-size: 9px;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.5;
  border-bottom: 4px solid transparent;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.btn-active {
    opacity: 1;
    border-bottom: ${({ color }) => `4px solid ${color}`};
  }

  &:hover {
    opacity: 1;
    border-bottom: ${({ color }) => `4px solid ${color}`};
  }
`;
const ResponsiveButtonInfo = ({ color, handleClick, selectedButton }) => {
  const [active, setActive] = useState(selectedButton);

  useEffect(() => {
    setActive(selectedButton);
  }, [selectedButton]);

  const handleButtonClick = (name) => {
    setActive(name);
    handleClick(name);
  };

  return (
    <>
      <MenuContainer>
        <div className="menu-responsive">
          <MenuItem
            color={color}
            name="overview"
            onClick={() => handleButtonClick("overview")}
            className={active === "overview" ? "btn-active" : ""}
          >
            Overview
          </MenuItem>
          <MenuItem
            color={color}
            name="internal-structure"
            onClick={() => handleButtonClick("internal-structure")}
            className={active === "internal-structure" ? "btn-active" : ""}
          >
            Structure
          </MenuItem>
          <MenuItem
            color={color}
            name="surface-geology"
            onClick={() => handleButtonClick("surface-geology")}
            className={active === "surface-geology" ? "btn-active" : ""}
          >
            Surface
          </MenuItem>
        </div>
      </MenuContainer>
    </>
  );
};

export default ResponsiveButtonInfo;

/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";
import { usePlanetDataStorage } from "../../../../../../store/PlanetsData";
import { fontSpartan, media } from "../../../../../../styled-components/Global";

const MenuContainer = styled.div`
  display: none;
  width: calc(100% - -36px);
  left: -18px;
  position: absolute;
  top: -10px;
  z-index: 1;

  .menu-responsive {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
  }

  ${media.phone} {
    display: block;
  }
`;

const MenuItem = styled.div`
  font-family: ${fontSpartan};
  font-size: 9px;
  padding: 1.3rem 1.5rem 0.8rem 1.5rem;
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

function PlanetActionButtonsResponsive({ button, setButton }) {
  const [active, setActive] = useState("overview");
  const { dataP, setExecuteAnimation } = usePlanetDataStorage();
  const { color } = dataP;

  useEffect(() => {
    setActive(button);
  }, [button]);

  const handleButtonClick = (name) => {
    setActive(name);
    setButton(name);
    setExecuteAnimation();
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
}

export default PlanetActionButtonsResponsive;

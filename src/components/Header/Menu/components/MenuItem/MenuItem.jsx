/* eslint-disable react/prop-types */
import { useState } from "react";

import { StyledMenuItem } from "./MenuItemStyles";
import { PlanetsArray } from "../../../../../utils/PlanetsArray";

function MenuItem({ setNewUrl }) {
  const [activeButton, setActiveButton] = useState("earth");
  const handlePlanetChange = (e) => {
    e.preventDefault();
    setActiveButton(e.target.text);
    setNewUrl(`/${e.target.text}`);
  };

  return (
    <>
      {PlanetsArray.map(({ name, color }) => {
        const isActive = activeButton === name;
        return (
          <StyledMenuItem color={color} key={name} className="planet ">
            <a
              href=""
              className={`${isActive ? "btn-active" : ""}`}
              onClick={handlePlanetChange}
            >
              {name}
            </a>
          </StyledMenuItem>
        );
      })}
    </>
  );
}

export default MenuItem;

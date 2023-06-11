import React from "react";
import styled from "styled-components";

export const StyledMenuItem = styled.li`
  padding: 31px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #38384f;

  img {
    width: 6px;
    height: 8px;
  }
`;

function MenuItem() {
  return (
    <StyledMenuItem>
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
    </StyledMenuItem>
  );
}

export default MenuItem;

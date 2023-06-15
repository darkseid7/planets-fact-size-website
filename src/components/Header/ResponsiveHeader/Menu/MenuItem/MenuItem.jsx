import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import { PlanetsArray } from "../../../../../utils/PlanetsArray";
import iconChevron from "../../../../../assets/icon-chevron.svg";

import { StyledMenuItem, Item, ItemName, Circle } from "./MenuItemStyles";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function MenuItem({ showResponsiveMenu, setShowResponsiveMenu, setNewUrl }) {
  const [scope, animate] = useAnimate();
  const handlePlanetChange = (e) => {
    e.preventDefault();
    setNewUrl(`/${e.target.text}`);
    setShowResponsiveMenu(false);
  };

  return (
    <StyledMenuItem>
      {PlanetsArray.map(({ name, color }, index) => {
        return (
          <Item
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: index * 0.05,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            key={index}
          >
            <ItemName>
              <Circle color={color} />
              <a href="" onClick={handlePlanetChange}>
                {name}
              </a>
            </ItemName>
            <img src={iconChevron} alt="" />
          </Item>
        );
      })}
    </StyledMenuItem>
  );
}

export default MenuItem;

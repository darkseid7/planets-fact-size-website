/* eslint-disable react/prop-types */
import {
  HeaderStyledComponent,
  Logo,
  PlanetsWrapper,
  Planet,
} from "./HeaderStyledComponent";

import ResponsiveHeader from "../ResponsiveHeader/ResponsiveHeader";

const Header = ({ planets, setNewUrl }) => {
  const handlePlanetChange = (e) => {
    e.preventDefault();
    // setNewUrl(`http://localhost:3000/${e.target.text}`);
    // setNewUrl(`http://192.168.1.4:3000/${e.target.text}`);
    setNewUrl(`/${e.target.text}`);
  };

  return (
    <>
      <HeaderStyledComponent>
        <Logo>the planets</Logo>
        <PlanetsWrapper>
          {planets.map(({ name, color }) => {
            return (
              <Planet color={color} key={name} className="planet">
                <a href="" onClick={handlePlanetChange}>
                  {name}
                </a>
              </Planet>
            );
          })}
        </PlanetsWrapper>
      </HeaderStyledComponent>
      <ResponsiveHeader planets={planets} setNewUrl={setNewUrl} />
    </>
  );
};

export default Header;

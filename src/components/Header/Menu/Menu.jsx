import styled from "styled-components";

import { fontSpartan, media } from "../../../styled-components/Global";

export const StyledMenu = styled.ul`
  width: 665px;
  margin: 0px 0;
  font-family: ${fontSpartan};
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;

  ${media.tablet} {
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
  }
  ${media.phone} {
    display: none;
  }
`;

function Menu({ children }) {
  return <StyledMenu>{children}</StyledMenu>;
}

export default Menu;

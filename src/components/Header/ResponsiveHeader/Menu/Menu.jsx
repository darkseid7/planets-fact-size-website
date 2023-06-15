import styled from "styled-components";

import { media } from "../../../../styled-components/Global";

import MenuIcon from "./MenuIcon/MenuIcon";

const StyledMenu = styled.div`
  display: none;

  ${media.phone} {
    display: block;
  }
`;

function Menu({ showResponsiveMenu, setShowResponsiveMenu }) {
  return (
    <StyledMenu>
      <MenuIcon
        showResponsiveMenu={showResponsiveMenu}
        setShowResponsiveMenu={setShowResponsiveMenu}
      />
    </StyledMenu>
  );
}

export default Menu;

/* eslint-disable react/prop-types */
import styled from "styled-components";

import { fontAntonio, media } from "../../styled-components/Global";

import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/components/MenuItem/MenuItem";

import ResponsiveHeader from "../ResponsiveHeader/ResponsiveHeader";

const StyledHeader = styled.header`
  padding: 1rem;
  font-family: ${fontAntonio};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(151, 151, 151, 0.2);

  .topnav,
  .icon {
    display: none;
  }

  ${media.tablet} {
    padding: 0;
    display: block;
    height: 159px;
  }

  ${media.phone} {
    display: none;
  }
`;

const Header = ({ setNewUrl }) => {
  return (
    <>
      <StyledHeader>
        <Logo />
        <Menu>
          <MenuItem setNewUrl={setNewUrl} />
        </Menu>
      </StyledHeader>
      <ResponsiveHeader setNewUrl={setNewUrl} />
    </>
  );
};

export default Header;

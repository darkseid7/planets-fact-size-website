import styled from "styled-components";

import { media } from "../../../styled-components/Global";

import Menu from "../Menu/Menu";

const StyledLogo = styled.div`
  display: none;
  text-transform: uppercase;
  border-bottom: 1px solid rgb(151, 151, 151, 0.2);
  .logo-wrapper {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-logo-text {
      text-align: start;
      padding: 0px !important;
      font-size: 28px;
    }

    .header-logo-movile {
      display: block;
    }
    .icon {
      display: block;
    }
  }

  ${media.phone} {
    display: block;
  }
`;

function Logo({ showResponsiveMenu, setShowResponsiveMenu }) {
  return (
    <StyledLogo>
      <div className="logo-wrapper">
        <h2 className="header-logo-text header-logo-movile">the planets</h2>
        <Menu
          showResponsiveMenu={showResponsiveMenu}
          setShowResponsiveMenu={setShowResponsiveMenu}
        />
      </div>
    </StyledLogo>
  );
}

export default Logo;

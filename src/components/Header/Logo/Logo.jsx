import styled from "styled-components";

import { fontAntonio, media } from "../../../styled-components/Global";

export const StyledLogo = styled.h2`
  font-family: ${fontAntonio};
  font-size: 28px;
  color: #fff;
  padding: 0 0 0 20px;
  text-transform: uppercase;

  .header-logo-movile {
    display: none;
  }

  ${media.tablet} {
    text-align: center;
    margin: 0;
    padding: 40px 0;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <a href="/">the planets</a>
    </StyledLogo>
  );
}

export default Logo;

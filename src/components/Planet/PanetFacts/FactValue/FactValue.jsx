import styled from "styled-components";
import { fontAntonio, media } from "../../../../styled-components/Global";

const StyledFactValue = styled.span`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1.5px;
  font-family: ${fontAntonio};

  ${media.tablet_s} {
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.9px;
  }
`;

function FactValue({ children }) {
  return <StyledFactValue>{children}</StyledFactValue>;
}

export default FactValue;

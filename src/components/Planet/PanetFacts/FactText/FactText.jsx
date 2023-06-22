import styled from "styled-components";
import { fontSpartan, media } from "../../../../styled-components/Global";

const StyledFactText = styled.span`
  font-size: 11px;
  font-family: ${fontSpartan};
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.5;
  mix-blend-mode: normal;

  ${media.tablet_s} {
    font-size: 8px;
    letter-spacing: 0.73px;
    padding-bottom: 0.8rem;
  }

  ${media.phone} {
    padding-bottom: 0;
  }
`;

function FactText({ children }) {
  return <StyledFactText>{children}</StyledFactText>;
}

export default FactText;

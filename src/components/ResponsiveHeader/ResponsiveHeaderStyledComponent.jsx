import styled from "styled-components";

const fontSpartan = "Spartan";
export const LogoResponsive = styled.div`
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

  @media only screen and (max-width: 664px) {
    display: block;
  }
`;

export const MenuResponsive = styled.div`
  width: 100%;
  position: absolute;
  background-color: #070724;
  text-transform: uppercase;
  height: 120vh;
  overflow-y: auto;
  z-index: 999;
  display: none;

  @media only screen and (max-width: 664px) {
    display: block;
  }
`;

export const ResponsiveItems = styled.ul`
  padding: 20px;
  display: block;
`;

export const ResponsiveItem = styled.li`
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

export const ItemName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
    font-family: ${fontSpartan};
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const Circle = styled.div`
  margin-right: 30px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
`;

import styled from "styled-components";

const fontAntonio = "Antonio";
const fontSpartan = "Spartan";

export const HeaderStyledComponent = styled.header`
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

  @media only screen and (max-width: 1060px) {
    padding: 0;
    display: block;
    height: 159px;
  }

  @media only screen and (max-width: 664px) {
    display: none;
  }
`;

export const Logo = styled.h2`
  font-family: ${fontAntonio};
  font-size: 28px;
  color: #fff;
  padding: 0 0 0 20px;
  text-transform: uppercase;

  .header-logo-movile {
    display: none;
  }

  @media only screen and (max-width: 1060px) {
    text-align: center;
    margin: 0;
    padding: 40px 0;
  }
`;

export const PlanetsWrapper = styled.ul`
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

  @media only screen and (max-width: 1060px) {
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
  }
`;

export const Planet = styled.li`
  cursor: pointer;

  a {
    position: relative;
    padding: 2rem 0;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    transition: 0.3;
    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 0.25rem;
      left: 0;
      right: 0;
      bottom: 4.5rem;
      opacity: 0;
      width: 100%;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      background: ${({ color }) => color};
    }

    &.btn-active {
      &::before {
        opacity: 1;
        transform: scaleX(1);
        transition: opacity, transform 0.2s ease-in;
      }
    }

    &:hover {
      opacity: 1;
      color: #38384f;

      &::before {
        opacity: 1;
        transform: scaleX(1);
        transition: opacity, transform 0.2s ease-in;
      }
    }
  }
`;

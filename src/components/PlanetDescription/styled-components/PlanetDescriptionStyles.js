import styled from "styled-components";
import { motion } from "framer-motion";

const fontSpartan = "Spartan";

export const Description = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 18px;
  transition: all 0.5s ease-out;

  @media only screen and (max-width: 1060px) {
    display: block;
    padding-top: 4rem;
  }

  @media only screen and (max-width: 664px) {
    padding-top: 0;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  margin-right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    position: absolute;

    &.surface-image {
      display: ${({ showSurface }) =>
        showSurface === "visible" ? "block" : "none"};
      width: 163px;
      height: 199px;
      z-index: 1;
      top: 80px;
    }
  }

  @media only screen and (max-width: 1140px) {
    margin-right: 0rem;
  }

  @media only screen and (max-width: 1060px) {
    width: 100%;
    height: 600px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    img {
      &.surface-image {
        top: 400px;
      }
    }
  }

  @media only screen and (max-width: 664px) {
    height: 300px;
    img {
      width: ${({ size }) => size};

      &.surface-image {
        width: 80px;
        height: 96px;
        top: 160px;
      }
    }
  }
`;

export const PlanetFacts = styled.div`
  @media only screen and (max-width: 1060px) {
    padding-top: 120px;
    padding: 1rem;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 1060px) {
    padding: 1rem 0;
  }
`;

export const Facts = styled.div`
  .name {
    margin: 120px 0 10px 0;
    font-size: 80px;
    text-transform: uppercase;
    text-align: start;
    font-style: normal;
  }

  .information {
    max-width: 350px;
    height: 200px;
    text-align: start;
    font-size: 14px;
    font-family: ${fontSpartan};
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    transition: opacity 0.9s ease-in-out;
    opacity: 1;
  }

  .source {
    padding-top: 1rem;
    font-family: ${fontSpartan};
    text-align: start;
    opacity: 0.5;
  }

  @media only screen and (max-width: 1060px) {
    width: 339px;

    .name {
      margin: 0 0 30px 0;
      font-size: 48px;
    }

    .information {
      font-size: 11px;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 253px;

    .name {
      margin-bottom: 20px;
    }

    .information {
      line-height: 22px;
      height: 132px;
    }

    .source {
      padding-top: 1.5rem;
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 664px) {
    width: 100%;

    .name {
      text-align: center;
    }

    .information {
      width: 327px;
      margin: 0 auto;
      text-align: center;
      font-weight: 400;
    }

    .source {
      padding: 2rem 0;
      text-align: center;
    }
  }
`;

export const ButtonInfo = styled(motion.div)`
  padding: 2rem 0;
  display: grid;

  button {
    width: 350px;
    height: 48px;
    padding-top: 4px;
    margin: 8px 0;
    text-transform: uppercase;
    font-family: ${fontSpartan};
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 2.57px;
    background-color: transparent;
    border: 1px solid #38384f;
    border-radius: 0%;
    color: #fff;
    cursor: pointer;
    text-align: start;

    span {
      padding: 0 25px 0 28px;
      opacity: 0.5;
    }

    &.btn-active {
      background-color: ${({ color }) => color} !important;
    }
  }

  @media only screen and (max-width: 768px) {
    button {
      font-size: 9px;
      letter-spacing: 1.9px;
      width: 281px;
      height: 40px;
    }
  }

  @media only screen and (max-width: 664px) {
    display: none;
  }
`;

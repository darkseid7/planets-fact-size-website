import styled from "styled-components";

export const StyledMenuItem = styled.li`
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

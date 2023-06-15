import styled from "styled-components";
import { motion } from "framer-motion";

import { fontSpartan } from "../../../../../styled-components/Global";

export const StyledMenuItem = styled.ul`
  padding: 10px 20px;
  display: block;
  justify-content: space-between;
  align-items: center;

  img {
    width: 6px;
    height: 8px;
  }
`;

export const Item = styled(motion.li)`
  padding: 31px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #38384f;
  cursor: pointer;
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

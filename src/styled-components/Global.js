import { createGlobalStyle } from "styled-components";

export const fontAntonio = "Antonio";
export const fontSpartan = "Spartan";

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;
export const media = {
  desktop_m: customMediaQuery(1200),
  tablet: customMediaQuery(1060),
  tablet2: customMediaQuery(1000),
  tablet_s: customMediaQuery(800),
  phone: customMediaQuery(664),
};

export const GlobalStyles = createGlobalStyle``;

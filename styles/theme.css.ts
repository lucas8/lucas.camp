import { createGlobalTheme } from "@vanilla-extract/css";

export const colors = {
  text: "#fff",
  background: "#1D4A14",
};

export const space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  auto: "auto",
  full: "100%",
  fit: "fit-content",
  max: "max-content",
  min: "min-content",
  viewHeight: "100vh",
  viewWidth: "100vw",
  none: "0",
};

export const fonts = {
  ppEditorialNew: "PP Editorial New, serif",
};

export const lineHeights = {
  body: "1.2",
};

export const fontWeights = {
  light: "300",
  normal: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

export const fontSizes = {
  body: "2rem",
};

export const vars = createGlobalTheme(":root", {
  colors,
  space,
  fonts,
  lineHeights,
  fontWeights,
  fontSizes,
});

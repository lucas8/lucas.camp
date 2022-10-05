import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("#__next", {
  fontFamily: vars.fonts.ppEditorialNew,
  color: vars.colors.text,
  background: vars.colors.background,
  height: vars.space.full,
  lineHeight: vars.lineHeights.body,
  fontSize: vars.fontSizes.body,
});

globalFontFace(`"PP Editorial New"`, {
  fontDisplay: "optional",
  fontStyle: "normal",
  fontWeight: vars.fontWeights.normal,
  src: `url("/static/fonts/PPEditorialNew-Regular.woff") format("woff"),
        url("/static/fonts/PPEditorialNew-Regular.woff2") format("woff2")`,
});

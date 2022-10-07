import { sprinkles } from "../../styles/sprinkles.css";
import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const root = style([
  sprinkles({
    display: "flex",
    mx: 4,
    py: 2,
  }),
  {
    borderBottomWidth: vars.borderWidths.px,
    borderColor: vars.colors.stroke,
    borderStyle: vars.borderStyles.solid,
  },
]);

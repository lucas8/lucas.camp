import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { space, fontSizes, colors } from "./theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    xs: {},
    sm: { "@media": "screen and (min-width: 576px)" },
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "xs",
  properties: {
    position: ["relative", "absolute"],
    display: ["none", "flex", "grid", "block", "inline"],
    flexDirection: ["row", "row-reverse", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: ["auto"],
    marginRight: ["auto"],
    marginBottom: ["auto"],
    marginLeft: ["auto"],
    gap: space,
    rowGap: space,
    columnGap: space,
    aspectRatio: ["1/1", "4/3"],
    width: space,
    height: space,
    fontSize: fontSizes,
    textAlign: ["left", "center", "right"],
  },
  shorthands: {
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    ml: ["marginLeft"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    mr: ["marginRight"],
  },
});

const colorProperties = defineProperties({
  properties: {
    color: colors,
    borderRadius: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];

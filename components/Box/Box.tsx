import { createElement, AllHTMLAttributes, ElementType } from "react";
import type { Sprinkles } from "../../styles/sprinkles.css";
import { sprinkles } from "../../styles/sprinkles.css";
import clsx from "clsx";

export interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, "content" | "height" | "translate" | "color" | "width" | "cursor">,
    Sprinkles {
  component?: ElementType;
}

export const Box = ({
  as: component = "div",
  className,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  display,
  flexDirection,
  flexShrink,
  flexGrow,
  alignItems,
  justifyContent,
  gap,
  columnGap,
  rowGap,
  textAlign,
  ...restProps
}: BoxProps) => {
  const atomClasses = clsx(
    sprinkles({
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      display,
      flexDirection,
      flexShrink,
      flexGrow,
      alignItems,
      justifyContent,
      gap,
      columnGap,
      rowGap,
      textAlign,
    }),
    className
  );
  return createElement(component, { className: atomClasses, ...restProps });
};

import { cva } from "styled-system/css";

export const button = cva({
  base: {
    display: "flex",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid transparent",
    rounded: "xl",
    h: 12,
    py: 2,
    px: 4,
    fontWeight: "medium",
  },
  variants: {
    variant: {
      primary: {
        borderColor: "border",
        color: "background.secondary",
        bgColor: "accent",
      },
      secondary: {
        borderColor: "border",
        bgColor: "background.muted",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

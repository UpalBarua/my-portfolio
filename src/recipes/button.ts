import { cva } from "styled-system/css";

export const button = cva({
  base: {
    display: "flex",
    gap: 2,
    alignItems: "center",
    border: "1px solid",
    rounded: "xl",
    h: "12",
    px: 4,
    fontWeight: "medium",
  },
  variants: {
    variant: {
      primary: {
        borderColor: "fg/10",
        color: "bg",
        bg: "accent",
      },
      secondary: {
        borderColor: "fg/10",
        bg: "bg",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

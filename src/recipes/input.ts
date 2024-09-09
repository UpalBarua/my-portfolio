import { cva } from "styled-system/css";

export const input = cva({
  base: {
    outline: 0,
    border: "1px solid {colors.border}",
    rounded: "lg",
    w: "full",
    h: "12",
    py: "2",
    px: "4",
    fontSize: "sm",
    bgColor: "background.muted",
  },
});

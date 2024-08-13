import { cva } from "styled-system/css";

export const blurredBg = cva({
  base: {
    bg: "dark.darker/80",
    backdropFilter: "blur(0.75rem) saturate(200%)",
  },
});

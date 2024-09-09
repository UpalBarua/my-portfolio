import {
  defineConfig,
  defineKeyframes,
  defineLayerStyles,
  defineTextStyles,
} from "@pandacss/dev";

const layerStyles = defineLayerStyles({
  container: {
    value: {
      border: "2px solid {colors.border}",
      borderRadius: "2xl",
      padding: {
        base: 8,
        md: 10,
      },
      backgroundColor: "background.secondary/75",
      backdropFilter: "blur(2rem) saturate(200%)",
    },
  },
});

const textStyles = defineTextStyles({
  headline: {
    value: {
      letterSpacing: "tight",
      textTransform: "capitalize",
      fontSize: "clamp(2.35rem, 5vw + 0.25rem, 3.125rem)",
      fontWeight: "extrabold",
      lineHeight: "snug",
      textWrap: "pretty",
    },
  },
  title: {
    value: {
      letterSpacing: "tight",
      textTransform: "capitalize",
      fontSize: "3xl",
      fontWeight: "extrabold",
      lineHeight: "snug",
      textWrap: "pretty",
    },
  },
  text: {
    value: {
      textWrap: "pretty",
      lineHeight: "relaxed",
    },
  },
});

const keyframes = defineKeyframes({
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
});

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          background: {
            DEFAULT: {
              value: "hsl(235, 19%, 13%)",
            },
            secondary: {
              value: "hsl(235, 10%, 11%)",
            },
            muted: {
              value: "hsl(235, 15%, 20%)",
            },
          },
          foreground: {
            DEFAULT: {
              value: "hsl(229, 18%, 80%)",
            },
            secondary: {
              value: "hsl(229, 15%, 65%)",
            },
          },
          border: {
            DEFAULT: {
              value: "hsl(229, 22%, 20%)",
            },
            hover: {
              value: "hsl(229, 20%, 16%)",
            },
          },

          accent: {
            DEFAULT: {
              value: "hsl(189, 73%, 52%)",
            },
          },
          purple: {
            DEFAULT: {
              value: "hsl(261, 85%, 79%)",
            },
          },
          blue: {
            DEFAULT: {
              value: "hsl(221, 89%, 72%)",
            },
          },
          warning: {
            DEFAULT: {
              value: "hsl(36, 66%, 64%)",
            },
          },
          danger: {
            DEFAULT: {
              value: "hsl(349, 89%, 72%)",
            },
          },
          success: {
            DEFAULT: {
              value: "hsl(89, 51%, 61%)",
            },
          },
        },
      },
      layerStyles,
      textStyles,
      keyframes,
    },
  },
  outdir: "styled-system",
});

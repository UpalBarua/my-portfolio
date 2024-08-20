import {
  defineConfig,
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
      backgroundColor: "background.secondary/80",
      // boxShadow: "lg",
      backdropFilter: "blur(0.75rem) saturate(200%)",
    },
  },
});

const textStyles = defineTextStyles({
  headline: {
    value: {
      letterSpacing: "tight",
      textTransform: "capitalize",
      fontSize: "5xl",
      fontWeight: "extrabold",
      lineHeight: "snug",
    },
  },
  title: {
    value: {
      letterSpacing: "tight",
      textTransform: "capitalize",
      fontSize: "3xl",
      fontWeight: "extrabold",
      lineHeight: "snug",
    },
  },
  text: {
    value: {
      textWrap: "pretty",
      lineHeight: "relaxed",
    },
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
              value: "hsl(235, 19%, 10%)",
            },
            muted: {
              value: "hsl(235, 20%, 16%)",
            },
          },
          foreground: {
            DEFAULT: {
              value: "hsl(229, 35%, 75%)",
            },
            secondary: {
              value: "hsl(229, 22%, 55%)",
            },
          },
          border: {
            DEFAULT: {
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
    },
  },
  outdir: "styled-system",
});

import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          dark: {
            DEFAULT: {
              value: "hsl(235, 19%, 13%)",
            },
            darker: {
              value: "hsl(235, 19%, 10%)",
            },
          },
          light: {
            DEFAULT: {
              value: "hsl(229, 35%, 75%)",
            },
          },
          cyan: {
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
          yellow: {
            DEFAULT: {
              value: "hsl(36, 66%, 64%)",
            },
          },
          red: {
            DEFAULT: {
              value: "hsl(349, 89%, 72%)",
            },
          },
          green: {
            DEFAULT: {
              value: "hsl(89, 51%, 61%)",
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: {
              value: "{colors.dark}",
            },
          },
          fg: {
            DEFAULT: {
              value: "{colors.light}",
            },
          },
          accent: {
            DEFAULT: {
              value: "{colors.cyan}",
            },
          },
        },
      },
    },
  },

  outdir: "styled-system",
});

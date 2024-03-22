/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#F9FBFC",
        white: "#FFFFFF",
        black: "#000000",
        textDark: "#1a1a1a",
        red: {
          100: "#fee2e2",
          200: "#fecaca",
          300: "#FF7E84",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
        },
        yellow: {
          dark: "#ebae12",
          light: "#FFCF59",
        },
        orange: {
          main: "#FF7714",
          dark: "#FB6238",
        },
        blue: {
          light: "#d0e6f1",
          main: "#0166FF",
          darkBlue: "#525FE1",
          slateBlue: "#3D81C2",
          light: "#0166FF",
          text: "#5360E2",
        },
        violet: {
          300: "#B5B2E3",
          light: "#EFDEFF",
          main: "#4A3F81",
          dark: "#9747FF",
        },
        brick: "#F66843",
        green: {
          themegreen: "#009e82",
          light: "#E0F5E9",
          lime: "#A7CE4A",
          olive: "#AFB83B",
          garden: "#56D274",
          dark: "#1FAF38",
        },
        pink: {
          light: "#FFDCE5",
          pinkLight: "#feebee",
          hotPink: "#FF5FA8",
          darkPink: "#FF1850",
          900: "#F63955",
        },
        gray: {
          dark: "#808080",
          slate: "#92AAD0",
          8: "#dadfe3",
          7: "#c1c6cb",
          5: "#fafafa",
        },
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about":
          "radial-gradient(95.97% 57% at 49.68% 51.38%, rgba(36, 40, 50, 0.40) 0%, rgba(33, 35, 43, 0.04) 100%)",
        "crowdfunding":
          "radial-gradient(241.07% 73.37% at 49.68% 51.38%, #3a332b66 0%, #b4977811 100%)",
        "forDarkbg":
          "radial-gradient(241.07% 73.37% at 49.68% 51.38%, #1a1a1a66 0%, #4e443a11 100%)",
        "cause":
          "radial-gradient(138.18% 78.2% at 49.68% 51.38%, #0f0e0e66 0%, #3f2c1911 100%)",
        "trust":
          "radial-gradient(138.18% 78.2% at 49.68% 51.38%, #50172bcc 0%, #3f2c1911 100%)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        WhitneySemibold: ["Whitney Semibold", "sans-serif"],
        Whitney: ["Whitney", "sans-serif"],
        Arvo: ["Arvo", "serif"],
        WorkSans: ["Work Sans", "sans-serif"],
        QuickSand: ["QuickSand", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

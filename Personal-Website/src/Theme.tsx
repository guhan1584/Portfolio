import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC", // Primary color (used for buttons, links, and accent elements)
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    secondary: {
      50: "#F0FEEA",
      100: "#DAF7B8",
      200: "#C0EA80",
      300: "#A5DB4C",
      400: "#8ACC26",
      500: "#70B800", // Secondary color (used for cards, headers, and other prominent elements)
      600: "#5E9F00",
      700: "#4C8300",
      800: "#3A6600",
      900: "#1C3300",
    },
    accent: {
      50: "#F2EFFF",
      100: "#E6DAFF",
      200: "#CABDFF",
      300: "#AD9DFF",
      400: "#8D78FF",
      500: "#6B53FF", // Accent color (used for highlights and special elements)
      600: "#5B44CC",
      700: "#4A37A3",
      800: "#3A2A7A",
      900: "#2A1E52",
    },
    neutral: {
      50: "#F7F7F7",
      100: "#E1E1E1",
      200: "#CFCFCF",
      300: "#B1B1B1",
      400: "#9E9E9E",
      500: "#7E7E7E", // Neutral color (used for text and background elements)
      600: "#626262",
      700: "#515151",
      800: "#3B3B3B",
      900: "#222222",
    },
    background: {
      50: "#f7fafc", // Used for background elements
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923",
    },
  },
});

export default theme;

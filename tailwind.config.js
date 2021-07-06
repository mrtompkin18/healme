const colors = {
  primary: {
    DEFAULT: "#13d7cb",
    100: "#d0f7f5",
    200: "#a1efea",
    300: "#71e7e0",
    400: "#42dfd5",
    500: "#13d7cb",
    600: "#0faca2",
    700: "#0b817a",
    800: "#085651",
    900: "#042b29",
  },
  secondary: {
    DEFAULT: "#0272c1",
    100: "#cce3f3",
    200: "#9ac7e6",
    300: "#67aada",
    400: "#358ecd",
    500: "#0272c1",
    600: "#025b9a",
    700: "#014474",
    800: "#012e4d",
    900: "#001727",
  },
};
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      "anakotmai-light": ["anakotmai-light"],
      "anakotmai-medium": ["anakotmai-medium"],
      "anakotmai-bold": ["anakotmai-bold"],
      manrope: ["Manrope"],
      "manrope-light": ["Manrope-Light"],
      "manrope-medium": ["Manrope-Medium"],
      "manrope-bold": ["Manrope-Bold"],
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      ...colors,
    }),
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "raisin-black": "#2A2D34",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

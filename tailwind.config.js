module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "raisin-black": "#2A2D34",
        "carolina-blue": "#009DDC",
        "orange-pantone": "#F25430",
        "dark-blue-grey": "#6761A8",
        "desaturated-blue": "#292743",
        "green-cyan": "#009B72",
        slate: "#8892b0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

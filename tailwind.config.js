module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./slices/**/*.js",
    "./slices/**/*.jsx",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./slices/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

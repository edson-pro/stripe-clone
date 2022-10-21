/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Stripe", "arial"],
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "940px" },
        sm: { max: "640px" },
        xs: { max: "470px" },
      },
      colors: {
        primary: "#635bff",
        dark: "#0a2540",
        secondary: "#7933ff",
      },
      rotate: {
        4: "4deg",
      },
    },
  },
  plugins: [],
};

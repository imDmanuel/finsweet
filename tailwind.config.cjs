/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "5rem",
        md: "5rem",
        lg: "8rem",
      },
    },
    extend: {
      colors: {
        black: "rgb(var(--color-black) / 1)",
        primary: "rgb(var(--color-primary) / 1)",
        secondary: "rgb(var(--color-secondary))",
        mint: "rgb(var(--color-mint) / 1)",
        steelgrey: "rgb(var(--color-steelgrey))",
        lightgrey: "rgb(var(--color-lightgrey))",
        // white: "rgb(var(var(--color-white))",
      },
    },
  },
  plugins: [],
};

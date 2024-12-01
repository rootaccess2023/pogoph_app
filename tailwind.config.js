/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mapsMenu: {
          primary: "#478eec",
          tertiary: "#70757a",
          shadow: "#f7f8f8",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        product: ["Product Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

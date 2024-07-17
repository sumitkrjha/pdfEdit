/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepblue: "#151C46",
        lightblue: "#00AEEF",
      },
      boxShadow: {
        box: "8px 8px 0px 0px #151C46",
        whiteBox: "8px 8px 0px 0px #FFFFFF",
      },
    },
  },
  plugins: [],
};

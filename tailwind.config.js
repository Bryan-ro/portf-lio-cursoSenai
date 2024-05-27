/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway": ["Raleway", "sans-serif"],
      },
      colors: {
        "primary": "#19191a",
        "secundary": "#c7c7c7"
      },
      backgroundImage: {
        hero: "url(/background.png);"
      }
    },
  },
  plugins: [],
};


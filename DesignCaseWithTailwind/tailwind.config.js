/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "worldMap": "url('./src/assets/images/web-chart.png')",
        "worldPoints": "url('./src/assets/images/ellipses.png')"
      },
    },
    plugins: [],

  }
}
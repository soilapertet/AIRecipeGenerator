/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // https://coolors.co/f7f0f5-decbb7-8f857d-5c5552-151515
  theme: {
    colors : {
      'header': "#588B8B",
      'background': "#dffffd",
      'font-color': "#f7f0f5",
    },
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '36rem',
      },
      colors: {
        "myOrange": '#fab82c',
        'myPurple': '#b686fe',
        'myBlack': '#141414',
        'myYellow': '#FFF2DC'

      },
    },
  },
  plugins: [],
}


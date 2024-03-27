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
        'myYellow': '#FFF2DC',
        'myPink': '#E892F4',
        'myDarkPurple': '#9076FE',
        'myGreen': '#6BF292' ,
        'myBlue': '#5DB8FF' ,
        'myRed': '#FF6B6B' ,
        'myTurquoise': '#00F5FF',
        'myGold': '#FFD700',
        'mySilver': '#C0C0C0' ,
        'myMagenta': '#FF00FF' ,
        'myCyan': '#00FFFF' ,
      },
    },
  },
  plugins: [],
}


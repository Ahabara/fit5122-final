/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "36rem",
      },
      colors: {
        myOrange: "#fab82c",
        myPurple: "#b686fe",
        myBlack: "#141414",
        myYellow: "#FFF2DC",
        myPink: "#E892F4",
        myDarkPurple: "#9076FE",
        myGreen: "#6BF292",
        myBlue: "#5DB8FF",
        myRed: "#FF6B6B",
        myTurquoise: "#00F5FF",
        myGold: "#FFD700",
        mySilver: "#C0C0C0",
        myMagenta: "#FF00FF",
        myCyan: "#00FFFF",
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: [],
  },
};

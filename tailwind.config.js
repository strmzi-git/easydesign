/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "336px",
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      transitionProperty: {
        box: "height opacity",
        height: "height",
        width: "width",
        size: "width height",
      },
      boxShadow: {
        "recommended-pricing": " 4px 4px 15px 2px rgba(0, 156, 255, 0.52)",
        "normal-pricing": " 1px 1px 15px 1px rgba(0, 0, 0, 0.13)",
        "button-shadow": "-1px 15px 15px -10.5px #A56FFC",
        pricingShadow: "0px 4px 15px 0px rgba(0,0,0,0.2)",
        pricingShadow2: "0px 4px 25px 0px rgba(0,0,0,0.3)",
      },
      colors: {
        primary1: "#009cff",
        primary2: "#A56FFC",
        primary3: "#94ccff",
        primaryText: "#343E3A",
        blueCircle: "#009cff",
        redCircle: "#A56FFC",
        gray900: "#002D49",
        gray700: "#293C7D",
        gray500: "#455899",
        gray300: "#6071AD",
        gray100: "#A1B0E4",
        bluePrimary3: "#007CCB",
        accent2: "#F7C547",
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(88deg, #9296F6 0%, #4CBAFF 100%);",
        "line-gradient-horizontal":
          "linear-gradient(180deg, rgba(243, 243, 243, 0.47) 0%, rgba(255, 255, 255, 0.00) 100%);",
        "line-gradient-vertical":
          "linear-gradient(180deg, rgba(243, 243, 243, 0.47) 0%, rgba(255, 255, 255, 0.00) 100%);",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": [
          // "linear-gradient(to right top, #bae7ff, #b6e1fc, #b2dcf9, #aed6f5, #abd0f2, #a8cbef, #a6c5eb, #a4c0e8, #a2bae4, #a1b4df, #9faeda, #9ea8d5);",
          "linear-gradient(to right top, #007bff, #0087ff, #0092ff, #009cff, #00a6ff, #00a6ff, #00a6ff, #00a6ff, #009cff, #0092ff, #0087ff, #007bff);",
          // "linear-gradient(to right top, #f1b6ff, #e5b4ff, #d9b2ff, #ccb0ff, #beaeff, #b1adff, #a4abff, #95aafe, #84a8fd, #70a7fb, #5aa5f9, #3ca3f6);",
          // "linear-gradient(to left top, #e1bcff, #d2bfff, #c2c2ff, #b4c5ff, #a7c7ff, #a7c7ff, #a7c7ff, #a7c7ff, #b4c5ff, #c2c2ff, #d2bfff, #e1bcff)",
        ],
      },
    },
  },
  plugins: [],
};

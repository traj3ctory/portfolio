/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8936FF",
          50: "#f6efff",
          100: "#ecd9ff",
          200: "#d6b0ff",
          300: "#c086ff",
          400: "#aa5dff",
          500: "#9433ff",
          600: "#7a17e6",
          700: "#5d11ad",
          800: "#400b74",
          900: "#24053b",
        },
        secondary: "#2EC6FE",
        base: "#ffffff",
      },
    },
  },
  plugins: [forms, typography],
};

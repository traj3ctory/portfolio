/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "var(--color-brand-primary)",
        "brand-secondary": "var(--color-brand-secondary)",
        "brand-accent": "var(--color-brand-accent)",
        "brand-surface": "var(--color-brand-surface)",
        "brand-text": "var(--color-brand-text)",
        "brand-text-muted": "var(--color-brand-text-muted)",
      },
    },
  },
  plugins: [forms, typography],
};

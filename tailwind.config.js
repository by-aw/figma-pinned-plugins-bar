/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        secondaryHover: "var(--secondary-hover)",
        background: "var(--background)",
        text: "var(--text)",
        devMode: "var(--dev-mode)",
        devModeHover: "var(--dev-mode-hover)",
      },
    },
  },
  plugins: [],
};

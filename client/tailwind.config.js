/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-b": "#583DF0",
        "light-dark": "#171414",
        "primary-g": "#ADEBAD",
      },
      boxShadow: {
        custom: "0 20px 30px 10px rgba(88,61,240,0.25)",
      },
    },
  },
  plugins: [],
};

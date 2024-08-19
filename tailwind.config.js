/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xlg": "1440px",
      },
      scale: {
        "60": "0.65",
        "85": "0.85"
      }
    },
  },
  plugins: [],
};

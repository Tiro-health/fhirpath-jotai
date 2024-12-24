/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-once": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) 1s",
        "wiggle-once": "wiggle 1s ease-in-out 1s",
      },
    },
  },
  plugins: [],
};

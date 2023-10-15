/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "orange-100": "#FFEFDA",
        "orange-200": "#FFCF8C",
        "orange-400": "#FF9B50",
        "orange-600": "#E25E3E",
        "orange-700": "#CB583C",
        "orange-800": "#7A4040",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 10px 20px rgba(52, 64, 84, 0.03)",
      },
      lineHeight: {
        hero: "5rem",
      },
      fontSize: {
        hero: "4rem",
        "heading-4": "2rem",
        "heading-3": "2.5rem",
        "body-lg": "1.125rem",
      },
      backgroundImage: {
        "gradient-1": "url('/images/gradient-1.png')",
        "gradient-2": "url('/images/gradient-2.png')",
      },
      fontFamily: {
        heading: ["var(--satoshi-font)", "sans-serif"],
        body: ["var(--general-sans-font)", "sans-serif"],
      },
      colors: {
        primary: "#F1592A",
        secondary: "#011627",
        accent: "#4B5565",
        "accent-2": "#F9FBFC",
        grey: "#F9FBFC",
        orangePrimary: "#F86E44",
      },
      spacing: {
        "120px": "120px",
      },
      screens: {
        xs: "300px",
        ss: "420px",
      },
    },
  },
  plugins: [],
};

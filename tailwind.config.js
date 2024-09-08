/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          titilliumWeb: ['"titillium-web"', "sans-serif"],
        },
      },
      colors: {
        background: "var(--background)", // Dynamic background color
        foreground: "var(--foreground)", // Dynamic text color
      },
    },
  },
  plugins: [],
};

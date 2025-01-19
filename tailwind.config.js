/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        butterfly: "url('/src/imgs/butterfly.webp')",
      },
    },
  },
  plugins: [],
};

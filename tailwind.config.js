/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    theme: ["light", "cupcake"],
  },
  plugins: [require("daisyui")],
};

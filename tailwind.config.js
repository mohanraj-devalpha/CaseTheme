/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        jump: "jump 1.5s infinite ease-in-out",
      },
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" }, // Adjust intensity
        },
      },
    },
  },
  plugins: [],
}


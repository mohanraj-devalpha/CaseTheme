/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      

      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(34, 106, 203, 0.88), rgba(27, 155, 209, 0.88))',
      },
      screens: {
        nav: "1259px",
        stat: "990px",
        stat1:"1286px",
        BlogHS: "22px",


      },
      colors: {
        primaryYellow: "#EFB945", // Custom color
        BlogH: "#443f45",
        BlogP: "#828282",
      },
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


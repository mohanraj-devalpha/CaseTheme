/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        slide: 'slide 30s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      

      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(34, 106, 203, 0.88), rgba(27, 155, 209, 0.88))',
        'blue-linear': 'linear-gradient(to right, #226acb, #1b9bd1)',
        

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
        navclr: "#092a48",
      },
      animation: {
        grow: 'grow 2s ease-out forwards',
        slide: 'slide 2s ease-out forwards',
        jump: "jump 1.5s infinite ease-in-out",
      },
      keyframes: {
        grow: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--grow-width)' },
        },
        slide: {
          '0%': { left: '0%' },
          '100%': { left: 'var(--grow-left)' },
        },
        jump: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" }, // Adjust intensity
        },
      },
    },
  },
  plugins: [],
}


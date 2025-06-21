/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        slideTop: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
      animation: {
        slideRight: 'slideRight 1s ease forwards',
        slideTop: 'slideTop .5s ease forwards',
      },
    },
  },
  plugins: [],
}


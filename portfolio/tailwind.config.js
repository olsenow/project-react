
module.exports = {

  theme: {
    extend: {
      keyframes: {
        flap: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(-60deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
      },
      animation: {
        flap: 'flap 350ms ease-in-out forwards',
      },
      perspective: {
    
      },
    },
  },
  plugins: [],
};
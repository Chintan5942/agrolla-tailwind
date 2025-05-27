// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        growUp: 'growUp 2s ease-in-out forwards',
      },
      keyframes: {
        growUp: {
          '0%': { transform: 'scaleY(0)', opacity: 0 },
          '100%': { transform: 'scaleY(1)', opacity: 1 },
        },
      },
    },
  },
};

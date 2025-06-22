const { colors } = require("@mui/material");

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Esto le dice a Tailwind que busque clases en tus archivos de React
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Gentium Plus', 'sans-serif'],
      },
      colors: {
        memorium: '#2f5496', // Color personalizado para el fondo de la sección Home
        'memorium-light': '#3b6ab0', // Color más claro para hover o efectos secundarios
      },
      // Definición de animaciones (Opcional: solo si quieres usar animate-fade-in, animate-fade-in-up)
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
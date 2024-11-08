/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'primary': '#F97316',
    },
        backgroundImage: {
        'bg-primary': 'linear-gradient(to right, #F97316, #9A3412)', 
      },
    },
  },
   variants: {
    extend: {
      backgroundImage: ['hover'],
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1110px',
    },
    container: {
      screens: {
        tablet: '768px',
        desktop: '1110px',
      },
    },
    extend: {
      colors: {
        'pr-cyan': '#66E2DC',
        'pr-orange': '#FA7453',
        'pr-yellow': '#FFB964',
        'sr-white': '#FCFAF9',
        'sr-black': '#191826',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chili: {
          50: '#fef2f0',
          100: '#fde0dc',
          200: '#fbc5bc',
          300: '#f79c8f',
          400: '#f06b59',
          500: '#e44330',
          600: '#c0392b',
          700: '#a12d22',
          800: '#852820',
          900: '#6e2520',
          950: '#3c0f0d',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#d4a017',
          500: '#b8860b',
          600: '#956909',
          700: '#7a5309',
          800: '#66440d',
          900: '#523610',
        },
        cream: {
          50: '#fdfaf4',
          100: '#faf5e8',
          200: '#f5ead0',
          300: '#edd9ae',
          400: '#e3c27f',
          500: '#d4a055',
          600: '#c07c32',
          700: '#a06328',
          800: '#835024',
          900: '#6b4221',
        },
        bark: {
          50: '#f9f5f0',
          100: '#f0e8dc',
          200: '#e2d0b8',
          300: '#cfb28e',
          400: '#ba8e63',
          500: '#a97445',
          600: '#8e5e38',
          700: '#734b2e',
          800: '#5f3e28',
          900: '#4e3423',
          950: '#2c1a10',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

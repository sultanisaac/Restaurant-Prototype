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
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'slide-up':   'slideUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in':   'scaleIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
        'shimmer':    'shimmer 3s ease-in-out infinite',
        'bounce-slow':'bounceSlow 2.4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%':   { left: '-100%' },
          '60%':  { left: '150%' },
          '100%': { left: '150%' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,160,23,0.3)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(212,160,23,0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-chili': '0 0 24px rgba(192,57,43,0.25)',
        'glow-gold':  '0 0 24px rgba(212,160,23,0.25)',
        'premium':    '0 4px 32px rgba(44,26,16,0.12)',
        'card':       '0 2px 16px rgba(44,26,16,0.08)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#eefcf1',
          100: '#d5f7dc',
          200: '#aeedbd',
          300: '#7bdf95',
          400: '#4cd06f',
          500: '#2ec440',
          600: '#20a736',
          700: '#1a842e',
          800: '#176827',
          900: '#145522',
          950: '#0a3011',
        },
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      keyframes: {
        flyRight: {
          '0%': { transform: 'translate(-100vw, 50vh) rotate(15deg) scale(0.8)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translate(100vw, -20vh) rotate(15deg) scale(1)', opacity: '0' },
        },
        flyLeft: {
          '0%': { transform: 'translate(100vw, 40vh) rotate(-15deg) scale(0.6)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translate(-100vw, -10vh) rotate(-15deg) scale(0.8)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fly-right': 'flyRight 25s linear infinite',
        'fly-left': 'flyLeft 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

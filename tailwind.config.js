/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#292524',
        coal: '#302a26',
        orange: {
          DEFAULT: '#c2410c',
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          600: '#c2410c',
          700: '#9a3412'
        },
        mist: '#f8f9f7',
        mint: '#e7f3eb',
        slate: {
          50: '#fcfcfa',
          100: '#f5f6f3',
          200: '#e9ebe7',
          300: '#d9dcd7',
          400: '#a6aaa3',
          500: '#6e736a',
          600: '#555a51',
          700: '#43473f',
          800: '#292b27',
          900: '#1c1e1a'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 50px rgba(37, 42, 49, .09)',
        card: '0 8px 28px rgba(37, 42, 49, .07)'
      }
    }
  },
  plugins: []
};

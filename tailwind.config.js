/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12233f',
        navy: '#132c50',
        blue: '#2867d8',
        mist: '#f3f6fb',
        mint: '#d9f5e8'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 50px rgba(20, 42, 76, .08)',
        card: '0 8px 28px rgba(20, 42, 76, .06)'
      }
    }
  },
  plugins: []
};

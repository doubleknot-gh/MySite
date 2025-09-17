/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lionsBlue: '#005bac',
        lionsYellow: '#ffc629'
      }
    }
  },
  plugins: []
};

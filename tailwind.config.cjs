/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(-3px, -50%)' },
          '50%': { transform: 'translate(0, -50%)' },
        },
      },
      animation: {
        wiggle: 'wiggle .75s ease-in-out infinite',
      }
    },
    fontFamily: {
      'mirage': ['Josefin Sans', 'sans-serif'],
      'circular': ['Circular Std', 'sans-serif'],
      'proxima': ['Proxima Nova', 'sans-serif']
    },
    colors: {
      'white': '#fff',
      'pink': '#F087B1',
      'pinky': '#F78CB6',
      'light-pink': '#FFF1F9',
      'violet': '#56597A',
      'secondary': '#AAAAAB',
      'descr': '#919299',
      'black': '#000',
      'yellow': '#e7b664',
    }
  },
  plugins: [],
}

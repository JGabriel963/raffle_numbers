/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'primary-color': '#7336ff',
      'secondary-color': '#343439',
      'black': '#000',
      'white': "#fff",
      'red': "#dc2626",
      'body-color': '#121214'
    },
    fontFamily: {
      'poppins': "Poppins",
    }
  },
  plugins: [],
}


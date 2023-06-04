/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        DEFAULT: '100%',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1290px'
      }
    },
    extend: {
      colors: {
        'white': '#FAF9F6',
        'black': '#212121'
      },
      animation: {
        fadeDown: 'fadeDown .5s 1',
      }
    },
  },
  plugins: [],
}


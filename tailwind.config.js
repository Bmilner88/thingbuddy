/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-100': '#2E3829',
        'base-200': '#5F6B54',
        'base-300': '#A2B286',
      }
    },
  },
  plugins: [],
}


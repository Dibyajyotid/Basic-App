/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bluey': 'linear-gradient(to right, #22d3ee, #1d4ed8)',
      }
    },
  },
  plugins: [
    daisyui
  ],
}
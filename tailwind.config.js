import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      card1: '#FFE3E3', 
      card2: '#BCF2F6',
      card3: '#DEF9C4',
      card4: '#C7FFD8',
    },},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"],
  },
}


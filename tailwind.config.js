/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDD0',
        softpink: '#FFD1DC',
        gold: '#D4AF37',
      },
      fontFamily: {
        // We will rely on default fonts but suggest a serif for elegance if available
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}

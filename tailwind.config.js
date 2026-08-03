/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#0B1E36',
          mid: '#162A45',
          light: '#213959',
        },
        emerald: {
          DEFAULT: '#00B887',
          hover: '#009E73',
          light: '#E6F8F3',
        },
        amber: {
          DEFAULT: '#FF9F1C',
          light: '#FFF7ED',
        }
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-jakarta)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

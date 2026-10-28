/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mel:     '#F5C518',
        polen:   '#E8A900',
        cera:    '#FFF3B0',
        colmeia: '#1A1A1A',
        abelha:  '#2C2C2C',
        favo:    '#3A3A3A',
      },
      fontFamily: {
        titulo: ['var(--font-space-grotesk)', 'sans-serif'],
        corpo:  ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

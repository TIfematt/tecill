/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#140F78',
        'secondary': '#DDEAEE',
        'heading': '#242527',
        'text': '#141418CC'
      },
      fontFamily: {
        poppings: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '1px 3px 2px 2px rgba(37, 33, 40, 0.25);',
        pCard: '2px 0px 30px 0px rgba(110, 117, 136, 0.08);'
      },
      spacing: {
        'large': '5rem',
        'medium': '3.75rem',
        'small': '2.5rem',
      }
    },
  },
  plugins: [],
}

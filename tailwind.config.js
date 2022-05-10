module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend tailwind defaults - overwritten only if using the same name
    extend: {
      screens: {
        'xs': '540px',
      },
      boxShadow: {
        'light': '0 0 2px 2px',
        'clay': '1px 2px 7px -5px #1F2933, inset 0 0 4px 1px #5ED0FA',
        'pressed': 'inset 0 0 5px 2px #E3F8FFAA'
      },
      colors: {
        'slate': {
          50: '#F5F7FA',
          100: '#E4E7EB',
          200: '#CBD2D9',
          300: '#9AA5B1',
          400: '#7B8794',
          500: '#616E7C',
          600: '#52606D',
          700: '#3E4C59',
          800: '#323F4B',
          900: '#1F2933',
        },
        'sky': {
          50: '#E3F8FF',
          100: '#B3ECFF',
          200: '#81DEFD',
          300: '#5ED0FA',
          400: '#40C3F7',
          500: '#2BB0ED',
          600: '#1992D4',
          700: '#127FBF',
          800: '#0B69A3',
          900: '#035388',
        },
      },
    },
    // override tailwind defaults here
  },
  plugins: [],
}
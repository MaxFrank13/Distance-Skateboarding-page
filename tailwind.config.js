module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '540px',
      }
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
  plugins: [],
}
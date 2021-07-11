// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      pink: colors.pink,
      yellow: colors.amber, // デフォルトでなければcolors.~~で設定する。使用側は他と同様bg-yellow, bg-yellow-300
      teal: {
        light: '#6ccccc', // 使用するときは、bg-pink-light
        DEFAULT: '#6bc3c4', // 使用するときは、bg-pink
        dark: '#4e8e8d', // 使用するときは、bg-pink-dark
      },
    },
    backgroundImage: () => ({
      hero: "url('../public/hero.png')",
      about: "url('../public/bg-about.png')",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

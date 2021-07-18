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
        light: '#e2f3f1', // 使用するときは、bg-pink-light
        DEFAULT: '#8ed8cd', // 使用するときは、bg-pink
        dark: '#3ac3bd', // 使用するときは、bg-pink-dark
      },
      navy: {
        DEFAULT: '#30345f',
      },
    },
    extend: {
      inset: {
        '9/10': '90%',
      },
    },
    backgroundImage: () => ({
      hero: "url('../public/hero.png')",
      about: "url('../public/bg-about.png')",
      skillsSp: "url('../public/bg-skills-sp.png')",
      skills: "url('../public/bg-skills.png')",
      futureSp: "url('../public/bg-future-sp.png')",
      future: "url('../public/bg-future.png')",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

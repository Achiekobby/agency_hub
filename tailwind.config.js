/** @type {import('tailwindcss').Config} */

const brand_navy = {
  DEFAULT: '#003B5C',
  50: '#E6EEF3',
  100: '#CCDDE7',
  200: '#99BBCF',
  300: '#6699B7',
  400: '#33779F',
  450: '#0E4F72',
  500: '#003B5C',
  600: '#002F4A',
  700: '#002337',
  800: '#001825',
  900: '#000C12',
};

const brand_orange = {
  DEFAULT: '#F36C21',
  50: '#FEF3EC',
  100: '#FDE4D4',
  200: '#FBC9A9',
  300: '#F8A774',
  400: '#F58542',
  500: '#F36C21',
  600: '#C3561A',
  700: '#924112',
  800: '#622B0D',
  900: '#311606',
};

const brand_teal = {
  DEFAULT: '#0796B2',
  50: '#E6F5F8',
  100: '#CCEBF1',
  200: '#99D7E3',
  300: '#66C3D5',
  400: '#33AFC7',
  500: '#0796B2',
  600: '#06788E',
  700: '#045A6B',
  800: '#033C47',
  900: '#021E24',
};

const brand_cyan = {
  DEFAULT: '#0BA9C1',
  50: '#E7F7FA',
  100: '#CFEFF5',
  200: '#9FDFEB',
  300: '#6FCFE1',
  400: '#3FBFD7',
  500: '#0BA9C1',
  600: '#09879A',
  700: '#076574',
  800: '#05444D',
  900: '#022227',
};

const brand_cream = {
  DEFAULT: '#E8F6F8',
  50: '#FFFFFF',
  100: '#F7FCFD',
  200: '#F0F9FB',
  300: '#E8F6F8',
  400: '#D4EEF2',
  500: '#E8F6F8',
  600: '#B5DCE4',
  700: '#82C0CD',
  800: '#4F9AAB',
  900: '#2A6573',
};

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand_navy,
        brand_orange,
        brand_teal,
        brand_cyan,
        brand_white: '#FFFFFF',
        brand_gold: brand_cyan,
        brand_cream,
        brand_red: brand_teal,
        smart_blue: brand_orange,
        sapphire: brand_teal,
        regal_navy: brand_navy,
        prussian_blue: brand_navy,
        slate_grey: {
          DEFAULT: '#5C6773',
          50: '#F4F6F7',
          100: '#E8EBED',
          200: '#D1D6DB',
          300: '#B3BBC2',
          400: '#88939E',
          500: '#5C6773',
          600: '#4A5460',
          700: '#394049',
          800: '#272C32',
          900: '#16191C',
        },
      },
    },
  },
  plugins: [],
};

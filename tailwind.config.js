/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'default': '#252746',
        'lightPurple': '#B79CED',
        'backgroundComponets': '#191B33',
        'bgScore': '#4B4D85',
      },
      fontFamily: {
        'Outfit': 'Outfit'
      },
      fontSize: {
        'text-size': '7.3125rem'
      }
    },
  },
  plugins: [],
};


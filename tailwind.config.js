/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'black' : 'black',
      'darkTheme' : '#101010',
      'nice-purple' : '#9302FC',
      'nice-green' : '#6AFC02',
      'nice-red-1' : '#F50253',
      'aquamarine' : 'aquamarine',
      'nice-aquamarine' : '#00e3bb',
      'sky-blue' : 'skyblue',
      'nice-sky-blue' : '#15dad3',
      'grey-100' : '#BDBDBD',
      'transparent' : 'rgba(0,0,0,0)',
      'white' : '#fff'
    }
  },
  plugins: [],
};

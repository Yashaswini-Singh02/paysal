/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        'purple': '#511281',
        'mint-green': '#A084DC'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};

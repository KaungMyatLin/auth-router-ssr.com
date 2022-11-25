// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   prefix: '',
//   important: true,
//   content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   darkMode: 'class',
// };

mode.export = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/section/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  darkMode: 'class',
}
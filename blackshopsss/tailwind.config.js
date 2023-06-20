/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '30': 'repeat(auto-fit, minmax(0, calc(33.33% - 20px)))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }

    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
    }
  },
  plugins: [],
}


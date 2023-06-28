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
    screens: {
      'tablet': '0px',
      // => @media (min-width: 640px) { ... }

      'laptop': '640px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1280px) { ... }
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


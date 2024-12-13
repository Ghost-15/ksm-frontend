/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
          {
            w: (value) => ({
              '--base-width': value,
            }),
            h: (value) => ({
              '--base-height': value,
            }),
            'expand-x': (value) => ({
              width: `calc(var(--base-width) + ${value})`,
              marginLeft: `calc(-1 * ${value} / 2)`,
              marginRight: `calc(-1 * ${value} / 2)`,
            }),

            'expand-y': (value) => ({
              height: `calc(var(--base-height) + ${value})`,
              marginTop: `calc(-${value} / 2)`,
              marginBottom: `calc(-${value} / 2)`,
            }),
          },
          { values: theme('spacing') },
      )
    },
  ],
}
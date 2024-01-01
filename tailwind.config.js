/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '2xs': '320px', // Adding a 2xs breakpoint for 320px
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color-custom)',
          dark: '#E6343B',
        },
        secondary: {
          DEFAULT: '#0079BF',
          dark: '#055A8C',
        },
        neutral: {
          DEFAULT: '#F2F2F2',
          dark: '#4D4D4D',
        },
      },
    },
  },
  plugins: [],
}

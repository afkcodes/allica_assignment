/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          hover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
          active: 'rgb(var(--color-primary-active) / <alpha-value>)',
        },
        secondary: {
          hover: 'rgb(var(--color-secondary-hover) / <alpha-value>)',
          active: 'rgb(var(--color-secondary-active) / <alpha-value>)',
        },
        accent: {
          'disabled-bg': 'rgb(var(--color-accent-diabled-bg) / <alpha-value>)',
          'disabled-fg': 'rgb(var(--color-accent-diabled-fg) / <alpha-value>)',
        },
      },
    },
    screens: {
      sm: '0px',
      md: '600px',
      lg: '905px',
    },
  },
  plugins: [],
};

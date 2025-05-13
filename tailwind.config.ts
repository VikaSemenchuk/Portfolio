
import type { Config } from 'tailwindcss';

const config : Config ={
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

    },
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        header: 'var(--header)',
        footer: 'var(--footer)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
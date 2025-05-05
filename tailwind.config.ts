
import type { Config } from 'tailwindcss';

const config : Config ={
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        header: 'var(--header)',
        footer: 'var(--footer)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
};

export default config;
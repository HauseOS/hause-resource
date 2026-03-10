import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#0a0908',
        surface:   '#100e0c',
        card:      '#161210',
        'card-2':  '#1b1714',
        fg:        '#ede8e3',
        muted:     '#7a7470',
        'muted-2': '#4a4644',
        border:    'rgba(255,240,220,0.07)',
        'border-h':'rgba(255,240,220,0.14)',
        brand:     '#ff4e64',
        'brand-h': '#ff6b7d',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow:    '0 0 24px rgba(255,78,100,0.15)',
        'card-h':'0 6px 24px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};

export default config;

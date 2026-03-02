import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        foreground: 'var(--foreground)',
        'foreground-muted': 'var(--foreground-muted)',
        border: 'var(--border)',
        'border-hover': 'var(--border-hover)',
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'primary-active': 'var(--primary-active)',
        'primary-glow': 'var(--primary-glow)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 78, 100, 0.2)',
        'glow-lg': '0 0 40px rgba(255, 78, 100, 0.3)',
        card: '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 10px 30px rgba(255, 78, 100, 0.15)',
      },
      backdropBlur: {
        sm: '4px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

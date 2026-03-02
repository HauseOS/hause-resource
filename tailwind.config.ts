import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0908',
        surface: '#0f0d0c',
        'surface-hover': '#14120f',
        foreground: '#ede8e3',
        'foreground-muted': '#6b6460',
        'foreground-dim': 'rgba(237, 232, 227, 0.65)',
        'foreground-dimmer': 'rgba(237, 232, 227, 0.32)',
        primary: '#ff4e64',
        'primary-hover': '#ff6b7d',
        'primary-active': '#ff3a4f',
        'primary-glow': 'rgba(255, 78, 100, 0.2)',
        'primary-glow-lg': 'rgba(255, 78, 100, 0.3)',
        border: 'rgba(255, 240, 220, 0.08)',
        'border-hover': 'rgba(255, 240, 220, 0.15)',
        'border-focus': 'rgba(255, 78, 100, 0.4)',
      },
      fontFamily: {
        display: [
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        sans: [
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.5rem' }],
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 78, 100, 0.2)',
        'glow-md': '0 0 30px rgba(255, 78, 100, 0.25)',
        'glow-lg': '0 0 40px rgba(255, 78, 100, 0.3)',
        card: '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 10px 30px rgba(255, 78, 100, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      transitionDuration: {
        fast: '120ms',
        normal: '200ms',
        slow: '300ms',
      },
    },
  },
  plugins: [],
};

export default config;

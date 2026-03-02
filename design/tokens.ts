/**
 * Design Tokens for HauseResource
 * Inspired by hause.vercel.app design system
 */

export const colors = {
  // Base colors
  background: '#0a0908',
  surface: '#0f0d0c',
  surfaceHover: '#14120f',

  // Foreground colors (text)
  foreground: '#ede8e3',
  foregroundMuted: '#6b6460',
  foregroundDim: 'rgba(237, 232, 227, 0.65)',
  foregroundDimmer: 'rgba(237, 232, 227, 0.32)',

  // Brand colors
  primary: '#ff4e64',
  primaryHover: '#ff6b7d',
  primaryActive: '#ff3a4f',
  primaryGlow: 'rgba(255, 78, 100, 0.2)',
  primaryGlowLg: 'rgba(255, 78, 100, 0.3)',

  // Border colors
  border: 'rgba(255, 240, 220, 0.08)',
  borderHover: 'rgba(255, 240, 220, 0.15)',
  borderFocus: 'rgba(255, 78, 100, 0.4)',

  // Semantic
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

export const typography = {
  fontFamily: {
    display: 'system-ui, -apple-system, sans-serif', // Boska equivalent (serif)
    sans: 'system-ui, -apple-system, sans-serif',
    mono: 'Monaco, Courier New, monospace',
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
  },
};

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
};

export const borderRadius = {
  none: '0',
  sm: '0.375rem',
  base: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  full: '9999px',
};

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  // Glow shadows
  glow: '0 0 20px rgba(255, 78, 100, 0.2)',
  glowMd: '0 0 30px rgba(255, 78, 100, 0.25)',
  glowLg: '0 0 40px rgba(255, 78, 100, 0.3)',
};

export const transitions = {
  fast: '0.12s cubic-bezier(0.34, 1.56, 0.64, 1)',
  normal: '0.2s ease',
  slow: '0.3s ease',
};

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7B1C2C',
          dark: '#560F1C',
          light: '#9D3040',
        },
        accent: {
          DEFAULT: '#C9922A',
          light: '#E8B84B',
          pale: '#F5E4B8',
        },
        site: {
          bg: '#FDF6EC',
          surface: '#F5EDD9',
          'surface-dark': '#EDE0C4',
          text: '#1A1A1A',
          'text-muted': '#6B6258',
          'text-light': '#A09488',
          white: '#FFFDF8',
          border: '#D4BF99',
          'dark-band': '#2A0A10',
          'dark-surface': '#3D1018',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        devanagari: ['var(--font-devanagari)', 'serif'],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      maxWidth: {
        container: '1240px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        bob: 'bob 1.5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        'fade-up': 'fade-up 0.5s ease forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

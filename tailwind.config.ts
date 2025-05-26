import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      padding: {
        '30': '7.5rem',
      },
      margin: {
        '17.5': '4.375rem',
      },
      fontSize: {
        '48': '48px',
        '24': '24px',
        '18': '18px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-48': {
          'font-size': '48px',
        },
        '.text-24': {
          'font-size': '24px',
        },
        '.text-18': {
          'font-size': '18px',
        },
      });
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        '.text-main-title': {
          'font-size': '48px',
          'font-weight': '400',
          'line-height': '1.5',
          'letter-spacing': '-0.72px',
        },
        '.text-card-title': {
          'font-size': '24px',
          'font-weight': '700',
          'line-height': '1.5',
          'letter-spacing': '-0.36px',
        },
        '.text-card-description': {
          'font-size': '24px',
          'font-weight': '400',
          'line-height': '1.5',
          'letter-spacing': '-0.36px',
        },
        '.text-card-button': {
          'font-size': '18px',
          'font-weight': '400',
          'line-height': '1.5',
          'letter-spacing': '-0.36px',
          color: '#18a0fb',
        },
      });
    }),
  ],
};

export default config;

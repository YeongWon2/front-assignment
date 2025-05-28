import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        divider: 'rgba(255, 255, 255, 0.5)',
        'validation-success': '#00C300',
        'validation-error': '#FF6633',
        'news-card': '#d9d9d9',
      },
      gap: {
        '1.25': '0.3125rem', // 5px
      },
      borderRadius: {
        '1.25': '0.3125rem', // 5px
        '2.5': '0.625rem', // 10px
        '6.25': '1.5625rem', // 25px
      },
      padding: {
        '1.25': '0.3125rem', // 5px
        '3.75': '0.9375rem', // 15px
        '30': '7.5rem', //120px
      },
      margin: {
        '5.75': '1.4375rem', // 23px
        '15': '3.75rem', // 60px
        '17': '4.25rem', // 68px
        '17.5': '4.375rem', // 70px
        '23.75': '5.9375rem', // 95px
        '27.5': '6.875rem', // 110px
        '30': '7.5rem', // 120px
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
        '.scroll-none': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
        },
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
        '.text-background-title': {
          'font-size': '24px',
          'font-weight': '700',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': '1.5',
          'letter-spacing': '-0.36px',
          color: '#ffffff',
        },
        '.text-background-description': {
          'font-size': '18px',
          'font-weight': 'normal',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': '1.67',
          'letter-spacing': '-0.27px',
          color: 'rgba(255, 255, 255, 0.8)',
        },
        '.text-background-sub-description': {
          'font-size': '14px',
          'font-weight': 'normal',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': '1.57',
          'letter-spacing': '-0.21px',
          color: 'rgba(255, 255, 255, 0.6)',
        },
        '.text-background-news-title': {
          'font-size': '16px',
          'font-weight': 'bold',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': 'normal',
          'letter-spacing': '-0.24px',
          color: '#ffffff',
        },
        '.text-email-input': {
          'font-size': '16px',
          'font-weight': 'normal',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': 'normal',
          'letter-spacing': '-0.24px',
          color: '#ffffff',
        },
        '.text-filter-country': {
          'font-size': '16px',
          'font-weight': 'normal',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': 'normal',
          'letter-spacing': '-0.24px',
        },
        '.text-filter-wordcount': {
          'font-size': '14px',
          'font-weight': 'normal',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': 'normal',
          'letter-spacing': '-0.21px',
        },
        '.text-news-title': {
          'font-size': '16px',
          'font-weight': 'bold',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': 'normal',
          'letter-spacing': '-0.24px',
          color: '#000',
        },
        '.text-news-wordcount': {
          'font-size': '16px',
          'font-weight': 'normal',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': 'normal',
          'letter-spacing': '-0.24px',
          color: '#000',
        },
        '.text-news-content': {
          'font-size': '14px',
          'font-weight': 'normal',
          'font-stretch': 'normal',
          'font-style': 'normal',
          'line-height': 'normal',
          'letter-spacing': '-0.21px',
          color: '#000',
        },
      });
    }),
  ],
};

export default config;

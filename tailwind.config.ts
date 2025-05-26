import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // 커스텀 텍스트 스타일 클래스
      textStyles: {
        'main-title': {
          fontFamily: 'Exo 2',
          fontSize: '48px',
          fontWeight: 'normal',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 1.5,
          letterSpacing: '-0.72px',
        },
      },
    },
  },
};

export default config;

import { Exo_2, Montserrat } from 'next/font/google';

// Next.js 폰트 객체 생성
const exo2 = Exo_2({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// FONT_FAMILY 상수에 Next.js 폰트 적용
export const FONT_FAMILY = {
  // Next.js 폰트 객체의 className 사용
  EXO2: exo2.className,
  MONTSERRAT: montserrat.className,
} as const;

import { ReactNode } from 'react';

import type { Metadata } from 'next';

import '@/modules/styles/global.css';

export const metadata: Metadata = {
  title: '프론트엔드 - 과제',
  description: '프론트엔드 과제입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

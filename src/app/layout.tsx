import { ReactNode } from 'react';

import type { Metadata, Viewport } from 'next';

import '@/modules/styles/global.css';

export const metadata: Metadata = {
  title: '프론트엔드 - 과제',
  description: '프론트엔드 과제입니다.',
};

export const viewport: Viewport = {
  width: 1200,
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" className="w-full min-w-[1200px] overflow-auto">
      <body>{children}</body>
    </html>
  );
}

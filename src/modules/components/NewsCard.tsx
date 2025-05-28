import Image from 'next/image';

import clsx from 'clsx';

import { FONT_FAMILY } from '@/modules/styles/typography';
import { TNewsArticle } from '@/modules/types/news/news-type';

interface INewsCardProps {
  className?: string;
  newsArticle: TNewsArticle;
}

function NewsCard({ className, newsArticle }: INewsCardProps) {
  return (
    <div
      className={clsx('px-5 py-3.75 bg-news-card/50 rounded-2.5', className)}
      style={{ width: 400, height: 415 }}
    >
      {/* 헤더 섹션 */}
      <div className="flex items-center justify-between">
        <h5 className={clsx('text-news-title', FONT_FAMILY.MONTSERRAT)}>
          {newsArticle.title}
        </h5>
        <span className={clsx('text-news-wordcount', FONT_FAMILY.MONTSERRAT)}>
          {newsArticle.wordCount}
        </span>
      </div>

      {/* 이미지 섹션 */}
      <Image
        src={newsArticle.image}
        alt={`${newsArticle.title} 이미지`}
        width={360}
        height={227}
        className="rounded-1.25 mt-2"
        style={{ width: '360px', height: '227px' }} // 고정 크기 보장
      />

      {/* 콘텐츠 영역 */}
      <p
        className={clsx(
          'mt-5',
          'text-news-content line-clamp-6 whitespace-pre-line',
          FONT_FAMILY.MONTSERRAT
        )}
      >
        {newsArticle.content}
      </p>
    </div>
  );
}

export default NewsCard;

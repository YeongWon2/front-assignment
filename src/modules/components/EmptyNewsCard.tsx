import clsx from 'clsx';

import { FONT_FAMILY } from '@/modules/styles/typography';

interface IEmptyNewsCardProps {
  className?: string;
}

function EmptyNewsCard({ className }: IEmptyNewsCardProps) {
  return (
    <div
      className={clsx('px-5 py-3.75 bg-news-card/50 rounded-2.5', className)}
      style={{ width: 400, height: 415 }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-6xl mb-4">📰</div>
        <h5 className={clsx('text-news-title mb-2', FONT_FAMILY.MONTSERRAT)}>
          뉴스가 없습니다
        </h5>
        <p
          className={clsx(
            'text-news-content text-center',
            FONT_FAMILY.MONTSERRAT
          )}
        >
          현재 조건에 맞는 뉴스를
          <br />
          찾을 수 없습니다
        </p>
      </div>
    </div>
  );
}

export default EmptyNewsCard;

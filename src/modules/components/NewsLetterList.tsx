'use client';

import { useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';

import { fetchNewsList } from '@/modules/api/news-list.api';
import EmptyNewsCard from '@/modules/components/EmptyNewsCard';
import FilterByCountry from '@/modules/components/FilterByCountry';
import FilterByWordCount from '@/modules/components/FilterByWordCount';
import NewsCard from '@/modules/components/NewsCard';
import { useDragScroll } from '@/modules/hooks/useDragScroll';
import { TNewsArticle } from '@/modules/types/news/news-type';

interface INewsLetterListProps {
  className?: string;
}

function NewsLetterList(props: INewsLetterListProps) {
  const [newsList, setNewsList] = useState<TNewsArticle[]>([]);
  const [filters, setFilters] = useState({
    country: 'All',
    minWordCount: 1000,
    maxWordCount: 1300,
  });

  // 드래그 스크롤 훅 사용
  const { ref: scrollRef, isDragging } = useDragScroll();

  const loadNews = useCallback(async () => {
    try {
      const result = await fetchNewsList(filters);
      setNewsList(result.articles);
    } catch (error) {
      console.error('뉴스 로딩 실패:', error);
      setNewsList([]);
    }
  }, [filters]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  const handleCountryChange = useCallback((country: string) => {
    setFilters(prev => ({ ...prev, country }));
  }, []);

  const handleWordCountChange = useCallback(
    (range: { start: number; end: number } | null) => {
      if (range) {
        setFilters(prev => ({
          ...prev,
          minWordCount: range.start,
          maxWordCount: range.end,
        }));
      }
    },
    []
  );

  return (
    <div className={props.className}>
      {/* 필터 섹션 */}
      <div className="flex items-center gap-5">
        <FilterByCountry onFilterChange={handleCountryChange} />
        <FilterByWordCount onSelectionChange={handleWordCountChange} />
      </div>

      {/* 뉴스 카드 스크롤 섹션 */}
      <div className="mt-17 scroll-none">
        <div
          ref={scrollRef}
          className={clsx(
            'overflow-x-auto -mx-20 px-20 scroll-px-20 flex gap-10',
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          )}
        >
          {newsList.length > 0 ? (
            newsList.map(article => (
              <NewsCard
                key={article.id}
                newsArticle={article}
                className="flex-shrink-0"
              />
            ))
          ) : (
            <EmptyNewsCard className="flex-shrink-0" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsLetterList;

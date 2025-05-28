// app/api/news/route.ts
import { NextRequest, NextResponse } from 'next/server';

import { BASE_URL } from '@/modules/helpers/env-helpers';

// News Article 타입
interface INewsArticle {
  id: string;
  title: string;
  location: string;
  wordCount: number;
  image: string;
  content: string;
}

// API 응답 타입
interface INewsApiResponse {
  success: boolean;
  data: INewsArticle[];
  total: number;
  filters: {
    country: string | null;
    minWordCount: number | null;
    maxWordCount: number | null;
  };
  error?: string;
}

/**
 * News API GET 엔드포인트
 * 필터링된 뉴스 목록을 반환합니다.
 */
export async function GET(
  request: NextRequest
): Promise<NextResponse<INewsApiResponse>> {
  try {
    // 목데이터 URL에서 데이터 가져오기
    const dataResponse = await fetch(`${BASE_URL}/data/news-mock-data.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // 캐시 사용 안함
    });

    if (!dataResponse.ok) {
      throw new Error(`목데이터 로드 실패! 상태 코드: ${dataResponse.status}`);
    }

    const allNewsData: INewsArticle[] = await dataResponse.json();

    // URL에서 쿼리 파라미터 추출
    const { searchParams } = new URL(request.url);
    const country = searchParams.get('country');
    const minWordCount = searchParams.get('minWordCount');
    const maxWordCount = searchParams.get('maxWordCount');

    console.log('받은 필터 파라미터:', { country, minWordCount, maxWordCount });

    // 필터링 시작
    let filteredData = [...allNewsData];

    // 대륙별 필터링 (country가 null이거나 'All'이 아닐 때만 필터링)
    if (country && country !== 'All') {
      filteredData = filteredData.filter(
        article => article.location.toLowerCase() === country.toLowerCase()
      );
      console.log(`국가 필터링 후: ${filteredData.length}개 기사`);
    }

    // 최소 단어 수 필터링
    if (minWordCount) {
      const min = parseInt(minWordCount, 10);
      if (!isNaN(min)) {
        filteredData = filteredData.filter(article => article.wordCount >= min);
        console.log(`최소 단어 수 필터링 후: ${filteredData.length}개 기사`);
      }
    }

    // 최대 단어 수 필터링
    if (maxWordCount) {
      const max = parseInt(maxWordCount, 10);
      if (!isNaN(max)) {
        filteredData = filteredData.filter(article => article.wordCount <= max);
        console.log(`최대 단어 수 필터링 후: ${filteredData.length}개 기사`);
      }
    }

    // 성공 응답
    const response: INewsApiResponse = {
      success: true,
      data: filteredData,
      total: filteredData.length,
      filters: {
        country: country || null,
        minWordCount: minWordCount ? parseInt(minWordCount, 10) : null,
        maxWordCount: maxWordCount ? parseInt(maxWordCount, 10) : null,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('[News API Error]:', error);

    // 에러 응답
    const errorResponse: INewsApiResponse = {
      success: false,
      data: [],
      total: 0,
      filters: {
        country: null,
        minWordCount: null,
        maxWordCount: null,
      },
      error:
        error instanceof Error
          ? error.message
          : '알 수 없는 오류가 발생했습니다.',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

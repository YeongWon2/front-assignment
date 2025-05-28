import qs from 'qs';

import { BASE_URL } from '@/modules/helpers/env-helpers';
import {
  INewsApiParams,
  INewsApiResponse,
  TNewsListDTO,
} from '@/modules/types/news/news-type';

/**
 * News API에서 뉴스 목록 가져오기 (캐시 없음 - 실시간 필터링)
 */
export async function fetchNewsList(
  filters?: INewsApiParams
): Promise<TNewsListDTO> {
  try {
    // qs를 사용한 쿼리 파라미터 구성
    const params: INewsApiParams = {};

    if (filters?.country && filters.country !== 'All') {
      params.country = filters.country;
    }

    if (filters?.minWordCount !== null && filters?.minWordCount !== undefined) {
      params.minWordCount = filters.minWordCount;
    }

    if (filters?.maxWordCount !== null && filters?.maxWordCount !== undefined) {
      params.maxWordCount = filters.maxWordCount;
    }

    const queryString = qs.stringify(params, {
      addQueryPrefix: true,
      encode: true,
      skipNulls: true,
    });

    const response = await fetch(`${BASE_URL}/api/news/list${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // 실시간 필터링을 위해 캐시 사용 안함
    });

    if (!response.ok) {
      throw new Error(`HTTP 요청 실패! 상태 코드: ${response.status}`);
    }

    const data: INewsApiResponse = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'API 응답 오류가 발생했습니다.');
    }

    console.log('News API 응답:', data);

    return {
      articles: data.data,
      total: data.total,
      appliedFilters: {
        country: data.filters.country,
        minWordCount: data.filters.minWordCount,
        maxWordCount: data.filters.maxWordCount,
      },
    };
  } catch (error) {
    console.error('뉴스 데이터를 가져오는데 실패했습니다:', error);
    throw error;
  }
}

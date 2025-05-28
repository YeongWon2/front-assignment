import qs from 'qs';

import {
  UNSPLASH_ACCESS_KEY,
  UNSPLASH_API_BASE_URL,
} from '@/modules/helpers/env-helpers';
import {
  IUnsplashApiParams,
  IUnsplashPhotoResponse,
  TRandomImageDTO,
} from '@/modules/types/unsplash/unsplash-type';

/**
 * Unsplash API에서 랜덤 이미지 가져오기 (24시간 캐시)
 */
export async function fetchRandomImage(
  query: string = 'landscape nature'
): Promise<TRandomImageDTO> {
  try {
    // qs를 사용한 쿼리 파라미터 구성
    const params: IUnsplashApiParams = {
      client_id: UNSPLASH_ACCESS_KEY,
      query,
      orientation: 'landscape',
      content_filter: 'high',
    };

    const queryString = qs.stringify(params, {
      addQueryPrefix: true,
      encode: true,
      skipNulls: true,
    });

    const response = await fetch(
      `${UNSPLASH_API_BASE_URL}/photos/random${queryString}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          'Content-Type': 'application/json',
        },
        // 24시간 캐시 설정
        next: {
          revalidate: 86400, // 24시간 (86400초)
          tags: ['unsplash-image', `query-${query}`],
        },
        cache: 'force-cache',
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP 요청 실패! 상태 코드: ${response.status}`);
    }

    const data: IUnsplashPhotoResponse = await response.json();

    return {
      id: data.id,
      url: data.urls.regular,
      description: data.description || data.alt_description || '배경 이미지',
      photographer: {
        name: data.user.name,
        username: data.user.username,
      },
    };
  } catch (error) {
    console.error('Unsplash에서 랜덤 이미지를 가져오는데 실패했습니다:', error);
    throw error;
  }
}

// 랜덤 이미지 데이터 타입
export type TRandomImageDTO = {
  id: string;
  url: string;
  description: string;
  photographer: {
    name: string;
    username: string;
  };
};

// Unsplash API 응답 타입
export interface IUnsplashPhotoResponse {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    regular: string;
  };
  user: {
    name: string;
    username: string;
  };
}

// API 요청 파라미터 타입
export interface IUnsplashApiParams {
  client_id: string;
  query?: string;
  orientation?: 'landscape' | 'portrait' | 'squarish';
  content_filter?: 'low' | 'high';
  count?: number;
}

// News API 응답 타입
export type TNewsArticle = {
  id: string;
  title: string;
  location: string;
  wordCount: number;
  image: string;
  content: string;
};

// API 요청 파라미터 타입
export interface INewsApiParams {
  country?: string;
  minWordCount?: number;
  maxWordCount?: number;
}

// API 응답 타입
export interface INewsApiResponse {
  success: boolean;
  data: TNewsArticle[];
  total: number;
  filters: {
    country: string | null;
    minWordCount: number | null;
    maxWordCount: number | null;
  };
  error?: string;
}

// DTO 타입
export type TNewsListDTO = {
  articles: TNewsArticle[];
  total: number;
  appliedFilters: {
    country: string | null;
    minWordCount: number | null;
    maxWordCount: number | null;
  };
};

# 프론트엔드 과제 - News Application
## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000에서 확인 가능합니다.

## 과제 요구사항 구현 체크리스트

### ✅ 1. 프로필 카드 랜덤 배치
- 첫 번째 섹션의 3개 프로필 카드가 페이지 로드마다 임의로 배치
- Fisher-Yates 셔플 알고리즘을 사용하여 서버사이드에서 랜덤 배치 구현
- API Route `/api/user/list`에서 매 요청마다 다른 순서로 응답

**구현 이유**: 빠른 렌더링 처리를 위해 API Route에서 서버사이드로 처리했습니다.

### ✅ 2. Unsplash API 랜덤 이미지
- 두 번째 섹션에 Unsplash API를 통한 랜덤 배경 이미지 삽입
- Next.js 캐시 기능으로 24시간 동안 동일한 이미지 유지
- qs 라이브러리로 쿼리 파라미터 구성

**구현 이유**: 과제에서 요구한 "같은 브라우저로 페이지를 다시 열거나 새로고침 해도 기존 이미지가 변경되지 않도록" 구현하기 위해 Next.js의 force-cache와 revalidate 옵션을 활용했습니다.

### ✅ 3. 이메일 유효성 검증
- 뉴스레터 구독 양식의 valid/invalid 상태 처리
- 실시간 이메일 형식 검증 및 시각적 피드백
- 정규식을 활용한 클라이언트 사이드 검증

**구현 이유**: 사용자 경험을 위해 실시간으로 검증 상태를 보여주되, 빈 입력 상태에서는 검증을 하지 않도록 했습니다.

### ✅ 4. 카드 데이터 필터링
- 국가별 필터링: 전체, 특정 국가별 뉴스 필터
- 단어 수 범위 필터링: 1000-2000 단어 범위 내 필터
- API Route `/api/news/list`에서 서버사이드 필터링 구현
- 검색 결과 없음 처리

**구현 이유**: 빠른 렌더링 처리를 위해 API Route에서 필터링 로직을 처리했습니다.

### ✅ 5. 디자인 구현
- Figma/Zeplin 디자인 정확히 구현
- Montserrat, EXO2 웹폰트 적용
- 1200px 고정 viewport 설정 (PC 디자인만 제공되어 고정폭으로 구현)
- Tailwind CSS 커스텀 설정 활용

**구현 이유**: 디자인 시스템의 일관성을 위해 typography.ts 파일로 폰트를 관리하고, Tailwind 설정을 커스터마이징했습니다.

## 기술 스택

**Core Framework**
- Next.js 15.3.2: App Router, API Routes, 이미지 최적화
- React 19: 최신 훅 및 컴포넌트 기능
- TypeScript 5: 정적 타입 검사

**Styling & UI**
- Tailwind CSS 3.4: 유틸리티 기반 스타일링
- clsx: 동적 클래스 관리

**API & Data**
- qs: URL 쿼리 파라미터 처리
- Next.js API Routes: 서버사이드 API

**Development Tools**
- ESLint, Prettier: 코드 품질 관리

## 프로젝트 구조

```
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── news/
│   │   │   │   └── list/route.ts       # 뉴스 필터링 API
│   │   │   └── user/
│   │   │       └── list/route.ts       # 사용자 랜덤 배치 API
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── modules/
│       ├── api/                        # 클라이언트 API 함수들
│       ├── components/                 # 재사용 컴포넌트들
│       ├── helpers/                    # 유틸리티 함수
│       ├── hooks/                      # 커스텀 훅
│       ├── styles/                     # 스타일 설정
│       └── types/                      # TypeScript 타입 정의
└── public/
    ├── data/news-mock-data.json
    └── images/
```

## 기술적 선택 이유

**Next.js 선택 이유**
- SSR을 활용한 초기 렌더링 성능 최적화
- API Routes를 통한 커스텀 API 구현
- 이미지 최적화 및 캐싱 기능 활용

**API Route 활용 이유**
- 클라이언트와 서버 로직 분리
- 확장 가능한 백엔드 API 구조
- 빠른 데이터 처리 및 응답
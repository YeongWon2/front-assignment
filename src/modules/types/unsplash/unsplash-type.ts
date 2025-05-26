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

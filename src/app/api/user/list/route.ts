import { NextResponse } from 'next/server';

import { TUserDTO } from '@/modules/types/user/user-type';

// 배열 셔플 함수 (Fisher-Yates 알고리즘)
function userArrayList<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 기본 사용자 데이터
const defaultUserData: TUserDTO[] = [
  {
    id: 'user-1',
    avatarImageUrl: '/images/ellipse1.png',
    title: 'Sed ut perspiciatis',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit\naspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
  },
  {
    id: 'user-2',
    avatarImageUrl: '/images/ellipse2.png',
    title: 'Lorem ipsum dolor',
    description:
      'Amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.',
  },
  {
    id: 'user-3',
    avatarImageUrl: '/images/ellipse3.png',
    title: 'Nemo enim ipsam',
    description:
      'Consequuntur magni dolores eos qui ratione\nvoluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.',
  },
];

export async function GET() {
  try {
    const userList = userArrayList(defaultUserData);

    return NextResponse.json({
      success: true,
      data: userList,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

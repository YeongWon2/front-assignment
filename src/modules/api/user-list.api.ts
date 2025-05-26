import { BASE_URL } from '@/modules/helpers/env-helpers';
import { TUserDTO } from '@/modules/types/user/user-type';

interface IUserListApiResponse {
  success: boolean;
  data: TUserDTO[];
  timestamp: string;
}

/**
 * 사용자목록 데이터 API
 */
export async function fetchUserList(): Promise<TUserDTO[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/user/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP 요청 실패! 상태 코드: ${response.status}`);
    }

    const result: IUserListApiResponse = await response.json();

    if (!result.success) {
      throw new Error('API 응답에서 실패 상태를 반환했습니다');
    }

    return result.data;
  } catch (error) {
    console.error('사용자 목록 데이터를 가져오는데 실패했습니다:', error);
    throw error;
  }
}

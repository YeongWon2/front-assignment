/**
 * 이메일 형식 검증
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * 이메일 검증 상태 enum
 */
export enum EMAIL_VALIDATION_STATE {
  IDLE = 'idle',
  VALID = 'valid',
  INVALID = 'invalid',
}

/**
 * 이메일 입력값에 따른 검증 상태 반환
 */
export function getEmailValidationState(email: string): EMAIL_VALIDATION_STATE {
  if (!email.trim()) {
    return EMAIL_VALIDATION_STATE.IDLE;
  }

  return validateEmail(email)
    ? EMAIL_VALIDATION_STATE.VALID
    : EMAIL_VALIDATION_STATE.INVALID;
}

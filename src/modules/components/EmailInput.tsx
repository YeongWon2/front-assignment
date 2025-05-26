'use client';

import { useCallback, useMemo, useState } from 'react';

import clsx from 'clsx';

import SendIcon from '@/modules/components/SendIcon';
import {
  EMAIL_VALIDATION_STATE,
  getEmailValidationState,
} from '@/modules/helpers/vaildation-helpers';

interface IEmailInputProps {
  placeholder?: string;
  className?: string;
}

function EmailInput(props: IEmailInputProps) {
  const { placeholder = 'Enter your email', className } = props;

  const [email, setEmail] = useState('');
  const [validationState, setValidationState] =
    useState<EMAIL_VALIDATION_STATE>(EMAIL_VALIDATION_STATE.IDLE);

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
    const newValidationState = getEmailValidationState(value);
    setValidationState(newValidationState);
  }, []);

  const handleSubmit = useCallback(() => {
    if (validationState === EMAIL_VALIDATION_STATE.VALID) {
    }
  }, [validationState]);

  const getBorderColor = useMemo(() => {
    switch (validationState) {
      case EMAIL_VALIDATION_STATE.VALID:
        return 'border-validation-success';
      case EMAIL_VALIDATION_STATE.INVALID:
        return 'border-validation-error';
      default:
        return 'border-white';
    }
  }, [validationState]);

  const isSubmitEnabled = useMemo(
    () => validationState === EMAIL_VALIDATION_STATE.VALID,
    [validationState]
  );

  const showErrorMessage = useMemo(
    () => validationState === EMAIL_VALIDATION_STATE.INVALID,
    [validationState]
  );

  return (
    <div className={clsx('flex flex-col', className)}>
      {/* 이메일 입력 필드 */}
      <div
        className={clsx(
          'w-[500px] h-[50px]',
          'px-2.5 py-1',
          'rounded-[7px]',
          'backdrop-blur-[10px]',
          'bg-white bg-opacity-10',
          'border',
          'flex items-center',
          getBorderColor
        )}
      >
        <input
          type="email"
          value={email}
          onChange={e => handleEmailChange(e.target.value)}
          placeholder={placeholder}
          className={clsx(
            'flex-1 h-full',
            'bg-transparent',
            'text-email-input placeholder:text-white',
            'outline-none border-none'
          )}
        />

        {/* 전송 버튼 */}
        <SendIcon
          isActive={isSubmitEnabled}
          onClick={handleSubmit}
          className="ml-2"
        />
      </div>

      {/* 에러 메시지 */}
      <span
        className={clsx(
          'mt-1 invisible inline-block text-email-input text-validation-error',
          showErrorMessage && '!visible'
        )}
      >
        Please enter a valid email!
      </span>
    </div>
  );
}

export default EmailInput;

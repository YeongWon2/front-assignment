import { useMemo } from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import paperPlaneActive from '@/modules/asset/icon/paper-plane-active.png';
import paperPlaneDefault from '@/modules/asset/icon/paper-plane-default.png';

interface ISendIconProps {
  isActive: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

function SendIcon(props: ISendIconProps) {
  const { isActive, onClick, className, disabled = false } = props;

  const iconSrc = useMemo(
    () => (isActive ? paperPlaneActive : paperPlaneDefault),
    [isActive]
  );

  const handleClick = useMemo(() => {
    if (disabled || !isActive) return undefined;
    return onClick;
  }, [disabled, isActive, onClick]);

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || !isActive}
      className={clsx(
        'flex items-center justify-center',
        'w-8 h-8',
        'rounded-full',
        'transition-all duration-200',
        'hover:scale-110',
        isActive && !disabled
          ? 'opacity-100 cursor-pointer hover:bg-white hover:bg-opacity-10'
          : 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <Image src={iconSrc} alt="Send" width={32} height={32} />
    </button>
  );
}

export default SendIcon;

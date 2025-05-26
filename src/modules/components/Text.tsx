import { ReactNode } from 'react';

import clsx from 'clsx';

import { FONT_FAMILY } from '@/modules/styles/typography';

interface IMainTitle {
  children?: ReactNode;
}

export function MainTitle(props?: IMainTitle) {
  return (
    <h1 className={clsx('text-main-title', FONT_FAMILY.EXO2)}>
      {props?.children}
    </h1>
  );
}

import { ReactNode } from 'react';

import clsx from 'clsx';

import Avatar from '@/modules/components/Avatar';
import { FONT_FAMILY } from '@/modules/styles/typography';

interface IUserCardProps {
  className?: string;
  avatarImageUrl: string;
  title: string | ReactNode;
  description: string | ReactNode;
}

function UserCard(props: IUserCardProps) {
  return (
    <div className={clsx('inline-block', props.className)}>
      <Avatar imgUrl={props.avatarImageUrl} />
      <div
        className={clsx(
          'mt-10 whitespace-pre-line',
          'text-card-title',
          FONT_FAMILY.MONTSERRAT
        )}
      >
        {props.title}
      </div>
      <div
        className={clsx(
          'mt-6 whitespace-pre-line line-clamp-3',
          'text-card-description',
          FONT_FAMILY.MONTSERRAT
        )}
      >
        {props.description}
      </div>
      <button className={clsx('mt-6 text-card-button', FONT_FAMILY.EXO2)}>
        Learn more
      </button>
    </div>
  );
}

export default UserCard;

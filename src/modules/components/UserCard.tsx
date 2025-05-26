import { ReactNode } from 'react';

import clsx from 'clsx';

import Avatar from '@/modules/components/Avatar';

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
      <div className={clsx('mt-10 whitespace-pre-line', 'text-card-title')}>
        {props.title}
      </div>
      <div
        className={clsx(
          'mt-6 whitespace-pre-line line-clamp-3',
          'text-card-description'
        )}
      >
        {props.description}
      </div>
      <button className="mt-6 text-card-button">Learn more</button>
    </div>
  );
}

export default UserCard;

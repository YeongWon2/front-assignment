import clsx from 'clsx';

import { fetchUserList } from '@/modules/api/user-list.api';
import UserCard from '@/modules/components/UserCard';

interface IUserCardListProps {
  className?: string;
}

async function UserCardList(props: IUserCardListProps) {
  const userList = await fetchUserList();

  return (
    <div className={clsx('flex gap-5', props.className)}>
      {userList.map(user => {
        return (
          <UserCard
            key={user.id}
            avatarImageUrl={user.avatarImageUrl}
            title={user.title}
            description={user.description}
          />
        );
      })}
    </div>
  );
}

export default UserCardList;

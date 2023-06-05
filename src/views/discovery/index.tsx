import { memo } from 'react';
import type { FC } from 'react';
import { fetchUsers } from '@/service';
import { useEffect } from 'react';

const Discovery: FC = function () {
  useEffect(() => {
    fetchUsers().then((users) => {
      console.log('Users:', users);
    });
  }, []);
  return <div>Discovery</div>;
};

export default memo(Discovery);

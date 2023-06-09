import { memo } from 'react';
import type { FC } from 'react';
import Recommend from '@/views/discovery/c-views/recommend/recommend';

const Discovery: FC = function () {
  return (
    <div>
      <Recommend />
    </div>
  );
};

export default memo(Discovery);

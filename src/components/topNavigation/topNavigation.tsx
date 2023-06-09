import { memo } from 'react';
import HyHeadWrapper from '@/components/topNavigation/style';
import LoginBtn from 'src/components/topNavigation/LoginBtn';
import RegisterBtn from 'src/components/topNavigation/registerBtn';

function TopNavigation() {
  return (
    <HyHeadWrapper>
      <div className="headerContainer">
        <div className="btnContainer">
          <RegisterBtn></RegisterBtn>
          <LoginBtn></LoginBtn>
        </div>
      </div>
    </HyHeadWrapper>
  );
}

export default memo(TopNavigation);

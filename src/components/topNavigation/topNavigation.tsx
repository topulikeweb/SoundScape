import { memo } from 'react';
import HyHeadWrapper from '@/components/topNavigation/style';
import LoginBtn from 'src/components/topNavigation/LoginBtn';
import RegisterBtn from 'src/components/topNavigation/registerBtn';
import { Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { changeTheme } from '@/store/moudle/theme';

function TopNavigation() {
  const dispatch = useDispatch();
  /**
   * @author topu
   * @date 2023/6/28
   * @Description 切换主题
   * @return 返回值
   * @param checked
   */
  const onChange = (checked: boolean) => {
    const flag = checked ? 'dark' : 'light';
    dispatch(changeTheme(flag));
  };
  return (
    <HyHeadWrapper>
      <div className="headerContainer">
        <Switch defaultChecked onChange={onChange} className="SwitchBox" />
        <div className="btnContainer">
          <RegisterBtn></RegisterBtn>
          <LoginBtn></LoginBtn>
        </div>
      </div>
    </HyHeadWrapper>
  );
}

export default memo(TopNavigation);

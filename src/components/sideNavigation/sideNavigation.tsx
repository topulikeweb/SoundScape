import React, { useState } from 'react';
import {
  ArrowsAltOutlined,
  BankOutlined,
  CompassFilled,
  HeartFilled,
  HomeFilled,
  ShrinkOutlined,
} from '@ant-design/icons';
import { HeaderWrapper } from '@/components/sideNavigation/style';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { darkBackGroundColor, darkColor } from '@/assets/theme';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('主页', '1', <HomeFilled />),
  getItem('搜索', '2', <BankOutlined />),

  // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Option 7', '7'),
  //   getItem('Option 8', '8'),
  // ]),]
  getItem('---------- 音乐库 ----------', '3', <CompassFilled />),
  getItem('已点赞歌曲', '4', <HeartFilled />),
];

const SideNavigation: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  /**
   * @author topu
   * @date 2023/6/6
   * @Description 切换路由
   * @return 返回值
   */
  const changeRouter = (e: { key: string }) => {
    console.log(e.key);
    switch (e.key) {
      case '1':
        navigate('/discovery');
        break;
      case '2':
        navigate('/Search');
        break;
      case '3':
        navigate('/Focus');
        break;
      case '4':
        navigate('/Mine');
    }
  };

  return (
    <HeaderWrapper>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 18 }}>
        {collapsed ? <ArrowsAltOutlined /> : <ShrinkOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={changeRouter}
        className="Menu"
      />
    </HeaderWrapper>
  );
};

export default SideNavigation;

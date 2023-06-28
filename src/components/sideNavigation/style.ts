import styled from 'styled-components';
import { darkColor, fontColor } from '@/assets/theme';

export const HeaderWrapper = styled.div`
  // 修改mean每一个ul的样式
  .ant-menu-item {
    margin-bottom: 40px !important;
    font-size: 14px !important;
  }

  .ant-menu {
    min-width: 0;
    max-width: 300px;
    flex: auto;
    color: ${fontColor};
    background-color: ${darkColor};
    height: 100%;
    transition: background-color linear 1s;
  }
`;

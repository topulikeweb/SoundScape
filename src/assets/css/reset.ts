// @darkBackGroundColor: #000000;
// @fontColor: aliceblue;
// @font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
// 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
// 'Noto Color Emoji';
import styled from 'styled-components';
import { darkBackGroundColor, darkColor, fontColor } from '@/assets/theme';

const AppHyWrapper = styled.div`
  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: top;
  }

  .App {
    color: ${fontColor};
    background-color: ${darkBackGroundColor};
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    margin: 0;
    padding: 0;
    transition: background-color linear 1s;
  }

  .contentBox {
    height: 100vh;
    margin: 0.6rem 0.1rem;
    flex: 5;
    background-color: ${darkColor};
    transition: background-color linear 1s;
    border-radius: 0.16rem;
    overflow-y: scroll;
  }

  //设置滚动条样式
  /* 滚动条轨道 */

  ::-webkit-scrollbar-track {
    background-color: #050505;
  }

  /* 滚动条滑块 */

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 0.05rem;
  }

  /* 鼠标悬停在滚动条上方时的样式 */

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  /* 滚动条边框 */

  ::-webkit-scrollbar {
    width: 0.6rem;
    background-color: #f1f1f1;
  }

  html {
    font-size: 0.14rem;
  }

  //对分页器的字体颜色进行更改
  :where(.css-dev-only-do-not-override-1ryj3oi).ant-pagination .ant-pagination-item a {
    color: #9f9fe1;
  }
`;

export default AppHyWrapper;

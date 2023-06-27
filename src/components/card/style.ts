import styled from 'styled-components';
import { fontColor } from '@/assets/theme';

const HyWrapper = styled.div`
  .coverImage {
    height: 185px;
  }

  .Card:hover {
    box-shadow: ${fontColor} 0 0 20px 0;
    transition: box-shadow 0.3s linear;

    &::before {
      content: '';
      position: absolute; /* 绝对定位 */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('../../assets/img/musicImage.png'); /* 播放图标的路径 */
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.8; /* 图标透明度 */
    }
  }

  // 修改卡片字体的样式
  .ant-card-meta-description {
    white-space: nowrap; /* 禁止换行 */
    overflow: hidden; /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 使用省略号表示截断 */
  }
`;

export default HyWrapper;

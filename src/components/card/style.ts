import styled from 'styled-components';
import { fontColor } from '@/assets/theme';

const HyWrapper = styled.div`
  .coverImage {
    height: 185px;
  }

  .Card:hover {
    box-shadow: ${fontColor} 0 0 20px 0;
    transition: box-shadow 0.3s linear;
  }
`;

export default HyWrapper;

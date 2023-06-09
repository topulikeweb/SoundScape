import styled from 'styled-components';
import { fontColor, darkBackGroundColor } from '@/assets/theme';

const HyLoginWrapper = styled.div`
  .LoginBtn {
    height: 45px;
    margin-top: 5px;
    border-radius: 20px;
    font-weight: 550;
    background-color: ${fontColor};
    color: ${darkBackGroundColor};
  }
`;

export default HyLoginWrapper;

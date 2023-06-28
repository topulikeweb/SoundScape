import styled from 'styled-components';
import { darkBackGroundColor } from '@/assets/theme';

const HyPlayerWrapper = styled.div`
  .containerBox {
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    justify-content: space-around;
    bottom: 0;
    width: 90vw;
    left: 5vw;
    background-color: ${darkBackGroundColor};
    height: 100px;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
    transition: background-color linear 1s;
  }

  .playerBox {
    flex: 6;
    height: 100px;
    background-color: ${darkBackGroundColor};
    transition: background-color linear 1s;
  }

  .PlayerLeftBox {
    flex: 1;
    height: 100px;
    background-color: ${darkBackGroundColor};
    display: flex;
    transition: background-color linear 1s;
  }

  .imageBox {
    width: 80px;
    height: 80px;
    margin-top: 10px;
  }

  .nameBox {
    margin-left: 20px;
    flex-direction: row;
    line-height: 100px;
    text-align: center;
  }
`;

export default HyPlayerWrapper;

import styled from 'styled-components';
import { darkBackGroundColor } from '@/assets/theme';

const HySearchWrapper = styled.div`
  .searchBox {
    width: 400px;
    margin: 30px;
  }

  .cardBox {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .cardBoxItem {
    width: 9vw;
    height: 20vh;
    margin-right: 10px;
    margin-left: 20px;
    text-align: center;
    line-height: 205px;
    border-radius: 15px;
    opacity: 0.7;
    font-size: 20px;
    font-weight: 550;
  }

  .hotSongs {
    width: 80vw;
    height: 400px;
    display: flex;
    margin: 20px auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }

  .hotSongsItem {
    margin-top: 30px;
    margin-right: 50px;
  }

  .searchResult {
    width: 450px;
    background-color: ${darkBackGroundColor};
    position: absolute;
    margin-left: 30px;
    margin-top: -15px;
    border-radius: 10px;
    overflow: hidden;
  }

  .searchResultItem {
    width: 100%;
    position: relative;
    line-height: 40px;
    //margin-left: 30px;
    font-size: 12px;
    padding-left: 20px;
    height: 40px;
  }

  .searchResultItem:hover {
    background-color: #333333;
  }
`;

export default HySearchWrapper;

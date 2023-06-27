import styled from 'styled-components';
import { darkBackGroundColor, darkColor, fontColor, transparentWhite } from '@/assets/theme';

const MusicResultHyWrapper = styled.div`
  .bigContainer {
    width: 100vw;
    height: 100vh;
  }

  .topContainer {
    width: 100%;
    min-height: 300vh;
    background-color: #c49797;
  }

  .resultTitle {
    margin-bottom: 10px;
    color: ${fontColor};
    font-size: 15px;
    font-weight: 550;
  }

  .resultBackground {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #486373, #4b4b4b, #000000);
  }

  .resultImage {
    flex: 1;
    margin-left: 30px;
    margin-top: 20px;
    box-shadow: 0 0 10px 0 rgba(122, 121, 121, 0.5);
  }

  .ListContainer {
    margin-top: 10%;
    width: 100%;
    height: 2000px;
  }

  .list {
    width: 100%;
    height: 3%;
    margin-top: 5px;
    display: flex;
  }

  .list:hover {
    background-color: ${transparentWhite};
    transition: 0.5s all;
  }

  .leftBox {
    display: flex;
    width: 25%;
    justify-content: space-around;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .imageBox {
    width: 50px;
    height: 50px;
    margin-top: 5px;
  }

  .listName {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 60px;
    width: 70%;
  }

  .listName div {
    height: 50%;
    line-height: 30px;
    text-align: center;
  }

  .album {
    margin-left: 30px;
    width: 40%;
    height: 60px;
    line-height: 60px;
  }

  .time {
    width: 30%;
    height: 60px;
    margin-left: 50px;
    line-height: 60px;
  }

  .pagination {
    margin-bottom: 200px;
  }
`;

export default MusicResultHyWrapper;

import styled from 'styled-components';
import { fontColor, transparentWhite } from '@/assets/theme';

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
    margin-top: 5%;
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

  .bottomContainer {
    width: 100vw;
    height: 20%;
  }

  .CardBox {
    margin-top: 30px;
    width: 140px;
    height: 180px;
    flex: 1;
  }

  .CardImage {
    height: 100px;
  }

  .descriptionBox {
    height: 30vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .leftContainer {
    flex: 6;
    display: flex;
    flex-wrap: wrap;
  }

  .rightContainer {
    flex: 1;
  }

  .titleBox {
    width: 100%;
  }

  .titleName {
    width: 100%;
    font-size: 45px;
  }

  .imageMVBox {
    margin-right: 5%;
    height: 100%;
    width: 3%;
  }

  .imageMVBoxs {
    margin-right: 5%;
    height: 100%;
    width: 3%;
  }

  .MVImages {
    width: 100%;
    height: 60%;
    margin: 40% auto;
    border-radius: 10px;
  }

  .MVImage {
    width: 100%;
    height: 60%;
    margin: 40% auto;
    border-radius: 10px;

    &:hover {
      background-color: ${fontColor};
      transition: background-color 0.5s linear;
    }
  }

  .commentTitle {
    font-size: 50px;
  }
`;

export default MusicResultHyWrapper;

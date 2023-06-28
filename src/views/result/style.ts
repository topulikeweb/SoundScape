import styled from 'styled-components';
import { darkBackGroundColor, darkColor, transparentWhite } from '@/assets/theme';

const HyWrapper = styled.div`
  .resultBackground {
    width: 100vw;
    //height: 100vh;
    background: linear-gradient(to bottom, #486373, #4b4b4b, #000000);
  }

  .resultTopBox {
    display: flex;
    width: 88vw;
    justify-content: space-around;
    //height: 260px;
    min-height: 330px;
    background: linear-gradient(to bottom, #708395, #647485, #667787);
  }

  .resultImage {
    flex: 1;
    margin-left: 30px;
    margin-top: 20px;
    box-shadow: 0 0 10px 0 rgba(122, 121, 121, 0.5);
  }

  .ListContainer {
    width: 100%;
    //background-color: ${darkBackGroundColor};
    height: 2000px;
  }

  .list {
    width: 100%;
    height: 60px;
    //background-color: ${darkColor};
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

export default HyWrapper;

import styled from 'styled-components';

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
    width: 7vw;
    height: 60px;
    margin-right: 40px;
    margin-left: 40px;
    text-align: center;
    line-height: 60px;
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
`;

export default HySearchWrapper;

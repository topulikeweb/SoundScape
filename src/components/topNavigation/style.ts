import styled from 'styled-components';

const HyHeadWrapper = styled.div`
  .headerContainer {
    width: 90vw;
    height: 50px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    justify-self: center;
  }

  .btnContainer {
    width: 160px;
    height: 100%;
    position: absolute;
    right: 100px;
    display: flex;
    justify-content: space-around;
  }

  .SwitchBox {
    width: 3%;
    height: 40%;
    margin: auto;
  }
`;
export default HyHeadWrapper;

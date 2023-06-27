import styled from 'styled-components';

import '@/assets/css/reset.less';

const RecommendWrapper = styled.div`
  .recommendBox {
    display: flex;
    flex-direction: row;
    //justify-content: space-around;
    flex-wrap: wrap;

    .CardBox {
      margin: 20px 0 0 50px;
      width: 15%;
    }
  }

  .recommendTitle {
    font-size: 24px;
    font-weight: 550;
  }

  .bigRecommendBox {
    width: 90vw;
    margin: 10px auto;
    border-radius: 15px;
  }
`;

export default RecommendWrapper;

// 推荐页面(未登录)
import { FC, memo, useEffect, useState } from 'react';
import { getHomePageData } from '@/service';
import TheCard from '@/components/card/theCard';
import RecommendWrapper from '@/views/discovery/c-views/recommend/style';
import { useNavigate } from 'react-router-dom';

const Recommend: FC = () => {
  const navigate = useNavigate();
  // 推荐列表
  const [recommendList, setRecommendList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  /**
   * @author topu
   * @date 2023/6/7
   * @Description 请求推荐列表数据
   * @return 返回值
   */
  const getData = () => {
    getHomePageData(8)
      .then((res: any) => {
        setRecommendList(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendId = (id: number) => {
    navigate(`/Result?id=${id}`);
  };
  return (
    <RecommendWrapper>
      <div className="bigRecommendBox">
        <div className="recommendTitle">推荐歌单</div>
        <div className="recommendBox">
          {recommendList.map(
            (
              item: {
                picUrl: string;
                name: string;
                id: number;
              },
              index,
            ) => {
              return (
                <div className="CardBox" key={index} onClick={() => sendId(item.id)}>
                  {/*将封面图片传递给TheCard组件*/}
                  <TheCard ImageSrc={item.picUrl} theDescription={item.name} />
                </div>
              );
            },
          )}
        </div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);

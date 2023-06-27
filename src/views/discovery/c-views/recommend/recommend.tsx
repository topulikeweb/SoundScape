// 推荐页面(未登录)
import { FC, memo, useEffect, useState } from 'react';
import { getHomePageData } from '@/service';
import TheCard from '@/components/card/theCard';
import RecommendWrapper from '@/views/discovery/c-views/recommend/style';
import { useNavigate } from 'react-router-dom';
import type { RecommendListItem } from '@/views/discovery/c-views/recommend/recommend_type';

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
    getHomePageData(5)
      .then((res: any) => {
        setRecommendList(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * @author topu
   * @date 2023/6/27
   * @Description 携带id进行跳转
   * @return 返回值
   * @param id
   */

  const sendId = (id: number) => {
    navigate(`/Result?id=${id}`);
  };
  return (
    <RecommendWrapper>
      <div className="bigRecommendBox">
        <div className="recommendTitle">推荐歌单</div>
        <div className="recommendBox">
          {recommendList.map((item: RecommendListItem, index: number) => {
            return (
              <div className="CardBox" key={index} onClick={() => sendId(item.id)}>
                {/*将封面图片传递给TheCard组件*/}
                <TheCard ImageSrc={item.picUrl} theDescription={item.name} />
              </div>
            );
          })}
        </div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);

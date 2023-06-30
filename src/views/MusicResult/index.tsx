import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MusicResultHyWrapper from '@/views/MusicResult/style';
import { Card, Pagination } from 'antd';
import {
  getMusicUrl,
  getMVComment,
  getVideoResource,
  searchSongsMultipleMatching,
  toSearchSongsResult,
} from '@/service';
import { IMusicLists } from '@/views/MusicResult/MusicResult_type';
import { useLocation } from 'react-router';
import { changeMusicUrl } from '@/store/moudle/musicUrl';
import type { IResultList } from '@/views/MusicResult/MusicResult_type';
import { changeMusicList } from '@/store/moudle/musicList';
import MVImage from '@/assets/img/MV.png';
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import ReactPlayer from 'react-player';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { darkBackGroundColor } from '@/assets/theme';

interface DataType {
  content: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  user: {
    avatarUrl: string;
    nickname: string;
    thumbnail: string;
  };
  timeStr: string;
}

function MusicResult() {
  const dispatch = useDispatch();
  const location = useLocation();
  const useSearchParam = new URLSearchParams(location.search);
  const keyword = useSearchParam.get('keyword');
  const MusicList = useSelector((state: any) => state.List.MusicList);
  const [MusicLists, setMusicLists] = useState<IMusicLists>({
    result: {
      songs: [],
      songCount: 0,
    },
  });
  const [resultList, setResultList] = useState<IResultList>({
    artist: [],
    album: [],
  });
  const [MVurl, setMVurl] = useState('');
  // 抽屉
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [id, setID] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setMusicLists(MusicList);
  }, [MusicList]);
  useEffect(() => {
    if (keyword) {
      getSongsDescription(keyword);
    }
  }, [keyword]);
  // 这里没搭建好，刷新页面会丢失数据，只有这样数据才不为空
  useEffect(() => {
    toSearchSongsResult(keyword as string, 100, 0).then((res: any) => {
      dispatch(changeMusicList(res.data));
      console.log(res.data);
    });
  }, []);

  const { Meta } = Card;
  const playMusic = (item: any) => {
    getMusicUrl(item.id).then((res: any) => {
      dispatch(changeMusicUrl(res.data.data[0].url));
    });
  };

  const conversionFormat = (time: number) => {
    time = Math.floor(time / 1000);
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const changePage = (page: number) => {
    toSearchSongsResult(keyword || '', 100, (page - 1) * 100).then((res: any) => {
      setMusicLists(res.data);
    });
  };

  /**
   * @author topu
   * @date 2023/6/30
   * @Description 获取歌曲的详情
   * @return 返回值
   * @param keywords
   */
  const getSongsDescription = (keywords: string) => {
    searchSongsMultipleMatching(keywords).then((res: any) => {
      if (res.data.result) {
        setResultList(res.data.result);
      }
    });
  };
  /**
   * @author topu
   * @date 2023/6/30
   * @Description 获取MV
   * @return 返回值
   */
  const getMV = (e: any, item: any) => {
    e.stopPropagation();
    showDrawer();
    setID(item.mvid);
    getVideoResource(item.mvid).then((res: any) => {
      if (res.data.code === 200) {
        setMVurl(res.data.data.url);
      }
    });
    getMVCommentFN(item.mvid);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  /**
   * @author topu
   * @date 2023/6/30
   * @Description 获取mv评论
   * @return 返回值
   * @param id
   */
  const getMVCommentFN = (id: number) => {
    getMVComment(id, 20, 0).then((res: any) => {
      if (res.data.code === 200) {
        console.log(res.data.comments);
        setData(res.data.comments);
      }
    });
  };

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setPage(page + 1);
    setLoading(true);
    getMVComment(id, 20, (page - 1) * 20)
      .then((res: any) => {
        setData([...data, ...res.data.comments]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <MusicResultHyWrapper>
      <div className="descriptionBox">
        <div className="rightContainer">
          {resultList.artist.map((item: any, index: number) => (
            <Card
              className="CardBox"
              key={index}
              hoverable
              cover={<img className="CardImage" alt={item.name} src={item.img1v1Url} />}
            >
              <Meta title={item.name} description={item.occupation} />
            </Card>
          ))}
        </div>

        <div className="leftContainer">
          <div className="titleName">{resultList.album && resultList.album[0]?.name}</div>
          <div className="titleBox">{resultList.album && resultList.album[0]?.alias[0]}</div>
        </div>
      </div>
      <div className={'ListContainer'}>
        {MusicLists.result && (
          <div className="resultTitle">为您搜索到：{MusicLists.result.songCount}条结果</div>
        )}
        {MusicLists.result?.songs.map((item: any, index: number) => (
          <div key={index} className="list" onClick={() => playMusic(item)}>
            <div className="leftBox">
              <div style={{ lineHeight: '60px' }}>{index + 1}</div>
              <div className="listName">
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 550,
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 550,
                    color: '#a2a2a2',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {item.artists.map((artist: any, artistIndex: number) => (
                    <div key={artistIndex} style={{ textAlign: 'center' }}>
                      {artist.name}&nbsp;
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="album">{item.album.name}</div>
            <div className="time">{conversionFormat(item.duration)}</div>
            {item.mvid ? (
              <div className="imageMVBox" onClick={(e) => getMV(e, item)}>
                <img src={MVImage} alt="MV" className="MVImage" />
              </div>
            ) : (
              <div className="imageMVBoxs">
                <div className="MVImages"></div>
              </div>
            )}
          </div>
        ))}
        <Pagination
          defaultCurrent={1}
          pageSize={100}
          total={MusicLists.result?.songCount}
          onChange={changePage}
          style={{ marginTop: '50px' }}
        />
      </div>

      <>
        <Drawer
          title={keyword}
          placement={placement}
          width={1000}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button type="primary" onClick={onClose}>
                关闭
              </Button>
            </Space>
          }
        >
          <ReactPlayer
            url={MVurl}
            playing={true}
            controls={true}
            style={{ margin: 'auto' }}
          ></ReactPlayer>
          <div className="commentTitle">评论</div>
          <div
            id="scrollableDiv"
            style={{
              height: 800,
              overflow: 'auto',
            }}
          >
            <InfiniteScroll
              dataLength={data.length}
              next={loadMoreData}
              hasMore={data.length < 200}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              endMessage={<Divider plain>没有更多啦！ 🤐</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item key={item.email}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.user.avatarUrl} />}
                      title={<a href="https://ant.design">{item.user.nickname}</a>}
                      description={item.content}
                    />
                    <div>{item.timeStr}</div>
                  </List.Item>
                )}
              />
              <Button onClick={loadMoreData}>加载更多</Button>
            </InfiniteScroll>
          </div>
        </Drawer>
      </>
    </MusicResultHyWrapper>
  );
}

export default memo(MusicResult);

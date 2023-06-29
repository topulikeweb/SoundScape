import { FC, memo, useEffect, useState } from 'react';
import HyWrapper from '@/views/result/style';
import { Image, Pagination } from 'antd';
import musicImage from '@/assets/img/musicImage.png';
import { useLocation } from 'react-router';
import { getMusicUrl, getPlaylistAllSongs, getPlaylistDetails } from '@/service';
import { useDispatch } from 'react-redux';
import { changeMusicUrl, getMusicInfo } from '@/store/moudle/musicUrl';

interface IDataList {
  coverImgUrl: string;
  name: string;
  description: string;
}

interface ISongs {
  songs: Array<any>;
  privileges: Array<any>;
}

const Result: FC = () => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(0);
  const location = useLocation();
  const searchParams: URLSearchParams = new URLSearchParams(location.search);
  const [songs, setSongs] = useState<ISongs>({
    songs: [],
    privileges: [],
  });
  const [dataList, setDataList] = useState<IDataList>({
    coverImgUrl: '',
    description: '',
    name: '',
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const id = JSON.parse(searchParams.get('id'));

  useEffect(() => {
    getPlayListDetailsFn(id);
    getPageNumber(id);
  }, [id]);
  /**
   * @author topu
   * @date 2023/6/8
   * @Description 获取歌单详情
   * @return 返回值
   * @param id
   */
  const getPlayListDetailsFn = async (id: number): Promise<void> => {
    try {
      const res: any = await getPlaylistDetails({
        id: id,
        offset: 0,
        limit: 5,
      });
      setDataList(res.data.playlist);
      await getPlayListAllSongsFn(id);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * @author topu
   * @date 2023/6/9
   * @Description 获取歌单所有歌曲
   * @return 返回值
   * @param id
   */
  const getPageNumber = async (id: number): Promise<void> => {
    getPlaylistAllSongs({ id: id, offset: 0, limit: 0 })
      .then((res: any) => {
        setPageNum(res.data.songs.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**
   * @author topu
   * @date 2023/6/8
   * @Description 获取歌单所有歌曲
   * @return 返回值
   * @param id
   * @param offset
   * @param limit
   */
  const getPlayListAllSongsFn = (id: number, offset = 0, limit = 8) => {
    getPlaylistAllSongs({ id: id, limit: limit, offset: offset })
      .then((res: any) => {
        setSongs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * @author topu
   * @date 2023/6/8
   * @Description 将秒转换为mm:ss格式
   * @return 返回值
   */
  const conversionFormat = (time: number) => {
    time = Math.floor(time / 1000);
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, '0'); // 格式化分钟数，保证为两位数
    const formattedSeconds = String(remainingSeconds).padStart(2, '0'); // 格式化剩余的秒数，保证为两位数

    return `${formattedMinutes}:${formattedSeconds}`; // 返回格式化后的时间字符串
  };

  /**
   * @author topu
   * @date 2023/6/8
   * @Description 改变页数
   * @return 返回值
   */

  const changePage = (e: any) => {
    getPlayListAllSongsFn(id, (e - 1) * 8, 8);
  };

  /**
   * @author topu
   * @date 2023/6/8
   * @Description 播放音乐
   * @return 返回值
   */
  const playMusic = (item: any) => {
    getMusicUrl(item.id)
      .then((res: any) => {
        // 传递歌曲url到redux
        dispatch(changeMusicUrl(res.data.data[0].url));
        // 传递歌曲信息到redux
        dispatch(getMusicInfo(item));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <HyWrapper>
      <div className="resultBackground">
        <div className="resultTopBox">
          <div>
            <Image className="resultImage" preview={false} width={220} src={dataList.coverImgUrl} />
          </div>
          <div style={{ flex: 3, marginLeft: '60px' }}>
            <div
              className="title"
              style={{
                width: '100px',
                height: '30px',
                fontSize: '12px',
                fontWeight: '550',
                position: 'relative',
                top: '30px',
              }}
            >
              歌单
            </div>
            <div
              style={{
                fontSize: '55px',
                fontWeight: 700,
                marginTop: '30px',
              }}
            >
              {dataList.name}
            </div>

            <div
              style={{
                fontSize: '14px',
                width: '90%',
                letterSpacing: '1px',
                marginTop: '30px',
              }}
            >
              {dataList.description}
            </div>
            <div style={{ display: 'flex' }}>
              <img
                src={musicImage}
                alt="音乐网站"
                style={{
                  width: '30px',
                  height: '30px',
                  marginTop: '10px',
                  marginLeft: '10px',
                }}
              />
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  marginTop: '16px',
                  marginLeft: '10px',
                }}
              >
                SoundScape
              </div>
            </div>
          </div>
        </div>
        {/*展示的列表*/}
        <div className={'ListContainer'}>
          {songs.songs.map((item: any, index) => {
            return (
              <div key={index} className="list" onClick={() => playMusic(item)}>
                <div className="leftBox">
                  <div style={{ lineHeight: '60px' }}>{index + 1}</div>
                  <Image src={item.al.picUrl} className="imageBox"></Image>
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
                      key={index}
                      style={{
                        fontSize: '13px',
                        fontWeight: 550,
                        color: '#a2a2a2',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {item.ar.map((items: any, index: number) => {
                        return (
                          <div key={index} style={{ textAlign: 'center' }}>
                            {items.name}&nbsp;
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="album">{item.al.name}</div>
                <div className="time">{conversionFormat(item.dt)}</div>
              </div>
            );
          })}
          <Pagination
            defaultCurrent={2}
            pageSize={8}
            total={pageNum}
            onChange={(e) => changePage(e)}
            style={{ marginTop: '50px' }}
          />
        </div>
        ;
      </div>
    </HyWrapper>
  );
};

export default memo(Result);

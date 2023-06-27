import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MusicResultHyWrapper from '@/views/MusicResult/style';
import { Pagination } from 'antd';
import { changeMusicList } from '@/store/moudle/musicList';
import { getSearchSuggestion, toSearchSongsResult } from '@/service';
import { IMusicLists } from '@/views/MusicResult/MusicResult_type';
import { useLocation } from 'react-router';

function MusicResult() {
  // 获取传递过来的keyword
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
  const [page, setPage] = useState(0);
  useEffect(() => {
    setMusicLists(MusicList);
  }, [MusicLists]);
  console.log(MusicLists);
  /**
   * @author topu
   * @date 2023/6/27
   * @Description 播放音乐
   * @return 返回值
   * @param item
   */
  const playMusic = (item: any) => {
    console.log(item);
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
    setPage(e.current);
    toSearchSongsResult(keyword || '', 90, page).then((res: any) => {
      console.log(res);
    });
  };

  return (
    <MusicResultHyWrapper>
      {/*展示的列表*/}
      <div className={'ListContainer'}>
        <div className="resultTitle">为您搜索到：{MusicLists.result.songCount}条结果</div>
        {MusicLists.result.songs.map((item: any, index: number) => {
          return (
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
                    key={index}
                    style={{
                      fontSize: '13px',
                      fontWeight: 550,
                      color: '#a2a2a2',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {item.artists.map((items: any, index: number) => {
                      return (
                        <div key={index} style={{ textAlign: 'center' }}>
                          {items.name}&nbsp;
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="album">{item.album.name}</div>
              <div className="time">{conversionFormat(item.duration)}</div>
            </div>
          );
        })}
        <Pagination
          defaultCurrent={1}
          pageSize={8}
          total={MusicLists.result.songCount}
          onChange={(e) => changePage(e)}
          style={{ marginTop: '50px' }}
        />
      </div>
    </MusicResultHyWrapper>
  );
}

export default memo(MusicResult);

import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Input } from 'antd';
import HySearchWrapper from '@/views/search/style';
import {
  getHotSearchSongs,
  getPlayListCategory,
  getSearchSuggestion,
  toSearchSongsResult,
} from '@/service';
import { IGetPlaylistDetails } from '@/service/type';
import { useNavigate } from 'react-router-dom';
import { Button, Popover } from 'antd';
import { changeMusicList } from '@/store/moudle/musicList';
import { useDispatch } from 'react-redux';

const { Search } = Input;

const DownLoad: FC = function () {
  const [text, setText] = useState('');
  const [hotSongsList, setHotSongsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getPlayListCategoryFn();
    getHotSearchSongsFn();
  }, []);
  /**
   * @author topu
   * @date 2023/6/11
   * @Description 获取歌单分类
   * @return 返回值
   */
  const getPlayListCategoryFn = () => {
    getPlayListCategory()
      .then((res: any) => {
        setCategoryList(res.data.tags);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**
   * @author topu
   * @date 2023/6/11
   * @Description 发起搜索请求
   * @return 返回值
   * @param value
   */
  const onSearch = (value: string) => {
    // 判断搜索框是否有内容
    if (value) {
      toSearchSongsResult(value, 90, 0).then((res: any) => {
        console.log(res.data.result.songs);
        dispatch(changeMusicList(res.data));
        // 跳转到歌曲搜索结果界面
        navigate(`/MusicResult?keyword=${value}`);
      });
      // navigate(`/Result?id=${value}`);
    } else {
      return false;
    }
  };
  // 分类卡片的背景颜色
  const getRandomColor = () => {
    const colors = [
      '#ff7a45',
      '#fa8c16',
      '#ff4d4f',
      '#ffc53d',
      '#fff566',
      '#bae637',
      '#73d13d',
      '#36cfc9',
      '#9254de',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  /**
   * @author topu
   * @date 2023/6/9
   * @Description 携带id跳转到result界面
   * @return 返回值
   * @param item
   */
  const getPlaylistDetailsFn = (item: IGetPlaylistDetails) => {
    navigate(`/Result?id=${item.id}`);
  };
  /**
   * @author topu
   * @date 2023/6/9
   * @Description 获取热搜歌曲
   * @return 返回值
   */
  const getHotSearchSongsFn = () => {
    getHotSearchSongs()
      .then((res: any) => {
        setHotSongsList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**
   * @author topu
   * @date 2023/6/9
   * @Description 获取点击的文字
   * @return 返回值
   */
  const getText = (item: { searchWord: string }) => {
    setText(item.searchWord);
  };
  /**
   * @author topu
   * @date 2023/6/10
   * @Description 搜索框聚焦获取搜索建议
   * @return 返回值
   */
  const getSearchSuggestionFn = async (e: any) => {
    setText(e.target.value);
    getSearchSuggestion(e.target.value)
      .then((res: any) => {
        if (res.data.result.songs.length !== 0) {
          setSearchResult(res.data.result.songs);
        } else {
          setSearchResult([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**
   * @author topu
   * @date 2023/6/11
   * @Description 点击建议歌曲更改文本框内容
   * @return 返回值
   * @param item
   */
  const toSearchResult = (item: any) => {
    setText(item.name);
  };
  return (
    <HySearchWrapper>
      <Search
        value={text}
        className="searchBox"
        placeholder="想听什么"
        allowClear
        enterButton="搜一下"
        size="large"
        onSearch={onSearch}
        onChange={(e) => getSearchSuggestionFn(e)}
      />
      {/*搜索结果*/}
      <div className="searchResult">
        {searchResult.map((item: { name: string }, index) => {
          return (
            <div key={index} className="searchResultItem" onClick={() => toSearchResult(item)}>
              {item.name}
            </div>
          );
        })}
      </div>

      <div className="hotSongs">
        <div
          style={{
            marginLeft: '2px',
            fontSize: '50px',
            fontWeight: '550',
            width: '100%',
            height: '100px',
          }}
        >
          热门搜索
        </div>
        <div
          style={{
            width: '100%',
            height: '300px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {hotSongsList.map((item: any, index: number) => (
            <div key={index} className="hotSongsItem" onClick={() => getText(item)}>
              <Popover
                content={
                  <div>
                    <p>{item.content || '无'}</p>
                  </div>
                }
                title="描述"
                trigger="hover"
              >
                <Button>{item.searchWord}</Button>
              </Popover>
            </div>
          ))}
        </div>
      </div>

      <div className="cardBox">
        {categoryList.map((item: any, index: number) => (
          <div key={index} className="cardBox" onClick={() => getPlaylistDetailsFn(item)}>
            <div className="cardBoxItem" style={{ backgroundColor: getRandomColor() }}>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </HySearchWrapper>
  );
};

export default memo(DownLoad);

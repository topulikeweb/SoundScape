import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Input } from 'antd';
import HySearchWrapper from '@/views/search/style';
import { getHotSearchSongs, getPlayListCategory } from '@/service';
import { IGetPlaylistDetails } from '@/service/type';
import { useNavigate } from 'react-router-dom';
import { Button, Popover } from 'antd';

const onSearch = (value: string) => console.log(value);
const { Search } = Input;

const DownLoad: FC = function () {
  const [text, setText] = useState('');
  const [hotSongsList, setHotSongsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getPlayListCategoryFn();
    getHotSearchSongsFn();
  }, []);

  const getPlayListCategoryFn = () => {
    getPlayListCategory()
      .then((res: any) => {
        setCategoryList(res.data.tags);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        console.log(res.data.data);
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
      />

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

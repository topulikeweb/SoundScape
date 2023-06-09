import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FC, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HyPlayerWrapper from '@/components/player/style';
import { Image } from 'antd';
import musicImage from '@/assets/musicImage.png';

interface MusicInfo {
  name: string;
  al?: {
    picUrl?: string;
    name?: string;
  };
}

const Player: FC = () => {
  const musicUrl = useSelector((state: any) => state.music.musicUrl);
  const musicInfo = useSelector((state: any) => state.music.musicInfo);
  const [currentMusicUrl, setCurrentMusicUrl] = useState('');
  const [currentMusicInfo, currentSetMusicInfo] = useState<MusicInfo>({
    name: '',
    al: {
      picUrl: '',
      name: '',
    },
  });
  useEffect(() => {
    currentSetMusicInfo(musicInfo);
    setCurrentMusicUrl(musicUrl);
  }, [musicUrl]);
  console.log(musicInfo.al);
  return (
    <HyPlayerWrapper>
      <div className="containerBox">
        <AudioPlayer
          style={{
            flex: '6',
            height: '100px',
            backgroundColor: '#000000',
          }}
          autoPlay
          src={currentMusicUrl}
          onPlay={() => console.log('onPlay')}
          // other props here
        />
        {/*展示播放的歌曲*/}
        <div
          style={{
            // width: '5vw',
            flex: '1',
            height: '100px',
            backgroundColor: '#000000',
            display: 'flex',
          }}
        >
          <div>
            {/*这里al可能不存在，当第一次进入的时候就会报错，因此用？表示不是必须存在*/}
            <Image className="imageBox" src={currentMusicInfo.al?.picUrl || musicImage}></Image>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="nameBox">{currentMusicInfo.name}</div>
            <div className="nameBox">{currentMusicInfo.al?.name || ''}</div>
          </div>
        </div>
      </div>
    </HyPlayerWrapper>
  );
};

export default memo(Player);

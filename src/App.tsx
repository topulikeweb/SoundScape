import { memo, Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '@/router';
import SideNavigation from '@/components/sideNavigation/sideNavigation';
import { ConfigProvider } from 'antd';
import TopNavigation from '@/components/topNavigation/topNavigation';
import Player from '@/components/player/Player';
import AppHyWrapper from '@/assets/css/reset';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9254de',
        },
      }}
    >
      <AppHyWrapper>
        <div className="App">
          <SideNavigation></SideNavigation>
          <TopNavigation></TopNavigation>
          <Suspense fallback="">
            <div className="contentBox">{useRoutes(routes)}</div>
          </Suspense>
          <Player />
        </div>
      </AppHyWrapper>
    </ConfigProvider>
  );
}

export default memo(App);

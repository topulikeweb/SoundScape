import { memo, Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '@/router';
import SideNavigation from '@/components/sideNavigation/sideNavigation';
import { ConfigProvider } from 'antd';
import TopNavigation from '@/components/topNavigation/topNavigation';

import Player from '@/components/player/Player';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9254de',
        },
      }}
    >
      <div className="App">
        <SideNavigation></SideNavigation>
        <TopNavigation></TopNavigation>
        <Suspense fallback="">
          <div className="contentBox">{useRoutes(routes)}</div>
        </Suspense>
        <Player />
      </div>
    </ConfigProvider>
  );
}

export default memo(App);

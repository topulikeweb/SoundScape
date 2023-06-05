import { memo, Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '@/router';
import SideNavigation from '@/components/sideNavigation/sideNavigation';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';

function App() {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count,
    }),
    shallowEqual,
  );

  return (
    <div className="App">
      {/*<div className="nav">*/}
      {/*  <Link to="/discovery">发现音乐</Link>*/}
      {/*  <Link to="/mine">我的音乐</Link>*/}
      {/*  <Link to="/focus">关注</Link>*/}
      {/*  <Link to="/download">下载客户端</Link>*/}
      {/*</div>*/}
      {/*<h2>当前计数：{count}</h2>*/}
      <SideNavigation></SideNavigation>
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default memo(App);

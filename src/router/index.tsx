import { RouteObject } from 'react-router';

import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Discovery = lazy(() => import('@/views/discovery'));
const Mine = lazy(() => import('@/views/mine'));
const Focus = lazy(() => import('@/views/focus'));
const DownLoad = lazy(() => import('@/views/downLoad'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discovery" />,
  },
  {
    path: '/discovery',
    element: <Discovery />,
  },
  {
    path: '/Focus',
    element: <Focus />,
  },
  {
    path: '/DownLoad',
    element: <DownLoad />,
  },
  {
    path: '/Mine',
    element: <Mine />,
  },
];

export default routes;

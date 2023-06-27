import { RouteObject } from 'react-router';

import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
import MusicResult from '@/views/MusicResult';

const Result = lazy(() => import('@/views/result'));
const Discovery = lazy(() => import('@/views/discovery'));
const Mine = lazy(() => import('src/views/mine'));
const Focus = lazy(() => import('@/views/focus'));
const Search = lazy(() => import('@/views/search'));

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
    path: '/Search',
    element: <Search />,
  },
  {
    path: '/Mine',
    element: <Mine />,
  },
  {
    path: '/Result',
    element: <Result />,
  },
  {
    path: '/MusicResult',
    element: <MusicResult />,
  },
];
export default routes;

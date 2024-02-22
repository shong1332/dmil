import NotFound from '../pages/nonFound/NotFound';
import Landing from '../pages/landing/Landing';

export const basicRoutes = [
  // Route 에서 사용하는 props 요소들과 동일
  { path: '/', element: <Landing /> },
  { path: '*', element: <NotFound /> },
];

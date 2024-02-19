
import  NotFound  from '../pages/nonFound/NotFound';
import Landing from '../pages/landing/Landing'


// 라우터 이슈로 인한 임시 함수 1104 이동훈


export const basicRoutes = [
  // Route 에서 사용하는 props 요소들과 동일
  { path: '/', element: <Landing /> },
  { path: '*', element: <NotFound /> },
];

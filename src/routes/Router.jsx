import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import List from "../components/List";
import Detail from "../components/Detail.jsx";
import NotFound from "../components/errors/NotFound.jsx";

const router = createBrowserRouter([
  // 라우터 정의
  {
    // element 속성 : 해당 경로로 이동할 때 렌더링할 컴포넌트 지정
    element: <App />, // 최상위 요소: App이다. 어디서 와도 처음에 App 페이지로 오게 함.
    children: [ // children 속성: <Outlet>에 출력할 자식 컴포넌트 지정
      {
        path: '/',
        loader: async () => {
          // 컴포넌트 외부에서 프로그래밍 방식으로 페이지 이동
          return redirect('/list');
        }
      },
      {
        path: '/list', // /url의 path에 /list로 접근할 시 보여줄 자식 컴포넌트 설정
        element: <List />
      },
      {
        path: '/detail',
        element: <Detail />
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ]
  }
]);

function Router() {
  return <RouterProvider router={router}/>
};

export default Router;
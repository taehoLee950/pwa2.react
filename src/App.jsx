import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  // 컴포넌트 내부에서 프로그래밍 방식으로 페이지 이동을 구현
  const navigate = useNavigate(); 

  const submitBtn = () => {
    navigate('/submitBtn');
  } 

  return (
    <>
      <header>
        <h1>앱</h1>
        <div className="nav">
          <Link to={'./list'}>리스트 페이지</Link>
          <Link to={'./detail'}>리스트 페이지</Link>
          <br />
          <NavLink to={'./list'}>리스트 페이지</NavLink>
          <NavLink to={'./detail'}>리스트 페이지</NavLink>
          <br />
          <button type="button" onClick={submitBtn}>확인</button>
        </div>
      </header>

      <main>
        {/* Outlet : 라우터의 자식 컴포넌트를 출력할 위치를 지정 */}
        <Outlet></Outlet>
      </main>

      <footer>
        <p>copyright</p>
      </footer>
    </>
  )
}

export default App;
// css는 'import'로 불러오고 경로를 지정한다.
import { useState } from 'react';
import './App.css';

function App() {
  // js 코드 영역
  const title = '제목';
  const titleStyle = {
    color: 'blue',
    fontSize: '1rem'
  };
  // state하기 const[stateName, setVarName] = useState(initial value);
  const [count, setCount] = useState(0);

  const increamentCount = () => {
    setCount((prev) => prev + 1);
  }
  const decreamentCount = () => {
    setCount((prev) => prev - 1);
  }

  // 단방향 예시
  const [account, setAccount] = useState('');

  // backend로 객체 데이터를 받는 예시
  const [userInfo, setUserInfo] = useState({
    name: '홍길동',
    age: 20,
    gender: 'M'
  });

    // primitive 타입과 reference 타입 사용 시 다른점 예시 *되는 버전
    // re-rendering이 되는 원리는 참조하는 주소가 다를 때 re-rendering을 하는것이다.
  const addAge = () => {
    const copy = {...userInfo};
    copy.age += 1;
    setUserInfo(copy);
  }
  
  
  
  const [flg, setFlg] = useState(true);
  return (
    // html 코드 영역 (jsx문법 사용)
    // js 변수는 { }를 사용해 불러온다.
    // 같은걸 여러번 사용할때 빈 '< >'를 사용해서 depth를 줘야한다
    // jsx와 css를 사용하려면 두 컴포넌트의 이름이 같아야한다.
    // css의 class를 html에 적용하려면 'className="className" 을 사용해서 불러온다.
    <>
      

      {/* 조건부 렌더링 */}
      <button type="button" onClick={() => { setFlg(!flg) }}>Flg</button>
      {/* { flg ? <h1>조건부 렌더링</h1> : null} */}
      { flg && <h1>조건부 렌더링</h1>}
      <br /><br />

      <span>{`${userInfo.name} : ${userInfo.age} : ${userInfo.gender} : `}</span>
      <button type="button" onClick={addAge}>나이 증가</button>
      <br />

      <input type="text" value = {account} onChange = {(e) => {setAccount(e.target.value)}}/>
      <p>{account}</p>

      <p>{count}</p>
      <button type="button" onClick= {increamentCount}>+</button>
      <button type="button" onClick= {decreamentCount}>-</button>
      {/* 실습1 조건부 렌더링 해봅시다 */}
      {count >= 10 && <h1>{count}</h1>}
      <h1 className="title" style={{color: 'red', fontSize: '3rem'}}>{title}</h1> 
      <h1 style={titleStyle}>{title}</h1> 
    </> 
  )
}

export default App;




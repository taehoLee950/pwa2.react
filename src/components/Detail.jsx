import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { addCnt, changeCnt, minusCnt } from '../store/slices/detail';
import { useState } from 'react';

function Detail() {
  const dispatch = useDispatch();
  const cnt = useSelector(state => state.detail.cnt);

  const [inputNum, setInputNum] = useState(0);

  const convertAndSetNumber = (e) => {
    if(!isNaN(e.target.val)) {
      setInputNum(parseInt(e.target.val));
    } else {
      console.error('숫자 아니다.');
    }
  }
  return (
    <>
      <h1>상세 페에지</h1>
      <p>{cnt}</p>
      <input type="number" onChange={(e) => {setInputNum(e.target.value)}}/>
      <button type="button" onClick={() => { dispatch(changeCnt(inputNum)) }}>입력</button>
      <button type="button" onClick={() => dispatch(addCnt())}>+</button>
      <button type="button" onClick={() => dispatch(minusCnt())}>-</button>
    </>
  )
}

export default Detail;
















// 작동되는 코드 backup
// import './Detail.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

// // [A] 스토어에 보낼 액션 함수를 가져옵니다.
// import { setInputValue } from '../store/detail';

// function Detail() {
//   // [B] useSelector: 스토어의 상태 값(state.detail.inputValue)을 가져옵니다.
//   // 스토어 값이 바뀌면 컴포넌트가 자동으로 업데이트됩니다.
//   const storedValue = useSelector(state => state.detail.inputValue);

//   // [C] useState: 컴포넌트 안에서 사용할 로컬 상태(현재 입력 값)를 만듭니다.
//   const [currentInput, setCurrentInput] = useState('');

//   // [D] useDispatch: 액션을 스토어에 보내기 위한 함수를 준비합니다.
//   const dispatch = useDispatch();

//   // [E] '입력' 버튼을 클릭했을 때 실행될 함수입니다.
//   const handleButtonClick = () => {
//     // [F] dispatch를 사용해, 입력 값을 담은 'setInputValue' 액션을 스토어로 보냅니다.
//     dispatch(setInputValue(currentInput));
//   };

//   return(
//     <>
//       <h1>상세 페이지</h1>
//       {/* [G] 스토어에서 가져온 값을 화면에 보여줍니다. */}
//       <p>스토어에 저장된 값: {storedValue}</p>

//       {/* [H] 입력창: 사용자가 입력한 값은 currentInput 로컬 상태에 저장됩니다. */}
//       <input 
//         type="number" 
//         value={currentInput} 
//         onChange={(e) => setCurrentInput(e.target.value)} 
//       />
//       {/* [I] 버튼: 클릭하면 위에서 만든 handleButtonClick 함수가 실행됩니다. */}
//       <button type="button" onClick={handleButtonClick}>입력</button>
//     </>
//   )
// }

// export default Detail;
















// 작동되는 코드 backup
// import './Detail.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

// // [A] 스토어에 보낼 액션 함수를 가져옵니다.
// import { setInputValue } from '../store/detail';

// function Detail() {
//   // [B] useSelector: 스토어의 상태 값(state.detail.inputValue)을 가져옵니다.
//   // 스토어 값이 바뀌면 컴포넌트가 자동으로 업데이트됩니다.
//   const storedValue = useSelector(state => state.detail.inputValue);

//   // [C] useState: 컴포넌트 안에서 사용할 로컬 상태(현재 입력 값)를 만듭니다.
//   const [currentInput, setCurrentInput] = useState('');

//   // [D] useDispatch: 액션을 스토어에 보내기 위한 함수를 준비합니다.
//   const dispatch = useDispatch();

//   // [E] '입력' 버튼을 클릭했을 때 실행될 함수입니다.
//   const handleButtonClick = () => {
//     // [F] dispatch를 사용해, 입력 값을 담은 'setInputValue' 액션을 스토어로 보냅니다.
//     dispatch(setInputValue(currentInput));
//   };

//   return(
//     <>
//       <h1>상세 페이지</h1>
//       {/* [G] 스토어에서 가져온 값을 화면에 보여줍니다. */}
//       <p>스토어에 저장된 값: {storedValue}</p>

//       {/* [H] 입력창: 사용자가 입력한 값은 currentInput 로컬 상태에 저장됩니다. */}
//       <input 
//         type="number" 
//         value={currentInput} 
//         onChange={(e) => setCurrentInput(e.target.value)} 
//       />
//       {/* [I] 버튼: 클릭하면 위에서 만든 handleButtonClick 함수가 실행됩니다. */}
//       <button type="button" onClick={handleButtonClick}>입력</button>
//     </>
//   )
// }

// export default Detail;

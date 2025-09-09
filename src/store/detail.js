import { createSlice } from '@reduxjs/toolkit';

// 1. 이 슬라이스가 관리할 초기 데이터(상태)를 정의합니다.
const initialState = {
  inputValue: '',
};

// 2. 슬라이스를 만듭니다. 슬라이스는 액션과 리듀서를 한번에 정의하는 곳입니다.
export const detailSlice = createSlice({
  // 3. 슬라이스의 이름을 정의합니다. 이 이름은 액션 타입을 만들 때 사용됩니다. (예: 'detail/setInputValue')
  name: 'detail',
  // 4. 이 슬라이스의 초기 상태를 위에서 정의한 initialState로 설정합니다.
  initialState,
  // 5. 상태를 어떻게 변경할지에 대한 '레시피' 목록(리듀서)을 정의합니다.
  reducers: {
    // 6. 'setInputValue'라는 이름의 레시피(리듀서)를 만듭니다.
    // 이 이름으로 액션 생성자 함수가 자동으로 만들어집니다.
    setInputValue: (state, action) => {
      // 7. 이 레시피의 실제 실행 코드입니다.
      // state: 현재 이 슬라이스의 상태 객체
      // action: 컴포넌트에서 보낸 액션 객체 (payload 포함)
      // "현재 상태(state)의 inputValue 값을 액션의 payload 값으로 변경해라."
      state.inputValue = action.payload;
    },
  },
});

// 8. 다른 파일(컴포넌트)에서 사용할 수 있도록 액션 생성자 함수를 내보냅니다.
export const { setInputValue } = detailSlice.actions;

// 9. 스토어(중앙 통제실)가 이 슬라이스의 리듀서를 알 수 있도록 기본적으로 내보냅니다.
export default detailSlice.reducer;



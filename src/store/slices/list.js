import { createSlice } from "@reduxjs/toolkit";
import { getList } from "../thunks/listThunk";

// 'list' 상태관리 slice 생성 및 설정
const list = createSlice({
  name: 'list', // slice 명
  initialState: { // 상태 관리할 state를 정의하는 영역
    cnt: 0,
    list: null,
    loading: false,
  },
  reducers: { // state의 상태를 변화시키는 actions를 정의하는 영역
    addCnt(state) { // state param = initialState 의 값을 받아옴조
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -=1;
    },
    changeCnt(state, action) {
      // state param : 'initialState' 의 정보를 담고 있음.
      // action param : 외부에서 전달 된 값을 담고 있음.
      // action.payload : 전달된 값에 접근할 수 있는 프로퍼티
      state.cnt = action.payload;
    },
    clearList(state) {
      state.list = null;
    }
  },
  // thunk 지정
  extraReducers: builder => {
    builder
    // .addCase(getList.pending, (state) => {
    //   // `getList` Thunk의 처리가 대기중일때의 처리를 작성
    //   state.loading = true;
    // })
    .addCase(getList.fulfilled, (state, action) => {
      // `getList` Thunk의 처리가 성공일때의 처리를 작성
      state.list = action.payload;
      state.loading = false;
    })
    // .addCase(getList.rejected, (state) => {
    //   // `getList` Thunk의 처리가 실패일때의 처리를 작성
    //   state.loading = false;
    // });
    .addMatcher( // pending, loading 묶기
      action => action.type.endsWith('/pending'), //param 1 : 조건식이다. true or false 반환
      state => { //param 1의 반환값 true일 때 해당 처리 실행
        state.loading = true;
      }
    )
    .addMatcher( // pending, loading 묶기
      action => action.type.endsWith('/rejected'), //param 1 : 조건식이다. true or false 반환
      state => { //param 1의 반환값 true일 때 해당 처리 실행
        state.loading = false;
      }
    )
  }
});

// 정의한 Actions 내보내기
export const {
  addCnt, 
  changeCnt, 
  minusCnt, 
  clearList
} = list.actions;

// Reducer 내보내기
export default list.reducer;
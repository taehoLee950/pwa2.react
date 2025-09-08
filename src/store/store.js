import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slices/list.js';
import detailReducer from './slices/detail.js'; // 1. detail 리듀서 가져오기

//
export default configureStore ({
  reducer: {
    list: listReducer,
    detail: detailReducer, // 2. 스토어에 detail 리듀서 추가
  }
});
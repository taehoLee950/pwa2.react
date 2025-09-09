import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk(
  'list/getList', // thunk 고유명 (slice명/actionType 뭘 하는지)
  async () => {
    
    // AJAX처리, 서버의 특정 API 호출
    const url = 'https://picsum.photos/v2/list?page=1&limit=10';
    const response = await axios.get(url);

    // API 응답 반환, 'fulfilled' 액션의 payload로 전달
    return response.data;
  }
)

export const getTest = createAsyncThunk (
  'list/getTest',
  async () => {
    
  }
)
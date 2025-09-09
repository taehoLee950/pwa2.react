import { useDispatch, useSelector } from 'react-redux';
import './List.css';
import { addCnt, clearList, minusCnt } from '../store/slices/list.js';
import { getList } from '../store/thunks/listThunk.js';
import { useEffect } from 'react';

function List() {
  // State에 접근하는 방법
  const cnt = useSelector(state => state.list.cnt);

  // Action 접근 방법
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getList());

    return () => {
      dispatch(clearList());
    }
  }, []);

  const list = useSelector(state => state.list.list);
  const loading = useSelector(state => state.list.loading);
  return(
    <>
      <h1>리스트 페이지</h1>
      <p>{cnt}</p>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt())}}>-</button>
      { loading && <h2>loading...</h2>}
      <div className="card-container">
        {
          list && list.map(item => {
            return (
              <img src={item.download_url} width='100px' key={item.id} />
            )
          })
        }
      </div>
    </>
  )
}

export default List;
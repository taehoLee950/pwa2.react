import { useEffect, useState } from 'react';
import './ProductDetail.css'

function ProductDetail (props) {
  // props destructring
  const {product, setModalFlg} = props;
  const [cnt, setCnt] = useState(0);

  // Lifecycle Hooks
  // mount에서 실행 하고 싶을때 최초 1회만
  // useEffect(() => {
  //   console.log('Mount!!')
  // }, []);

  // unmount 전에 실행 : clean up function 작성
  // useEffect(() => {
  //   console.log('mount!!');

  //   // clean up fn
  //   return () => {
  //     console.log('un-mount')
  //   }
  // }, []);

  // state가 변할 때 마다 실행, mount후 최초 1회 실행
  useEffect(() => {
    console.log('test');
  }, [cnt])

  return ( 
    <>
      {/* <div className="detail-modal" onClick={() => {setModalFlg(false)}}> */}
      <div className="detail-modal">
        <div className="detail-box">
          <div className="detail-img" style={{backgroundImage: `url('${product.img}')`}}></div>
          <p className="detail-title">{product.title}</p>
          <p className="detail-info">{product.info}</p>
          <p className="detail-price">{product.price * cnt}</p>
          <p>{cnt}</p>
          <button type="button" onClick={() => { setCnt((prev) => prev + 1)}}>+</button>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;
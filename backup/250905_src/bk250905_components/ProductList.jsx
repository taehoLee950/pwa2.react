import { useState } from 'react';
import ProductDetail from './ProductDetail';
import './ProductList.css';


function ProductList () {
  const products = [
    {
      id: 0, 
      title:'물', 
      info: 'Aleska futuristic advanced super ultra supereme filtered by NaSSa', 
      price: `4000`, 
      img: 'https://picsum.photos/id/126/4272/2511'
    },

    {
      id: 1, 
      title:'다리', 
      info: '브룩클린 브릿지', 
      price: 12000, 
      img: 'https://picsum.photos/id/134/4928/3264'
    },

    {
      id: 2, 
      title:'그림', 
      info: '나우', 
      price: 50000, 
      img: 'https://picsum.photos/id/127/4032/2272'
    }
  ]
  const [modalFlg, setModalFlg] = useState(false);

  const [propsProduct, setPropsProduct] = useState({});

  const viewModal = (item) => {
    setPropsProduct({...item});
    setModalFlg(true);
  }

  return (
      <>
      { modalFlg && <ProductDetail product={propsProduct} setModalFlg = {setModalFlg}></ProductDetail> }
        <div className="card-container">
          {
            products.map(item => {
              return(
                  <div className="card" key={item.id} onClick={() => {viewModal(item)}}>
                    <div className="card-img" style={{backgroundImage: `url('${item.img}')`}}></div>
                    <p className='card-title'>{item.title}</p>
                    <p className='card-price'>{item.price}</p>
                  </div>
              )
            })
          }
        </div>
    </>
  );
}

export default ProductList;
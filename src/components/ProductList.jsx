import './ProductList.css';

function ProductList () {
  const products = [
    {
      id: 0, title:'바지', 
      info: '얼룩진 바지', 
      price: `10000`, 
      img: 'https://picsum.photos/id/126/4272/2511'
    },

    {
      id: 1, 
      title:'티셔츠', 
      info: '허름한 티셔츠', 
      price: 12000, 
      img: 'https://picsum.photos/id/134/4928/3264'
    },

    {
      id: 2, 
      title:'양말', 
      info: '해진 양말', 
      price: 3000, 
      img: 'https://picsum.photos/id/127/4032/2272'
    }
  ]

  return (
    <>
      <div className="card-container">
        {
          products.map(item => {
            return(
                <div className="card" key={item.id}>
                  <div className="card-img" style={{backgroundImage: `url('${item.img}')`}}></div>
                  <p className='card-title'>{item.title}</p>
                  <p className='card-price'>{item.price}</p>
                </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ProductList;
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList.jsx"
import TabUi from "./components/TabUi.jsx";
import { useState } from "react";


function App() {
  const [prodFlg, setProdFlg] = useState(true);
  const [tabFlg, setTabFlg] = useState(false);
  
  const viewProductList = () => {
    setProdFlg(true);
    setTabFlg(false);
  } 

  const viewTabUi = () => {
    setProdFlg(false);
    setTabFlg(true);
  }

  return (
    <>
    <Header></Header>

    <main>
      <span onClick={viewProductList}>상품 리스트</span>
      <span onClick={viewTabUi}>테스트</span>
      { tabFlg && <TabUi></TabUi>}
      { prodFlg && <ProductList></ProductList>}
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
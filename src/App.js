import { useState } from "react";
import "./App.sass";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import PreFooter from "./Components/PreFooter/PreFooter";
import Footer from "./Components/Footer/Footer";
import BannerSlider from "./Components/BannerSlider/BannerSlider";
import BasketModal from "./Components/BasketModal/BasketModal";

const App = () => {
  const [showBasketModal, setShowBasketModal] = useState(false);
  const [basketData, setBasketData] = useState([]);
  console.log("basketData", basketData);
  return (
    <div className="App">
      <Header
        setShowBasketModal={setShowBasketModal}
        showBasketModal={showBasketModal}
      />
      <div className="Main">
        <BannerSlider />
        <Product basketData={basketData} setBasketData={setBasketData} />
        <PreFooter />
      </div>
      <Footer />
      {showBasketModal ? (
        <BasketModal basketData={basketData} setBasketData={setBasketData} />
      ) : null}
    </div>
  );
};

export default App;

// src={require("./Userpic.png")}
// onClick={() => changeStarState(item.id)}

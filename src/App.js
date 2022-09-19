import { useState } from "react";
import "./App.sass";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import PreFooter from "./Components/PreFooter/PreFooter";
import Footer from "./Components/Footer/Footer";
import BannerSlider from "./Components/BannerSlider/BannerSlider";
import BacketModal from "./Components/BacketModal/BacketModal";

const App = () => {
  const [showBasketModal, setShowBasketModal] = useState(true);
  const [basketData, setBasketData] = useState(true);
  return (
    <div className="App">
      <Header
        setShowBasketModal={setShowBasketModal}
        showBasketModal={showBasketModal}
      />
      <div className="Main">
        <BannerSlider />
        <Product />
        <PreFooter />
      </div>
      <Footer />
      {showBasketModal ? <BacketModal /> : null}
    </div>
  );
};

export default App;

// src={require("./Userpic.png")}
// onClick={() => changeStarState(item.id)}

import "./App.sass";
import Header from "./Components/Header/Header";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Product from "./Components/Product/Product";
import PreFooter from "./Components/PreFooter/PreFooter";
import Footer from "./Components/Footer/Footer";
import BannerSlider from "./Components/BannerSlider/BannerSlider";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <ShoppingCart /> */}
      <div className="Main">
        <BannerSlider />
        <Product />
        <ShoppingCart />
        <PreFooter />
      </div>
      <Footer />
    </div>
  );
};

export default App;

// src={require("./Userpic.png")}

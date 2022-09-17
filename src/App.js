import "./App.sass";
import Header from "./Components/Header/Header";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Product from "./Components/Product/Product";
import PreFooter from "./Components/PreFooter/PreFooter";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <ShoppingCart /> */}
      <div className="Main">
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

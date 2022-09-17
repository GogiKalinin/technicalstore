import React from "react";
import "./Product.sass";
import PlanshetImage from "../../Images/ProductImages/Planshet.png";
import ProcImage from "../../Images/ProductImages/Proc.png";
import ProcImage1 from "../../Images/ProductImages/Proc1.png";
// import image1 from "../../Images/ProductImages/Proc.png";
// import "../../Images/ProductImages/Proc1.png";
// import "../../Images/ProductImages/Planshet.png";
import Stars from "./Stars/Stars";

const Prod = [
  {
    id: 0,
    image: ProcImage,
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    oldPrice: "$499.00",
    newPrice: "$499.00",
  },
  {
    id: 1,
    image: ProcImage1,
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    oldPrice: "$799.00",
    newPrice: "$799.00",
  },
  {
    id: 2,
    image: PlanshetImage,
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    oldPrice: "$999.00",
    newPrice: "$999.00",
  },
];

const Product = () => {
  return (
    <div className="ProductContainer">
      {Prod.map((prod) => {
        return (
          <div className="Product" key={prod.id}>
            <div className="ProductImageContainer">
              <img className="ProductImage" src={prod.image} alt="img"></img>
            </div>
            <div className="ProductRating">{/* <Stars /> */}</div>
            <div className="ProductDescription">
              <p>{prod.title}</p>
            </div>
            <div className="ProductPrice">
              <p className="OldPrice">{prod.oldPrice}</p>
              <p className="NewPice">{prod.newPrice}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

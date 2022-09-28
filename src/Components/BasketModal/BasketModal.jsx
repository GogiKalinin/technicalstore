import React from "react";
import { CancelButton } from "../../Images/BasketModal/BasketModal";
import "./BasketModal.sass";

const BasketModal = (props) => {
  let basketArray = [];
  basketArray.push(props.basketData);
  console.log("basketArray", basketArray);

  return (
    <div className="BasketModalContainer">
      {basketArray.map((prod) => {
        return (
          <div className="BasketProdContainer" key={prod.id}>
            <img src={prod.image} alt="img"></img>
            <span>{prod.title}</span>
            <h1>{prod.newPrice}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default BasketModal;

// Крок 1.
//     Додати клікнутий товар у basketData.
//      ?question: Какую роль играет (как работает)в onClick  данная конструкция: "() =>"?
//
// Крок 1.1.
//     В функції selectProduct створити пустий масив.
//
// Крок 1.2.
//      У цей масив помістити актуальне значення backetData
//
//  Крок 1.3
//      Додати до цього (щойно створеного) методом push
//    вибраний продукт (приходить як prod).
//
//  Крок 2.
//      Передати за допомогою props basketData до BasketModal
//
//  Крок 3.
//      Використовуючи  метод масиву map відмалювати у корзині наші товари
//    (поля name і image)
//
//        IMPORTANT!
//      Якщо basketData не мітить жодного елементу,
//    то при відображенні модального вікна повідомити
//    про необхідність вибору товару (корзина пуста).
//
//        important too
//     Коли пишеш логіку в функції коментуй in ukaraine each крок.

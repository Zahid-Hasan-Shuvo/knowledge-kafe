import React from "react";
import "./Cart.css";

const Cart = ({bookMarks}) => {
 

  let title = "";

  for (const singleCart of cart) {
    title = singleCart.title;
  }
  return (
    <div className="cart">
      <h3> Spent time on read = min</h3>
      <h3>bookmark Blog:{cart.length} </h3>
      <p>{title}</p>
    </div>
  );
};

export default Cart;

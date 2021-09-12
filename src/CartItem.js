import React from "react";
import "./CartItem.css";

function CartItem({ text, desc, price, img }) {
  return (
    <div className="cartItemContainer">
      <h6>{text}</h6>
      <p>{desc}</p>
      <p>{price}</p>
    </div>
  );
}

export default CartItem;

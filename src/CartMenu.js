import React from "react";
import CartItem from "./CartItem";
import "./CartMenu.css";

function CartMenu({ setShowCart }) {
  return (
    <div className="cartMenuContainer">
      <div className="cartMenuImportantInfo">
        <span onClick={() => setShowCart(false)}>close</span>
        <h3>Total: $150</h3>
      </div>

      <div className="cartItemListContainer">
        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>

        <CartItem
          text="Hat"
          desc="a hat of fine quality"
          price="$100"
        ></CartItem>
      </div>
      <div className="checkoutButtonContainer">
        <h2>CHECKOUT</h2>
      </div>
    </div>
  );
}

export default CartMenu;

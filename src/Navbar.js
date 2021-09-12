import React, { useState } from "react";
import CartMenu from "./CartMenu";
import "./Navbar.css";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="navBarContainer">
      <div className="storeLogo">Store Logo</div>
      <NavbarItem text="Men"></NavbarItem>
      <NavbarItem text="Women"></NavbarItem>
      <NavbarItem text="Kids"></NavbarItem>
      <NavbarItem text="Baby"></NavbarItem>
      <div onClick={() => setShowCart(true)}>Cart</div>
      {showCart && <CartMenu setShowCart={setShowCart}></CartMenu>}
    </div>
  );
}

export default Navbar;

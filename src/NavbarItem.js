import React from "react";
import "./NavbarItem.css";

function NavbarItem({ text }) {
  return (
    <div
      tabIndex="1"
      className={
        text == "Men" || text == "Kids" ? "specialItem" : "regularItem"
      }
    >
      {text}
    </div>
  );
}

export default NavbarItem;

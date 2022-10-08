import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [cartState,setCartState]=useState(true)

  function handleClick(){
setCartState((cart)=>!cart)
  }
  const cart = cartState? "Add to Cart": "Remove From Cart"
  const liName = cartState? " " : "in-cart"
  return (
    <li className={liName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cart}</button>
    </li>
  );
}

export default Item;

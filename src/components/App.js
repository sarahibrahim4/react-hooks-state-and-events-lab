import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isDark,setDark]=useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"
  function handleClick(){
  setDark((isDark)=>!isDark)
  }
  const mode = isDark? "Dark Mode" :"Light Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

import React from "react";
import "./Cart.css";
function Cart({items}) {
    return (
      <div>
        <h1 style={{color: "white"}}>Your Cart</h1>
      <div className="items-container">
        {items.map(drink => {
       return (
        <div className="item-wrap">      
         <img src={drink.img} width={100} height={100} alt="img"/>
       <span>{drink.name}</span>
       <div>{drink.price}</div>
       <div>Qty: </div>
       </div>
       )
      })}
      </div>
      </div>
    )
}

export default Cart;
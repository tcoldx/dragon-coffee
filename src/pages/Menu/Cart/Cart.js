import React, { useState } from "react";
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md";
import "./Cart.css";
function Cart({items, doesExist, handleDecrement, handleIncrement}) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
    return (
      <div className="con"> 
        {show && <div className="menu-container">
          <div className="menu-wrap">
            <h1>coming soon...</h1>
            <button className="button" onClick={handleClose}>Close</button>
            </div>
          </div>}
        <h1 style={{color: "white"}}>Your Cart</h1>
      <div className="items-container">
        {items.map(drink => {
       return (
        <div key={drink.name} className="item-wrap">      
         <img src={drink.img} width={100} height={100} alt="img"/>
       <span>{drink.name}</span>
       <div>{drink.price}</div>
      
       <div className="quantity-container">Qty: <MdOutlineArrowBackIosNew onClick={() => handleDecrement(drink)} style={{cursor: "pointer"}}/>{drink.quantity}<MdOutlineArrowForwardIos onClick={() => handleIncrement(drink)} style={{cursor: "pointer"}}/></div> 
       
       </div>
       )
      })}
      </div>
      {doesExist ?
      (
      <div className="pay-container">
        <button className="button" onClick={handleClick}>Pay Now!</button>
      </div>) : (
        <div>
        <h1 className="item-header">Their are no items in your cart...</h1>
      </div>
      )}
      
     
      </div>
    )
}

export default Cart;
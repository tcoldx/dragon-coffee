import React from "react";
import Caramel from '../../Images/caramelfrappe.jpg';
import Green from '../../Images/greenfrappe.jpg';  
import Pink from '../../Images/pinkfrappe.jpg'; 
import Choco from '../../Images/chocofrappe.jpg';
import Jollo from '../../Images/jollafrappe.jpg';
import Vanilla from '../../Images/hot frappe.jpg';
import Irish from '../../Images/irish coffee.jpg';
import Latte from '../../Images/lattefrappe.jpg';
import {TiPlusOutline} from "react-icons/ti";
import "./Menu.css";

function Menu(props) {
    const coffeeArray = [
        {name: "Caramel Frappe", img: Caramel, price: 2.12},
        {name: "Chocolate Frappe", img: Choco, price: 5.13},
        {name: "Mint Frappe", img: Jollo, price: 3.72},
        {name: "Vanilla Frappe", img: Vanilla, price: 3.21},
        {name: "Latte Frappe", img: Pink, price: 5},
        {name: "Green Tea Frappe", img: Green, price: 3},
        {name: "Popcorn Frappe", img: Irish, price: 3.45},
        {name: "Crunch Caramel Frappe", img: Latte, price: 6.23},   
    ]
    const handleClick = (item) => {
        props.handleItems(item)
    }
    return (
        <div className="container">
            <div className="outer-card">
         
                {coffeeArray.map(item => {
                    return (
                        <div className="inner-card">
                        <img width={200} height={200} src={item.img} alt="img"/>
                <div className="bottom">
                <div className="purchase-container">
                <span>${item.price}</span>
                    <div className="add-button" onClick={() => handleClick(item)}><TiPlusOutline/></div>
                    </div>
                    </div>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Menu;
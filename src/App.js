import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Menu/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
const [items, setItems] = useState([]);
const [count, setCount] = useState(0);
const [isItems, setIsItems] = useState(false);

  const handleItems = async (list) => {
    setItems([...items, list]);
    setCount(count + 1);
    list.quantity = 1;
   setIsItems(true);
  };
  

  const handleDecrement = (list) => {
    if (list.quantity <= 0) return; 
    setCount(count - 1);
    list.quantity = list.quantity - 1;
    const newList = items.filter(el => el.quantity <= 0 ? el.name !== list.name : el);
    setItems(newList);
    if (newList.length <= 0) {
      setIsItems(false);
    }
    
  }

  const handleIncrement = (list) => {
    setCount(count + 1);
    list.quantity = list.quantity + 1;
  }

  return (
    <div className="App">
      <Router>
      <Header count={count} />
      <Routes>
      <Route exact path="/" element={<Content/>} />
      <Route exact path="/menu" element={<Menu handleItems={handleItems} />} />
      <Route exact path="/cart" element={<Cart doesExist={isItems}handleDecrement={handleDecrement} handleIncrement={handleIncrement} items={items} />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

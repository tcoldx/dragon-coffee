import React, {useState} from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Menu/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
const [items, setItems] = useState([]);
  const handleItems = (list) => {
    setItems([...items, list]);
  };

  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Content/>} />
      <Route exact path="/menu" element={<Menu handleItems={handleItems} />} />
      <Route exact path="/cart" element={<Cart items={items} />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import Dragon from "../../Images/logo.png";
import {AiOutlineShopping} from "react-icons/ai";
import { Link } from "react-router-dom";
import { HeaderWrap, MenuWrap, StyledLink, StyledCart} from "./Header.styles";
const Header = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div>
      <HeaderWrap>
        <div className="logoandtitle">
          <Link exact to={`/`}><img width={60} height={60} src={Dragon} alt="img" /></Link>
          <div className="title">Dragon Coffee</div>
        </div>

        <MenuWrap>
          <ul>
            <StyledLink exact to={`/menu`}><li className="link">Menu</li></StyledLink>
            <li className="link">Trending</li>
            <li className="link">Rewards</li>
            <li className="link">Gift Cards</li>
            <li className="link">About</li>
          </ul>
        </MenuWrap>
        <div className="whole">
        <div className="itemContainer">
      <StyledCart exact to="/cart"><AiOutlineShopping onClick={handleClick} className="cart" size={25}/></StyledCart>
        </div>
        </div>
      </HeaderWrap>
    </div>
  );
};

export default Header;

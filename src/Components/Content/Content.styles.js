import styled from "styled-components";
import img from "../../Images/line.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: contain;

  & h1 {
    color: white;
    font-style: italic;
    font-weight: 400;
    font-family: "EB Garamond", serif;
    font-size: 135px;
    letter-spacing: 0px;
    line-height: 1.1;
  }

  & h2 {
    color: white;
    font-family: "EB Garamond", serif;
    font-size: 22px;
    font-weight: 400;
    font-style: normal;
  }

  & h3 {
    color: white;
    font-size: 32px;
    font-family: "Quicksand", sans-serif;
    margin-top: -40px;
  }

  & .shop-button {
    border: none;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
    background: lightgreen;
    border-radius: 8px;
    width: 20vw;

    cursor: pointer;
    padding: 12px;
    color: white;
  }
`;

export const Line = styled.div`
  margin-bottom: 15px;
  padding-bottom: 10px;
  background-image: url(${img});
  background-position: left;
  background-repeat: repeat-x;
  transition-duration: 0.4s;
  transition-property: background-color, border-color;
`;

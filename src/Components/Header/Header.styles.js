import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  color: white;
  background: rgba(144, 93, 74, 0.4);
  justify-content: space-around;

  & .logoandtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 43px;
  }

  & .title {
    font-family: "Water Brush", cursive;
    font-size: 22px;
  }


  & .itemContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;

export const StyledCart = styled(Link)`
text-decoration: none;
color: white;
display: flex;
justify-content: center;
align-items: center;
`

export const StyledLink = styled(Link)`
text-decoration: none;
color: white;
`;

export const MenuWrap = styled.div`
  font-family: "Quicksand", sans-serif;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  gap: 10px;

  & ul {
    display: flex;
    list-style: none;

    & li {
      margin: 0 1rem;
    }
  }

  & .link:hover {
    color: black;
    cursor: pointer;
  }
`;

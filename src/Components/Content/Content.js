import React from "react";

import { Container, Line } from "./Content.styles";

function Content() {
  let quote = "Exclusive Coffee Blends";
  return (
    <Container>
      <h1>Dragon Coffee</h1>
      <Line></Line>
      <h3>{quote.toUpperCase()}</h3>
      <h2> 2069 Arena Blvd #130, Sacramento, CA 95834</h2>
      <h2>Opening hours: Mon-Fri 6am-5pm</h2>
      <h2>Call: (916)692-5134</h2>
    </Container>
  );
}

export default Content;

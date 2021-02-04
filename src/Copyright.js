import React from "react";
import styled from "styled-components";

const Footnote = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: green;
`;

export default function Copyright() {
  return (
    <Footnote>
      Find me on <Link href="/">Github</Link>
    </Footnote>
  );
}

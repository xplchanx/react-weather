import React from "react";
import styled from "styled-components";
import Search from "./Search";
import CurrentDate from "./CurrentDate";
import CurrentLocation from "./CurrentLocation";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 0;
`;

const MiniContainer = styled.div`
  padding: 5px 5px;
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      <MiniContainer>
        <CurrentLocation location={props.location} />
      </MiniContainer>
      <MiniContainer>
        <CurrentDate />
      </MiniContainer>
      <MiniContainer>
        <Search submit={props.submit} updateCity={props.updateCity} />
      </MiniContainer>
    </HeaderContainer>
  );
}

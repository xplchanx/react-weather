import React from "react";
import styled from "styled-components";

const SearchContainer = styled.form`
  padding: 0px 5px;
`;

const SearchInput = styled.input`
  border-radius: 4px;
  width: 100px;
`;

const SearchButton = styled.button`
  margin: 0 5px;
  border: none;
  background-color: transparent;
`;

export default function Search(props) {
  return (
    <SearchContainer onSubmit={props.submit}>
      <SearchInput type="text" onChange={props.updateCity} />
      <SearchButton>🔦</SearchButton>
    </SearchContainer>
  );
}

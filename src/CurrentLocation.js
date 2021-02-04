import React from "react";
import styled from "styled-components";

const LocationButton = styled.button`
  border-radius: 10px;
  padding: 5px 8px;
  background-color: rgb(156, 157, 250);
  transition: all 200ms ease-in-out;
  font-weight: bold;
  color: white;
  border: none;

  &:hover {
    background-color: rgb(243, 166, 220);
    color: white;
  }
`;

export default function CurrentLocation(props) {
  return (
    <LocationButton onClick={props.location}>Current Location</LocationButton>
  );
}

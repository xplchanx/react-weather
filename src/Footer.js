import React from "react";
import styled from "styled-components";
import Forecast from "./Forecast";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 30px;
`;

export default function Footer(props) {
  return (
    <FooterContainer>
      <Forecast
        day="Tomorrow"
        icon={props.icon1}
        temperature={props.temperature1}
      />
      <Forecast
        day="Day After"
        icon={props.icon2}
        temperature={props.temperature2}
      />
      <Forecast
        day="2 Days After"
        icon={props.icon3}
        temperature={props.temperature3}
      />
      <Forecast
        day="3 Days After"
        icon={props.icon4}
        temperature={props.temperature4}
      />
      <Forecast
        day="4 Days After"
        icon={props.icon5}
        temperature={props.temperature5}
      />
    </FooterContainer>
  );
}

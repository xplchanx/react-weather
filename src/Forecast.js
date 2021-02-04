import React from "react";
import styled from "styled-components";

const ForecastDiv = styled.div`
  justify-content: space-evenly;
`;

const Temperature = styled.p`
  font-size: 16px;
  text-align: center;
`;

const WeatherIcon = styled.img``;

const Day = styled.p`
  font-size: 16px;
  text-align: center;
`;

export default function Forecast(props) {
  return (
    <ForecastDiv>
      <Day>{props.day}</Day>
      <WeatherIcon src={props.icon} />
      <Temperature>{props.temperature}</Temperature>
    </ForecastDiv>
  );
}

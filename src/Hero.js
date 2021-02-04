import React from "react";
import styled from "styled-components";

const CityName = styled.h1`
  text-align: center;
  margin-top: 30px;
`;

const HeroContainer = styled.div`
  height: 350px;
  padding-top: 0;
  padding-left: 80px;
`;

const WeatherIcon = styled.img``;

const Description = styled.h2``;

const ClickConversion = styled.a`
  color: blue;
  text-decoration: none;
  color: rgb(4, 12, 61);

  &:hover {
    color: blueviolet;
  }
`;

export default function Hero(props) {
  return (
    <>
      <CityName>{props.cityName}</CityName>
      <HeroContainer>
        <WeatherIcon src={props.icon} />
        <Description>
          <ClickConversion href="/" onClick={props.convert}>
            {props.temperature}
          </ClickConversion>
        </Description>
        <Description>{props.windSpeed} </Description>
        <Description>{props.description}</Description>
      </HeroContainer>
    </>
  );
}

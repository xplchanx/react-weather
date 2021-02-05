import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Copyright from "./Copyright";

const Container = styled.div`
  width: 800px;
  margin 50px auto 10px auto;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  border-radius: 20px;
`;

function App() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState("Enter city name ...");
  const [todayIcon, setTodayIcon] = useState(null);
  const [todayTemperature, setTodayTemperature] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon1, setIcon1] = useState(null);
  const [temperature1, setTemperature1] = useState(null);
  const [icon2, setIcon2] = useState(null);
  const [temperature2, setTemperature2] = useState(null);
  const [icon3, setIcon3] = useState(null);
  const [temperature3, setTemperature3] = useState(null);
  const [icon4, setIcon4] = useState(null);
  const [temperature4, setTemperature4] = useState(null);
  const [icon5, setIcon5] = useState(null);
  const [temperature5, setTemperature5] = useState(null);
  const [isMetric, setIsMetric] = useState(true);

  //search from search bar
  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Loading ...");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9c459adaaaef54cbd648c7a55dbc12be`;

    axios.get(url).then((response) => {
      showCurrentTemperature(response);
      let apiUrlTwo = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=hourly,minutely&units=metric&appid=9c459adaaaef54cbd648c7a55dbc12be`;
      axios.get(apiUrlTwo).then((res) => {
        locationTemperature(res);
      });
    });
  }

  function showCurrentTemperature(res) {
    setMessage(city);
    setTodayIcon(
      `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
    );
    setTodayTemperature(`${Math.round(res.data.main.temp)}°C`);
    setWindSpeed(`Wind Speed:${res.data.wind.speed}km/h`);
    setDescription(`Description: ${res.data.weather[0].description}`);
  }

  function updateCity(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setMessage("Loading ...");
    navigator.geolocation.getCurrentPosition((response) => {
      const lat = response.coords.latitude;
      const lon = response.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=9c459adaaaef54cbd648c7a55dbc12be`;
      axios.get(apiUrl).then(locationTemperature);
    });
  }

  function handleConvert(e) {
    e.preventDefault();
    if (isMetric) {
      let temp = parseInt(todayTemperature.split("°")[0]);
      let fahrenheit = Math.round((temp * 9) / 5 + 32);
      setTodayTemperature(`${fahrenheit}°F`);
      setIsMetric(false);
    } else {
      let temp = parseInt(todayTemperature.split("°")[0]);
      let celcius = Math.round(((temp - 32) * 5) / 9);
      setTodayTemperature(`${celcius}°C`);
      setIsMetric(true);
    }
  }

  function locationTemperature(res) {
    setMessage(res.data.timezone);
    setTodayTemperature(`${Math.round(res.data.current.temp)}°C`);
    setTodayIcon(
      `http://openweathermap.org/img/wn/${res.data.current.weather[0].icon}@2x.png`
    );
    setWindSpeed(`Wind Speed:${res.data.current.wind_speed}km/h`);
    setDescription(`Description:${res.data.current.weather[0].description}`);
    setTemperature1(`${Math.round(res.data.daily[0].temp.day)}°C`);
    setTemperature2(`${Math.round(res.data.daily[1].temp.day)}°C`);
    setTemperature3(`${Math.round(res.data.daily[2].temp.day)}°C`);
    setTemperature4(`${Math.round(res.data.daily[3].temp.day)}°C`);
    setTemperature5(`${Math.round(res.data.daily[4].temp.day)}°C`);
    setIcon1(
      `http://openweathermap.org/img/wn/${res.data.daily[0].weather[0].icon}@2x.png`
    );
    setIcon2(
      `http://openweathermap.org/img/wn/${res.data.daily[1].weather[0].icon}@2x.png`
    );
    setIcon3(
      `http://openweathermap.org/img/wn/${res.data.daily[2].weather[0].icon}@2x.png`
    );
    setIcon4(
      `http://openweathermap.org/img/wn/${res.data.daily[3].weather[0].icon}@2x.png`
    );
    setIcon5(
      `http://openweathermap.org/img/wn/${res.data.daily[4].weather[0].icon}@2x.png`
    );
  }

  return (
    <>
      <Container>
        <Header
          submit={handleSubmit}
          updateCity={updateCity}
          location={handleClick}
        />
        <Hero
          cityName={message}
          temperature={todayTemperature}
          windSpeed={windSpeed}
          description={description}
          icon={todayIcon}
          convert={handleConvert}
        />
        <Footer
          temperature1={temperature1}
          icon1={icon1}
          temperature2={temperature2}
          icon2={icon2}
          temperature3={temperature3}
          icon3={icon3}
          temperature4={temperature4}
          icon4={icon4}
          temperature5={temperature5}
          icon5={icon5}
        />
      </Container>
      <Copyright />
    </>
  );
}

export default App;

import React from "react";
import styled from "styled-components";

const DateP = styled.p`
  font-size: 16px;
  margin: 0px;
  padding: 3px;
  text-align: center;
`;

export default function CurrentDate() {
  function getCurrentDate(date) {
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${day[date.getDay()]}, ${date.getDate()} ${
      month[date.getMonth()]
    } ${date.getFullYear()} `;
  }

  return <DateP>{getCurrentDate(new Date())}</DateP>;
}

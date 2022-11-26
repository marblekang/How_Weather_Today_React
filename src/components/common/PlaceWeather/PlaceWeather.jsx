import React, { useEffect, useState } from "react";
import {
  AlignContainer,
  Container,
  TextContainer,
  Text,
  MarginBox,
} from "./style";
import {
  loadWeatherImg,
  loadWeatherIcon,
} from "../../../module/commonFunctions/commonFunctions";
import { CircularProgress } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const DATE_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
const TIME_OPTIONS = { hour: "numeric", minute: "numeric" };
export const PlaceWeather = ({ weather }) => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(null);
  const getTime = () => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  };
  useEffect(() => {
    getTime();
  }, []);
  return (
    <>
      {weather ? (
        <Container url={loadWeatherImg(weather.main)}>
          <AlignContainer justifyContent={"flex-end"}>
            <Text fontSize={"1.5rem"}>{weather.currentLocation}</Text>
          </AlignContainer>
          <TextContainer>
            <Text fontSize={"1.5rem"}>
              {currentTime?.toLocaleDateString("en-US", DATE_OPTIONS)}
            </Text>
            <Text fontSize={"3rem"}>
              {currentTime?.toLocaleTimeString("en-US", TIME_OPTIONS)}
            </Text>
            <AlignContainer justifyContent={"center"}>
              <Text fontSize={"5rem"}>{Math.round(weather.temp)}℃</Text>
              <Text fontSize={"4rem"}>{loadWeatherIcon(weather.main)}</Text>
            </AlignContainer>
          </TextContainer>
        </Container>
      ) : (
        location.pathname === "/" && (
          <MarginBox>
            <CircularProgress isIndeterminate />
          </MarginBox>
        )
      )}
    </>
  );
};

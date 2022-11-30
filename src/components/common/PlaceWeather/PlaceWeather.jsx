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
  const pageType = useLocation();
  const [currentTime, setCurrentTime] = useState(null);
  // 1분에 한번씩 시간 업데이트.
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
            <Text fontSize={"1.5rem"}>{weather.name}</Text>
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
        pageType.pathname === "/" && (
          <MarginBox>
            <CircularProgress isIndeterminate />
          </MarginBox>
        )
      )}
    </>
  );
};

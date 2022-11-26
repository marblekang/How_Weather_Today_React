import React, { useState, useEffect } from "react";
import { PlaceWeather } from "../../components/common/PlaceWeather/PlaceWeather";
import {
  setData,
  setWeatherState,
} from "../../module/commonFunctions/commonFunctions";
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
export const Main = () => {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
    });
  };

  const success = async (position) => {
    const params = {
      lat: "",
      lon: "",
      appid: REACT_APP_API_KEY,
      units: "metric",
    };
    [params.lat, params.lon] = [
      position.coords.latitude,
      position.coords.longitude,
    ];
    setWeatherState(await setData(params), setWeather);
  };
  const error = (error) => {
    console.log(error);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <PlaceWeather weather={weather} />;
};

import React, { useState, useEffect } from "react";
import { PlaceWeather } from "../../components/common/PlaceWeather/PlaceWeather";
import {
  getWeatherData,
  setWeatherState,
  setParams,
} from "../../module/commonFunctions/commonFunctions";
import { requestWeatherData } from "../../api/request";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";

export const Main = () => {
  const { location } = useCurrentLocation();
  const [weather, setWeather] = useState(null);
  const showWeatherInfo = async (params) => {
    setWeatherState(
      await getWeatherData(params, requestWeatherData),
      setWeather
    );
  };
  useEffect(() => {
    showWeatherInfo(setParams(location));
  }, [location]);

  return <PlaceWeather weather={weather} />;
};

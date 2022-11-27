import React, { useEffect, useState } from "react";
import { SearchInput } from "../../components/search/SearchInput/SearchInput";
import { SearchKeyword } from "../../components/search/SearchKeyword/SearchKeyword";
import { requestWeatherData } from "../../api/request";
import {
  getWeatherData,
  setWeatherState,
  setParams,
} from "../../module/commonFunctions/commonFunctions";
import { SearchContainer } from "./style";
import { useSelector } from "react-redux";
import { PlaceWeather } from "../../components/common/PlaceWeather/PlaceWeather";

export const Search = () => {
  const [weather, setWeather] = useState(null);
  const location = useSelector((state) => state.type);
  const showWeatherInfo = async (params) => {
    setWeatherState(
      await getWeatherData(params, requestWeatherData),
      setWeather
    );
  };
  useEffect(() => {
    showWeatherInfo(setParams(location));
  }, [location]);

  return (
    <>
      <SearchContainer>
        <SearchInput />
        <SearchKeyword />
      </SearchContainer>
      <PlaceWeather weather={weather} />
    </>
  );
};

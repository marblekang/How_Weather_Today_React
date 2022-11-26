import React, { useEffect, useState } from "react";
import { SearchInput } from "../../components/search/SearchInput/SearchInput";
import { SearchKeyword } from "../../components/search/SearchKeyword/SearchKeyword";
import {
  setData,
  setWeatherState,
} from "../../module/commonFunctions/commonFunctions";
import { SearchContainer } from "./style";
import { useSelector } from "react-redux";
import { PlaceWeather } from "../../components/common/PlaceWeather/PlaceWeather";
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
export const Search = () => {
  const [weather, setWeather] = useState(null);
  const searchValue = useSelector((state) => state.type);
  // redux state로 받아옴.
  const requestSearch = async (value) => {
    const params = {
      q: value,
      appid: REACT_APP_API_KEY,
      units: "metric",
    };
    setWeatherState(await setData(params), setWeather);
  };

  useEffect(() => {
    if (searchValue.value) {
      requestSearch(searchValue.value);
    }
  }, [searchValue.value]);

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

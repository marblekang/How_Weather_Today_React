import {
  WEATHER_CONDITION_IMG,
  WEATHER_CONDITION_ICON,
} from "../../module/weatherCondition/weatherCondition";
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherData = async (params, requestWeatherData) => {
  let response = await requestWeatherData(params);
  const { name } = response;
  const { temp } = response.main;
  const { main } = response.weather[0];
  return { name, temp, main };
};
// 사용 안할 데이터도 가져왔었음. 수정해야함.

export const setWeatherState = (params, setState) => {
  setState({ ...params });
};

export const loadWeatherImg = (weatherCondition) => {
  return WEATHER_CONDITION_IMG[weatherCondition];
};

export const loadWeatherIcon = (weatherCondition) => {
  return WEATHER_CONDITION_ICON[weatherCondition];
};

export const setParams = (location) => {
  let params = {};

  if (!location) {
    return;
  } else if (location.hasOwnProperty("latitude")) {
    const { latitude, longitude } = location;
    params = {
      lat: latitude,
      lon: longitude,
      appid: REACT_APP_API_KEY,
      units: "metric",
    };
  } else {
    const { value } = location;
    params = {
      q: value,
      appid: REACT_APP_API_KEY,
      units: "metric",
    };
  }
  console.log(params);
  return params;
};

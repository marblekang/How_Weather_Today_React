import { getWeatherData } from "../../api/request";
import {
  WEATHER_CONDITION_IMG,
  WEATHER_CONDITION_ICON,
} from "../../module/weatherCondition/weatherCondition";
export const setData = async (params) => {
  let response = await getWeatherData(params);
  const currentLocation = response.name;
  const { feels_like, temp, temp_max, temp_min } = response.main;
  const { main } = response.weather[0];
  return { currentLocation, feels_like, temp, temp_max, temp_min, main };
};

export const setWeatherState = (params, setState) => {
  setState({ ...params });
};

export const loadWeatherImg = (weatherCondition) => {
  return WEATHER_CONDITION_IMG[weatherCondition];
};

export const loadWeatherIcon = (weatherCondition) => {
  return WEATHER_CONDITION_ICON[weatherCondition];
};

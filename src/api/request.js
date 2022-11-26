import axios from "axios";
export const getWeatherData = async (params) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const response = await axios.get(URL, { params });
  return response.data;
};

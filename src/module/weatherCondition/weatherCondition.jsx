import { FaCloud, FaSnowflake, FaSun } from "react-icons/fa";
import { BsFillCloudRainHeavyFill, BsCloudHaze } from "react-icons/bs";
import { TbGrain } from "react-icons/tb";
import { IoThunderstorm } from "react-icons/io5";
import { RiMistFill } from "react-icons/ri";
import { GiPollenDust } from "react-icons/gi";
import drizzle from "../../assets/images/drizzle.jpg";
import clear from "../../assets/images/clear.jpg";
import thunderstorm from "../../assets/images/thunderstorm.jpg";
import rain from "../../assets/images/rain.jpg";
import snow from "../../assets/images/snow.jpg";
import haze from "../../assets/images/haze.jpg";
import mist from "../../assets/images/mist.jpg";
import dust from "../../assets/images/dust.jpg";
import clouds from "../../assets/images/clouds.jpg";
export const WEATHER_CONDITION_IMG = {
  Drizzle: drizzle,
  Thunderstorm: thunderstorm,
  Rain: rain,
  Snow: snow,
  Haze: haze,
  Mist: mist,
  Dust: dust,
  Clear: clear,
  Clouds: clouds,
};

export const WEATHER_CONDITION_ICON = {
  Drizzle: <TbGrain />,
  Thunderstorm: <IoThunderstorm />,
  Rain: <BsFillCloudRainHeavyFill />,
  Snow: <FaSnowflake />,
  Haze: <BsCloudHaze />,
  Mist: <RiMistFill />,
  Dust: <GiPollenDust />,
  Clear: <FaSun />,
  Clouds: <FaCloud />,
};

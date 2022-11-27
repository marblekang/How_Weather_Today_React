import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
    });
  };
  const onSuccess = async (position) => {
    const { latitude, longitude } = position.coords;
    setLocation((prev) => {
      return { ...prev, latitude, longitude };
    });
  };
  const onError = (error) => {
    console.log(error);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return { location };
};

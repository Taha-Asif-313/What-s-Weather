import React, { useState } from "react";
import SearchInput from "./InputField";
import WeatherCard from "./WeatherCard";
import { WeatherApiResponse } from "../types/global";
import Loading from "./Loading";
import toast from "react-hot-toast";

const CheckWeather: React.FC = () => {
  const [response, setresponse] = useState<WeatherApiResponse | null>(null);
  const [searchCity, setsearchCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchWeather = async () => {
    if (!searchCity) return;
    try {
      setLoading(true);
      setError(""); // Reset previous errors

      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=156ba8419fcb4be388774417240708&q=${searchCity}`
      );

      if (!res.ok) {
        setError("City not found or invalid request");
        setLoading(false);
        toast.error(error);
        return;
      }

      const data: WeatherApiResponse = await res.json(); // Parse JSON data

      setresponse(data); // Store the data in state
      console.log(data);
    } catch (error: any) {
      console.error("Error fetching weather:", error.message);
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false); // Always stop loading
    }
  };
  if (loading)
    return (
      <div className="absolute top-0 right-0 w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  return (
    <div className="flex flex-col justify-center items-center max-lg:px-5 lg:pr-24">
      <SearchInput
        searchCity={searchCity}
        setsearchCity={setsearchCity}
        fetchWeather={fetchWeather}
      />
      {response && (
        <WeatherCard
          name={response.location.name}
          description={response.current.condition.text}
          icon={response.current.condition.icon}
          humidity={response.current.humidity}
          temp={response.current.temp_c}
          cloud={response.current.cloud}
          date_time={response.location.localtime}
        />
      )}
    </div>
  );
};

export default CheckWeather;

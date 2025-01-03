import React, { useState } from "react";
import SearchInput from "./components/InputField";
import WeatherCard from "./components/WeatherCard";
import Home from "./components/Home";
import { WeatherApiResponse } from "./types/global";
import toast from "react-hot-toast";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const [response, setresponse] = useState<WeatherApiResponse | null>(null);
  const [searchCity, setsearchCity] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchWeather = async () => {
    if (!searchCity) return;
    try {
      setLoading(true);
      setError(""); // Reset previous errors

      // Fetch current weather data for the city
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=156ba8419fcb4be388774417240708&q=${searchCity}`
      );

      if (!res.ok) {
        setError("City not found or invalid request");
        setLoading(false);
        toast.error(error);
        return;
      }

      const data = await res.json(); // Parse JSON data

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
    <>
      <div className="grid relative h-screen max-lg:h-screen w-full place-items-center  md:py-10 md:px-10 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <section className="grid h-full w-full md:rounded-xl bg-white bg-gradient-to-tl from-[#a32300] via-[#a35400] to-[#bbbf37] p-6">
          <div className="flex h-full flex-col gap-y-5 rounded-2xl text-violet-100">
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
            {!response && <Home />}
          </div>
        </section>
      </div>
    </>
  );
};

export default App;

import React, { useState } from "react";
import useCheckWeather from "../hooks/useCheckWeather";

const SearchInput = () => {
  const { response, loading, error, fetchWeather } = useCheckWeather();
  const [searchValue, setSearchValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    fetchWeather(searchValue); // Fetch current weather data
    setSearchValue(""); // Clear input field
  };

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={searchValue}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Show current weather data if available */}
      {response && (
        <div>
            <img src={response.current.condition.icon} alt="" />
          <h3>{response.location.name}</h3>
          <p>Temperature: {response.current.temp_c}°C</p>
          <p>Humidity: {response.current.humidity}%</p>
          <p>Weather: {response.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default SearchInput;

import React, { useState } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";
interface SearchInputProps {
    SetWeather: React.Dispatch<React.SetStateAction<null | object>>; // Typing the SetWeather function
  }
  

const SearchInput: React.FC<SearchInputProps> = ({ SetWeather })=>{

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const fetchWeather = async () => {
    if (!searchValue) return;
    try {
      setLoading(true);
      setError(""); // Reset previous errors

      // Fetch current weather data for the city
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=156ba8419fcb4be388774417240708&q=${searchValue}`
      );

      if (!res.ok) {
        setError("City not found or invalid request");
        setLoading(false);
        toast.error(error);
        return;
      }

      const data = await res.json(); // Parse JSON data

      SetWeather(data); // Store the data in state
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
    <div className="relative flex items-center gap-x-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-search absolute left-4 h-5 w-5 text-white"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>

      <input
        className="w-full shadow rounded-full bg-gray-800  placeholder:text-white py-3 pl-11 pr-4 text-white outline-none focus:ring-0"
        placeholder="Search"
        value={searchValue} // Binding state to input value
        onChange={handleChange} // Updating state on change
      />

      <button
        className="grid aspect-square h-12 w-12 place-items-center rounded-full bg-yellow-600  outline-none transition-colors duration-200 ease-in-out hover:bg-violet-500"
        onClick={fetchWeather} // Trigger search on button click
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right h-5 w-5"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;

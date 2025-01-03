interface SearchInputProps {
  searchCity: string;
  setsearchCity: React.Dispatch<React.SetStateAction<string>>;
  fetchWeather: () => unknown;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchCity,
  setsearchCity,
  fetchWeather,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsearchCity(event.target.value);
  };

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
        className="w-full shadow rounded-full bg-black  placeholder:text-white py-3 pl-11 pr-4 text-white outline-none focus:ring-0"
        placeholder="Search"
        value={searchCity} // Binding state to input value
        onChange={handleChange} // Updating state on change
      />

      <button
        className="grid aspect-square h-12 w-12 place-items-center rounded-full bg-black  outline-none transition-colors duration-200 ease-in-out hover:bg-yellow-500"
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

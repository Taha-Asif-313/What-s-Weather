import { useState } from "react";
import SearchInput from "./components/InputField";
import WeatherCard from "./components/WeatherCard";

interface ResponseData {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    condition: {
      text: string;
      icon: string;
    };
    humidity: string;
    temp_c: number;
    cloud: string;
  };
}

const App = () => {
  const [response, setresponse] = useState<ResponseData | null>(null);

  return (
    <>
      <div className="grid relative h-screen max-lg:h-screen w-full place-items-center  md:py-10 md:px-10 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <section className="grid h-full w-full md:rounded-xl bg-white bg-gradient-to-tl from-[#a32300] via-[#a35400] to-[#bbbf37] p-6">
          <div className="flex h-full flex-col gap-y-5 rounded-2xl text-violet-100">
            <SearchInput SetWeather ={setresponse} />
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
        </section>
      </div>
    </>
  );
};

export default App;

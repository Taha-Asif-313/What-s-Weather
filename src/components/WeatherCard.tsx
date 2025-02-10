import { WeatherData } from "../types/global";
const WeatherCard = ({
  name,
  description,
  icon,
  temp,
  humidity,
  cloud,
}: WeatherData) => {
  return (
    <>
      <main className="relative w-full lg:mt-10">
        <div id="weather" className="weather mx-auto h-20 w-20">
          <img className="h-full w-full object-cover" src={icon} alt="" />
        </div>
        <div className="text-center space-y-4 pt-5">
          <h2 className="font-bold text-3xl">{name}</h2>
          <h3 className="font-extrabold text-5xl">{temp}<span className="">°C</span></h3>
          <p>{description}</p>
        </div>
        <div className="w-full grid grid-cols-2 pt-3 text-black">
          <div className="wave flex items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-waves h-12 w-12"
            >
              <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
              <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
              <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
            </svg>
            <div className="">
              <p className="text-sm font-extrabold">{humidity}%</p>
              <p className="text-sm font-medium">Humidity</p>
            </div>
          </div>
          <div className="wave flex items-center justify-end gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-waves h-12 w-12"
            >
              <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
              <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
              <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
            </svg>
            <div className="">
              <p className="text-sm font-extrabold">{cloud}%</p>
              <p className="text-sm font-medium">Cloud</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WeatherCard;

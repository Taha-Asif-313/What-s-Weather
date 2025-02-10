import React from "react";
import Home from "./components/Home";
import CheckWeather from "./components/CheckWeather";

const App: React.FC = () => {
  return (
    <div className="grid relative h-screen max-lg:h-screen w-full ">
      <section className="grid grid-cols-2 max-lg:grid-cols-1 h-full w-full md:rounded-xl bg-white ">
        <Home />
        <CheckWeather/>
      </section>
    </div>
  );
};

export default App;

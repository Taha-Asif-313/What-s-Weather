const Home = () => {
  return (
    <div className="h-full w-full text-black rounded-xl">
      <div className="flex justify-center items-center flex-col-reverse gap-5 h-full">
        <div className="content">
          <h2 className="text-2xl md:text-5xl font-black">
            What's <span className="">Weather</span>!
          </h2>
        </div>
        <div className="img">
          <img className="h-40 w-40" src="/weather-icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

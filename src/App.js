import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "bandung" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  /*
  useEffect(() => {
    const fetchWeather = async () => {
      //toast message
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}`
        );
        console.log(data);
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);
*/
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then((data) => {
          setWeather(data);
        })
        .catch((err) => {
          setError(err);
        });
    };

    fetchWeather();
  }, [query, units]);

  if (error) {
    toast.error(`Ada error, Bang!! ${error}`);
    setError(null);
  }

  // const formatBackground = () => {
  //   if (!weather) return "from-cyan-700 to-blue-700";
  //   const threshold = units === "metric" ? 20 : 40;
  //   if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

  //   return "from-yellow-700 to-orange-700";
  // };

  return (
    <div
      // className={`text-sans mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}

      className="text-sans mx-auto max-w-screen-md mt-4 py-5 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 from-cyan-700 to-blue-700 rounded-lg"
    >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;

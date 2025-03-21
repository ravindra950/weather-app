import { useState } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherDisplay from "../components/WeatherDisplay";
import { fetchWeather } from "../Api/WeatherApi";
export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (location) => {
    try {
      setError("");
      const data = await fetchWeather(location);
      setWeather(data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <WeatherForm onSearch={handleSearch} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

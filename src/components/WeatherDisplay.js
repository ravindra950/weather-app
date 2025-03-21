export default function WeatherDisplay({ weather }) {
    return (
      <div className="mt-6 p-6 bg-white shadow-lg rounded-lg text-center w-full max-w-sm">
        <h2 className="text-2xl font-bold">{weather.name}, {weather.sys.country}</h2>
        <p className="text-gray-700">Temperature: {weather.main.temp}°C</p>
        <p className="text-gray-700"> Humidity: {weather.main.humidity}%</p>
        <p className="text-gray-700">Wind Speed: {weather.wind.speed} m/s</p>
        <p className="mt-2 text-lg font-semibold">{weather.weather[0].description}</p>
      </div>
    );
  }
  
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeather(location) {
  try {
    const response = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

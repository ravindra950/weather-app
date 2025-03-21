import { useState } from "react";

export default function WeatherForm({ onSearch }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() !== "") {
      onSearch(location);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
      <input
        type="text"
        placeholder="Enter city name"
        className="p-2 border rounded w-full sm:w-auto shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
        Search
      </button>
    </form>
  );
}

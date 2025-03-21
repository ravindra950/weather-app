import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white fixed top-0 w-full z-50 shadow-md">
        <h1 className="text-2xl font-bold">Weather App</h1>
        <nav>
          <Link to="/" className="text-lg font-semibold hover:underline">Home</Link>
        </nav>
      </div>

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

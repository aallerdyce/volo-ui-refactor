import { BrowserRouter, Routes, Route } from "react-router";
import LeagueV from "../imports/LeagueV1";
import DailyPlayV from "../imports/DailyPlayV1";
import RentalsV from "../imports/RentalsV1";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeagueV />} />
        <Route path="/daily-play" element={<DailyPlayV />} />
        <Route path="/rentals" element={<RentalsV />} />
      </Routes>
    </BrowserRouter>
  );
}

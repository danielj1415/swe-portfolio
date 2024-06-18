import './App.css'
import HomePage from './HomePage';
import AboutMePage from "./AboutMePage";
import PlantProject from './PlantProject';
import ScrollToTop from './ScrollToTop';
import SpotifyProject from "./SpotifyProject";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/swe-portfolio">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/plant" element={<PlantProject />} />
          <Route path="/spotify" element={<SpotifyProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

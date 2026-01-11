import "./css/App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

//Provider
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "./lib/theme/themeProvider";
import Prosjekter from "./pages/prosjekter";
import About from "./pages/about";
import Home from "./pages/home";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

const AppRoutes: React.FC = () => {
  const [, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300); // Forsinkelse for varigheten av animasjonen
  };

  return (
    <Routes>
      <Route path="/" element={<Home onNavigate={handleNavigation} />} />
      <Route
        path="/prosjekter"
        element={<Prosjekter onNavigate={handleNavigation} />}
      />
      <Route path="/about" element={<About onNavigate={handleNavigation} />} />
    </Routes>
  );
};

export default App;

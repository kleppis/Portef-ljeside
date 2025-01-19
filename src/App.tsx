import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "./lib/theme/themeProvider";
import Prosjekter from "./pages/prosjekter";
import Contact from "./pages/contact";
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
      <Route path="/prosjekter" element={<Prosjekter />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;

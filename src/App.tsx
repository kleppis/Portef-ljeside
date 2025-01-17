import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./lib/theme/themeProvider";
import Prosjekter from "./pages/prosjekter";
import Contact from "./pages/contact";
import Home from "./pages/home";

const App: React.FC = () => (
  <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prosjekter" element={<Prosjekter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;

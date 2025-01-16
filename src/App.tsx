import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./lib/theme/themeProvider";
import About from "./pages/about";
import Contact from "./pages/contact";
import { Home } from "./pages/home";

const App: React.FC = () => (
  <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;

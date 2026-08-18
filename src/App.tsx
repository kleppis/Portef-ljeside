// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./lib/theme/themeProvider";
import Prosjekter from "./pages/prosjekter";
import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import { Analytics } from "@vercel/analytics/react";
import RouteTracker from "./lib/analytics/RouteTracker";
import { initializeGA } from "./lib/analytics/ga";
import { Layout } from "./components/layout";

const App: React.FC = () => {
  useEffect(() => {
    initializeGA();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <RouteTracker />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prosjekter" element={<Prosjekter />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Analytics />
      </Router>
    </ThemeProvider>
  );
};

export default App;

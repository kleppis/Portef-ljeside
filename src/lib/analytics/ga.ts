// src/lib/analytics/ga.ts
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-SX4C6197Q4"; // Erstatt med din GA4 Measurement ID

// Initialiser Google Analytics
export const initializeGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

// Logg sidevisning
export const logPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: document.title,
  });
};

// Logg egendefinerte hendelser
export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

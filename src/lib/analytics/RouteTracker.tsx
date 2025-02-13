// src/lib/analytics/RouteTracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logPageView } from "./ga";

const RouteTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return null;
};

export default RouteTracker;

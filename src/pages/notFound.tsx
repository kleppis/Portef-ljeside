import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Nå har du kødda det til</p>
      <img src="/assets/images/Olav.png" className="w-36 -mt-10"></img>
      <Link to="/" className="mt-6 text-link hover:text-linkHover">
        Gå tilbake til hovedsiden
      </Link>
    </div>
  );
};

export default NotFound;

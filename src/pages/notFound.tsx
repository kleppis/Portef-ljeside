import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="page-wrap flex min-h-[70vh] flex-col items-start justify-center py-24">
      <p className="section-label">404</p>
      <h1 className="mt-4 max-w-xl">Denne siden finnes ikke.</h1>
      <p className="mt-5 max-w-md text-lg text-muted">
        Lenken er enten utdatert, eller så har du havnet utenfor kartet.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full border border-divider px-5 py-2.5 text-sm hover:border-primary hover:text-primary"
      >
        Tilbake til forsiden
      </Link>
    </div>
  );
};

export default NotFound;

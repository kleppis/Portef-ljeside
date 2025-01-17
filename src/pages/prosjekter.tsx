import React, { useEffect, useState } from "react";

const Prosjekter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animasjonen etter at siden åpnes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Forsinkelse på 100ms for å sikre jevn innlasting

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="flex space-x-8">
        {/* Prosjekt 1 */}
        <div
          className={`w-64 h-64 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg transition-transform duration-700 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-xl font-bold">Prosjekt 1</h2>
        </div>

        {/* Prosjekt 2 */}
        <div
          className={`w-64 h-64 bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg transition-transform duration-700 delay-200 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-xl font-bold">Prosjekt 2</h2>
        </div>

        {/* Prosjekt 3 */}
        <div
          className={`w-64 h-64 bg-red-500 text-white flex items-center justify-center rounded-lg shadow-lg transition-transform duration-1000 delay-400 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[50vw] opacity-0"
          }`}
        >
          <h2 className="text-xl font-bold">Prosjekt 3</h2>
        </div>
      </div>
    </div>
  );
};

export default Prosjekter;

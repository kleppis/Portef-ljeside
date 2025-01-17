import { useEffect, useState } from "react";

interface SlideBoxProps {
  children: React.ReactNode;
}

export const SlideBox: React.FC<SlideBoxProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animasjonen etter at siden åpnes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Forsinkelse på 100ms for å sikre jevn innlasting

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`w-64 h-64 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg transition-transform duration-700 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

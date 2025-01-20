import { useEffect, useState } from "react";

interface SlideBoxProps {
  children: React.ReactNode;
  delay?: number;
}

export const SlideBox: React.FC<SlideBoxProps> = ({
  children,
  delay = 100,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animasjonen etter at siden åpnes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay); // Forsinkelse på 100ms for å sikre jevn innlasting

    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div
      className={`w-96 h-96 border-divider border-[1px] rounded-lg shadow-lg transition-transform duration-700 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-[90vw] opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

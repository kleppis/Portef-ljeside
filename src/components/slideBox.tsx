import { useEffect, useState } from "react";

interface SlideBoxProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right";
}

export const SlideBox: React.FC<SlideBoxProps> = ({
  children,
  delay = 100,
  direction = "right",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animasjonen etter at siden åpnes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay); // Forsinkelse på 100ms for å sikre jevn innlasting

    return () => clearTimeout(timer);
  }, [delay]);

  const translateClass =
    direction === "left" ? "-translate-x-[90vw]" : "translate-x-[90vw]";
  return (
    <div
      className={`w-80 md:w-96 h-96 border-divider border-[1px] rounded-lg shadow-lg transition-all duration-700 hover:shadow-2xl hover:shadow-black hover:bg-white ${
        isVisible ? "translate-x-0 opacity-100" : `${translateClass} opacity-0`
      }`}
    >
      {children}
    </div>
  );
};

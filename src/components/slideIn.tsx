import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
}

const SlideIn: React.FC<SlideInProps> = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animér bare én gang
    threshold: 0.1, // Start animasjon når 10% av komponenten er synlig
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-transform duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default SlideIn;

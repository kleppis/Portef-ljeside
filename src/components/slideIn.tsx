import React, { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SlideIn: React.FC<SlideInProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const [failsafe, setFailsafe] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "120px",
    fallbackInView: true,
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setFailsafe(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  const visible = inView || failsafe;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transform transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SlideIn;

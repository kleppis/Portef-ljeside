import React from "react";
import { SlideBox } from "../components/slideBox";

const Prosjekter: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden space-x-5">
      <SlideBox>
        <h1 className="text-4xl font-bold">Prosjekter</h1>
        <p>
          Dette er prosjektsiden. Her kan du vise frem prosjekter du har jobbet
          med.
        </p>
      </SlideBox>
      <SlideBox delay={200}>
        <h1 className="text-4xl font-bold">Prosjekter</h1>
        <p>
          Dette er prosjektsiden. Her kan du vise frem prosjekter du har jobbet
          med.
        </p>
      </SlideBox>
    </div>
  );
};

export default Prosjekter;

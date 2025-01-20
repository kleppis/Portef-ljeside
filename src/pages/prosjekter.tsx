import React from "react";
import { SlideBox } from "../components/slideBox";
import SlideIn from "../components/slideIn";
import { FaArrowRight } from "react-icons/fa";

const Prosjekter: React.FC = () => {
  return (
    <>
      <div className="bg-background min-h-screen">
        <h1 className="text-center py-16 drop-shadow-lg">Prosjekter</h1>
        <div className=" flex items-center justify-center overflow-hidden space-x-5 py-36">
          <SlideBox>
            <div className="w-full h-full rounded-lg p-6 group/box">
              <img
                src="src/assets/images/S&M3.svg"
                alt="logo"
                className="absolute -top-5 w-10 -left-5 drop-shadow-lg"
              />
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-4xl font-bold">Maria & Sebastian</h2>
                  <SlideIn delay={200}>
                    <a
                      href="https://www.maria-sebastian.no/"
                      className="text-link flex group/link items-center"
                    >
                      maria-sebastian.no
                      <FaArrowRight
                        className="group-hover/link:animate-bounce-x ms-2"
                        size={10}
                      />
                    </a>
                  </SlideIn>
                </div>
                <div className="flex justify-between w-full font-walter-turncoat">
                  <div>
                    <p>
                      <strong>Når:</strong> Høsten 2024
                    </p>
                  </div>
                  <SlideIn delay={200}>
                    <img
                      src="src/assets/images/S&M3.svg"
                      alt="logo"
                      className="w-10 align-baseline drop-shadow-lg"
                    />
                  </SlideIn>
                </div>
              </div>
            </div>
          </SlideBox>
          <SlideBox delay={200}>
            <div className="h-full w-full p-6">
              <img
                src="src/assets/images/oslomet-logo.png"
                alt="logo"
                className="absolute -top-5 w-10 -left-5 drop-shadow-lg rounded-full"
              />
              <h2 className="text-4xl font-bold">Software Engineer</h2>

              <p className="text-end opacity-80">Student</p>
            </div>
          </SlideBox>
          <SlideBox delay={300}>
            <h1 className="text-4xl font-bold">Prosjekter</h1>
            <p>
              Dette er prosjektsiden. Her kan du vise frem prosjekter du har
              jobbet med.
            </p>
          </SlideBox>
        </div>
      </div>
    </>
  );
};

export default Prosjekter;

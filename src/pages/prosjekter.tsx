import React, { useState } from "react";
import { SlideBox } from "../components/slideBox";
import SlideIn from "../components/slideIn";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineWrench } from "react-icons/hi2";

interface ProsjekterProps {
  onNavigate: (path: string) => void;
}

const Prosjekter: React.FC<ProsjekterProps> = ({ onNavigate }) => {
  const [clicked, setClicked] = useState<string | null>(null);

  const handleClick = (path: string) => {
    if (!clicked) {
      setClicked(path);
      setTimeout(() => {
        onNavigate(path);
      }, 100); // Gir nok tid til at animasjonen fullføres
    }
  };
  return (
    <>
      <div className="bg-background min-h-screen">
        <div className="flex py-16 justify-center w-full items-center">
          <div
            className={`absolute left-2 md:left-10 top-5 md:top-20 transition-transform duration-500 ${
              clicked === "/" ? "-translate-x-[50vw]" : ""
            }`}
          >
            <SlideIn>
              <a
                onClick={() => handleClick("/")}
                className="text-xl md:text-3xl hover:text-button-textHover cursor-pointer"
              >
                <FaArrowLeft size={20} className="inline-block ml-2" />
                Tilbake
              </a>
            </SlideIn>
          </div>
          <h1 className="text-center  drop-shadow-lg uppercase ">Prosjekter</h1>
        </div>
        <div className=" flex flex-col md:flex-row items-center justify-center overflow-hidden md:space-x-5 py-10 md:px-10 md:py-36 space-y-7 md:space-y-0">
          <SlideBox>
            <div className="w-full h-full rounded-lg p-6 group/box">
              <img
                src="/assets/images/S&M3.svg"
                alt="logo"
                className="absolute -top-5 w-10 -left-5 drop-shadow-lg grayscale group-hover/box:grayscale-0 transition-all duration-500"
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
                  <p className="pt-5">
                    Bryllupsside for et par som skal gifte seg til sommeren.
                    Siden er bygget på React JS
                  </p>
                </div>
                <div className="flex justify-between w-full font-walter-turncoat">
                  <div>
                    <p>
                      <strong>Når:</strong> Høsten 2024
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl grayscale group-hover/box:grayscale-0 duration-500">
                      👰‍♀️
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideBox>
          <SlideBox delay={200}>
            <div className="h-full w-full p-6 group/box">
              <img
                src="/assets/images/oslomet-logo.png"
                alt="logo"
                className="absolute -top-5 w-10 -left-5 drop-shadow-lg rounded-full grayscale group-hover/box:grayscale-0 transition-all duration-500"
              />
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-4xl font-bold">Software Engineer</h2>

                  <p className="text-end opacity-80">Student</p>
                  <p className="pt-5">
                    Studerer Software Engineering ved OsloMet. Har jobbet med
                    databaser, webutvikling, matte, algoritmer, og mye mer.
                  </p>
                </div>
                <div className="flex justify-between w-full font-walter-turncoat">
                  <div>
                    <p>
                      <strong>Når:</strong> 2023 - 2026
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl grayscale group-hover/box:grayscale-0 duration-500">
                      📚
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideBox>
          <SlideBox delay={300}>
            <div className="w-full h-full p-6 group/box">
              <img
                src="/assets/logo/hv_grønn.svg"
                alt="logo"
                className="absolute -top-5 w-10 -left-5 drop-shadow-lg  aspect-square grayscale group-hover/box:grayscale-0 transition-all duration-500"
              />
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-4xl font-bold">Kleppan IT</h2>
                  <SlideIn delay={10}>
                    <a
                      href="https://www.kleppanit.no/"
                      className="text-link flex group/link items-center"
                    >
                      kleppanit.no
                      <FaArrowRight
                        className="group-hover/link:animate-bounce-x ms-2"
                        size={10}
                      />
                    </a>
                  </SlideIn>
                  <p className="pt-5">
                    Et sideprosjekt jeg jobber med for å kunne anvende det jeg
                    lærer på studiet i praksis. Her prøver jeg å tilby tjenester
                    innen webutvikling og IT-support.
                  </p>
                </div>
                <div className="flex justify-between w-full font-walter-turncoat">
                  <div>
                    <p>
                      <strong>Når:</strong> 2024 - Nå
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl grayscale group-hover/box:grayscale-0 duration-500">
                      💻
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideBox>
        </div>
      </div>
    </>
  );
};

export default Prosjekter;

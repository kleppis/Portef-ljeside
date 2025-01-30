import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import SlideIn from "../components/slideIn";
import "@theme-toggles/react/css/Lightbulb.css";
import { Lightbulb } from "@theme-toggles/react";
import { useTheme } from "../lib/theme/themeProvider";

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [clicked, setClicked] = useState<string | null>(null);
  const { toggleTheme } = useTheme();
  const { isToggled } = useTheme();
  const textRef = useRef<HTMLDivElement>(null);

  const handleClick = (path: string) => {
    if (!clicked) {
      setClicked(path);
      setTimeout(() => {
        onNavigate(path);
      }, 100); // Gir nok tid til at animasjonen fullføres
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    const spans = document.querySelectorAll(".hoverable-char");
    const textRect = textRef.current?.getBoundingClientRect();
    if (!textRect) return;

    const mouseX = event.clientX;
    spans.forEach((span) => {
      const spanRect = (span as HTMLElement).getBoundingClientRect();
      const spanCenterX = spanRect.left + spanRect.width / 2;
      const distance = Math.abs(mouseX - spanCenterX);
      const maxDistance = textRect.width / 5;
      const lift = Math.max(0, 1 - distance / maxDistance) * 50; // Juster 6 for maksimal løft
      (span as HTMLElement).style.transform = `translateY(-${lift}px)`;
    });
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      const spans = document.querySelectorAll(".hoverable-char");
      spans.forEach((span) => {
        (span as HTMLElement).style.transform = "translateY(0)";
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const renderHoverableText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="inline-block ease-in-out cursor-default pb-10 hoverable-char"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      <div className="bg-background min-h-screen ">
        <div className="max-w-screen-2xl mx-auto px-28 pt-10 pb-5">
          <div className="">
            <Lightbulb
              className="text-text text-4xl"
              duration={750}
              onToggle={toggleTheme}
              toggled={isToggled}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </div>
          <div className="w-fit mx-auto my-20">
            <p className="text-xl opacity-80 transition-all duration-500">
              Jeg er
            </p>
            <h1 className=" display uppercase" ref={textRef}>
              {renderHoverableText("Jørgen Kleppan")}
            </h1>
            <p className="text-center transition-all duration-500">
              Siden er ikke optimalisert for mobil
            </p>
          </div>
          <a href="https://www.kleppanit.no/">
            <img
              src="/assets/logo/long_hvit.svg"
              alt="logo"
              className="w-44 mx-auto  grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            />
          </a>
          <div className="flex items-center justify-center py-24 space-x-10 overflow-hidden">
            {/* Om oss */}
            <SlideIn>
              <a
                onClick={() => handleClick("/about")}
                className={`relative group text-5xl font-semibold text-text flex items-center cursor-pointer transition-all duration-500 hover:text-secondary ${
                  clicked === "/about" ? "-translate-x-[50vw]" : ""
                }`}
              >
                <FaArrowLeft
                  className={`inline-block ml-2 transition-transform duration-500 ${
                    clicked === "/about" ? "-translate-x-[50vw]" : ""
                  }`}
                />
                Om meg
              </a>
            </SlideIn>

            {/* Prosjekter */}
            <SlideIn>
              <a
                onClick={() => handleClick("/prosjekter")}
                className={`relative group text-5xl font-semibold text-text flex items-center cursor-pointer transition-all duration-500 hover:text-secondary ${
                  clicked === "/prosjekter" ? "translate-x-[50vw]" : ""
                }`}
              >
                Prosjekter
                <FaArrowRight
                  className={`inline-block ml-2 transition-transform duration-500 ${
                    clicked === "/prosjekter" ? "translate-x-[50vw]" : ""
                  }`}
                />
              </a>
            </SlideIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import SlideIn from "../components/slideIn";
import { SlideBox } from "../components/slideBox";

interface ProsjekterProps {
  onNavigate: (path: string) => void;
}

const About: React.FC<ProsjekterProps> = ({ onNavigate }) => {
  const [clicked, setClicked] = useState<string | null>(null);
  const [overlayContent, setOverlayContent] = useState<React.ReactNode | null>(
    null
  );
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleClick = (path: string) => {
    if (!clicked) {
      setClicked(path);
      setTimeout(() => {
        onNavigate(path);
      }, 100); // Gir nok tid til at animasjonen fullføres
    }
  };

  const handleBoxClick = (content: React.ReactNode) => {
    setOverlayContent(content);
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
    setTimeout(() => {
      setOverlayContent(null);
    }, 500); // Matcher `transition-duration` for å fullføre animasjon
  };

  return (
    <>
      <div className="bg-background min-h-screen overflow-hidden relative">
        <div className="flex py-16 justify-center items-center max-w-screen-2xl mx-auto overflow-hidden">
          <div
            className={`absolute right-10 top-20 transition-transform duration-500 ${
              clicked === "/" ? "translate-x-[50vw]" : ""
            }`}
          >
            <SlideIn>
              <a
                onClick={() => handleClick("/")}
                className="text-3xl hover:text-button-textHover cursor-pointer"
              >
                Tilbake
                <FaArrowRight size={20} className="inline-block ml-2" />
              </a>
            </SlideIn>
          </div>
          <h1 className="text-center drop-shadow-lg uppercase">Om Meg</h1>
        </div>
        <div className="flex items-center justify-center overflow-hidden space-x-5 py-36">
          <SlideBox direction="left" delay={300}>
            <div
              className="w-full h-full rounded-lg p-6 group/box cursor-pointer"
              onClick={() =>
                handleBoxClick(
                  <div>
                    <h2 className="text-4xl font-bold">Jørgen Kleppan</h2>
                    <p>Detaljert informasjon om Jørgen Kleppan.</p>
                  </div>
                )
              }
            >
              <img
                src="/assets/images/portrait.jpeg"
                alt="logo"
                className="absolute -top-5 w-10 -left-5 drop-shadow-lg grayscale group-hover/box:grayscale-0 transition-all duration-500 rounded-full aspect-square object-contain"
              />
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-4xl font-bold">Jørgen Kleppan</h2>
                </div>
              </div>
            </div>
          </SlideBox>
          <SlideBox delay={200} direction="left">
            <div
              className="h-full w-full p-6 group/box cursor-pointer"
              onClick={() =>
                handleBoxClick(
                  <div>
                    <h2 className="text-4xl font-bold">Erfaring</h2>
                    <p>Detaljert informasjon om erfaring.</p>
                  </div>
                )
              }
            >
              <div className="w-10 flex h-10 justify-center align-center text-text bg-gray-300 font-walter-turncoat rounded-full absolute -top-5 -left-5 drop-shadow-lg group-hover/box:bg-secondary transition-all duration-500">
                <p className="my-auto font-extrabold">CV</p>
              </div>
              <h2 className="text-4xl font-bold">Erfaring</h2>
              <p className="text-end opacity-80">Student</p>
            </div>
          </SlideBox>
          <SlideBox direction="left">
            <div
              className="w-full h-full p-6 group/box cursor-pointer"
              onClick={() =>
                handleBoxClick(
                  <div>
                    <h2 className="text-4xl font-bold">Kleppan IT</h2>
                    <p>Detaljert informasjon om Kleppan IT.</p>
                  </div>
                )
              }
            >
              <img
                src="/assets/logo/hv_grønn.svg"
                alt="logo"
                className="absolute -top-5 w-10 -left-5 drop-shadow-lg aspect-square grayscale group-hover/box:grayscale-0 transition-all duration-500"
              />
              <h2 className="text-4xl font-bold">Hobby</h2>
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
            </div>
          </SlideBox>
        </div>
        {overlayContent && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500 ${
              isOverlayVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseOverlay}
          >
            <div
              className={`bg-white p-8 rounded-lg shadow-lg relative transform transition-transform duration-500 ${
                isOverlayVisible ? "scale-100" : "scale-95"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={handleCloseOverlay}
              >
                &times;
              </button>
              {overlayContent}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;

import { useState } from "react";
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
            <h1 className=" display transition-all duration-500">
              Jørgen Kleppan
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

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
          <div className="flex justify-between">
            <img
              src="/assets/logo/long_hvit.svg"
              alt="logo"
              className="w-44  grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            />
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
          <h2 className="text-center my-20">Siden er enda under utvikling</h2>
          <div className="flex items-center justify-center py-24 space-x-10 overflow-hidden">
            {/* Om oss */}
            <SlideIn>
              <a
                onClick={() => handleClick("/about")}
                className={`relative group text-7xl font-semibold text-text flex items-center cursor-pointer transition-all duration-500 hover:text-button-textHover ${
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
                className={`relative group text-7xl font-semibold text-text flex items-center cursor-pointer transition-all duration-500 hover:text-button-textHover ${
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

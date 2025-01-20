import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
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
    <div className="flex items-center justify-center h-screen bg-gray-100 space-x-10 overflow-hidden">
      {/* Om oss */}
      <a
        onClick={() => handleClick("/contact")}
        className={`relative group text-7xl font-semibold text-gray-800 flex items-center cursor-pointer transition-all duration-500 hover:text-button-textHover ${
          clicked === "/contact" ? "-translate-x-[50vw]" : ""
        }`}
      >
        <FaArrowLeft
          className={`inline-block ml-2 transition-transform duration-500 ${
            clicked === "/contact" ? "-translate-x-[50vw]" : ""
          }`}
        />
        Om oss
      </a>

      {/* Prosjekter */}
      <a
        onClick={() => handleClick("/prosjekter")}
        className={`relative group text-7xl font-semibold text-gray-800 flex items-center cursor-pointer transition-all duration-500 hover:text-button-textHover ${
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
    </div>
  );
};

export default Home;

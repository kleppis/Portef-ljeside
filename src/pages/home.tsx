import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="space-x-24">
        <a
          onClick={handleClick}
          className="relative group text-7xl font-semibold text-gray-800"
        >
          <FaArrowLeft className="inline-block ml-2 group-hover:animate-bounce-x-left " />
          Om oss
        </a>
        <a
          onClick={handleClick}
          href="/prosjekter"
          className="relative group text-7xl font-semibold text-gray-800"
        >
          Prosjekter
          <FaArrowRight
            className={`inline-block ml-2 transition-transform duration-300 ${
              clicked ? "translate-x-10" : ""
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export default Home;

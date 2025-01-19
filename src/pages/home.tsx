import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleClick = (path: string) => {
    setClicked(true);
    setTimeout(() => {
      router.push(path);
    }, 300); // Delay for the duration of the animation
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="space-x-24">
        <a
          onClick={() => handleClick("/contact")}
          className="relative group text-7xl font-semibold text-gray-800 flex items-center"
        >
          <FaArrowLeft
            className={`inline-block ml-2 transition-transform duration-300 group-hover:animate-bounce-x-left ${
              clicked ? "-translate-x-10" : ""
            }`}
          />
          Om oss
        </a>
        <a
          onClick={() => handleClick("/prosjekter")}
          className="relative group text-7xl font-semibold text-gray-800 flex items-center"
        >
          Prosjekter
          <FaArrowRight
            className={`inline-block ml-2 transition-transform duration-300 group-hover:animate-bounce-x ${
              clicked ? "translate-x-10" : ""
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export default Home;

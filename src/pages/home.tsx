import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="space-x-24">
        <a className="relative group text-7xl font-semibold text-gray-800">
          <FaArrowLeft className="inline-block ml-2 group-hover:animate-bounce-x-left " />
          Om oss
        </a>
        <a
          href="/prosjekter"
          className="relative group text-7xl font-semibold text-gray-800"
        >
          Prosjekter
          <FaArrowRight className="inline-block ml-2 group-hover:animate-bounce-x " />
        </a>
      </div>
    </div>
  );
};

export default Home;

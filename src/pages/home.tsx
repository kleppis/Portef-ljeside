const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="space-x-24">
        <a className="relative group text-7xl font-semibold text-gray-800">
          Om oss
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="/prosjekter"
          className="relative group text-7xl font-semibold text-gray-800"
        >
          Prosjekter
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
};

export default Home;

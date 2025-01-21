import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-screen-2xl flex justify-between mx-auto">
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1 className="text-5xl font-bold text-text">Om meg</h1>
          <p className="text-text text-center mt-5">
            Jeg er en student ved NTNU som studerer Informatikk. Jeg har
            erfaring med webutvikling og programmering, og har jobbet med flere
            prosjekter. Jeg har også erfaring med design og har laget flere
            nettsider og applikasjoner.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="/assets/illustrations/undraw_web_developer_p3e5.svg"
            alt="illustrasjon av en webutvikler"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

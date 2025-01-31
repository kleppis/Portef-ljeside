import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import SlideIn from "../components/slideIn";
import { SlideBox } from "../components/slideBox";
import { CvLine, CvLineShort } from "../components/cvLine";

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

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOverlayVisible]);

  return (
    <>
      <div className="bg-background min-h-screen overflow-hidden relative">
        <div className="flex py-16 justify-center items-center max-w-screen-2xl mx-auto overflow-hidden">
          <div
            className={`absolute right-2 md:right-10 top-5 md:top-20 transition-transform duration-500 ${
              clicked === "/" ? "translate-x-[50vw]" : ""
            }`}
          >
            <SlideIn>
              <a
                onClick={() => handleClick("/")}
                className="text-xl md:text-3xl hover:text-button-textHover cursor-pointer"
              >
                Tilbake
                <FaArrowRight size={20} className="inline-block ml-2" />
              </a>
            </SlideIn>
          </div>
          <h1 className="text-center drop-shadow-lg uppercase">Om Meg</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center overflow-hidden md:space-x-5 py-10 md:px-10 md:py-36 space-y-7 md:space-y-0">
          <SlideBox direction="left" delay={300}>
            <div
              className="h-full w-full rounded-lg p-6 group/box cursor-pointer"
              onClick={() =>
                handleBoxClick(
                  <div className="flex flex-col md:flex-row h-[40rem]">
                    <img
                      src="/assets/images/sykkelMeg.jpeg"
                      alt="bike-picture"
                      className=" h-full object-cover w-96 hidden md:block"
                    />
                    <div className="h-full w-4 bg-primary hidden md:block"></div>
                    <div className="flex flex-col mx-5 pt-10 md:w-96">
                      <h2 className="text-4xl font-bold">Jørgen Kleppan</h2>
                      <p className="opacity-50">Student</p>
                      <p className="mt-5">
                        Jeg heter Jørgen, er 24 år gammel og studerer
                        dataingeniør ved OsloMet. Jeg har en stor interesse for
                        webutvikling og liker å utforske hvordan teknologi kan
                        løse reelle problemer. Gjennom studiene har jeg fått
                        innsikt i programmering, databaser, webutvikling, og jeg
                        brenner for å lære mer og utvikle meg videre. På
                        fritiden liker jeg å holde på med egne prosjekter
                        samtidig som jeg sykler en god del. Ta gjerne kontakt
                        hvis du er nysgjerrig på hva jeg jobber med eller vil
                        samarbeide!
                      </p>
                    </div>
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
                  <p className="text-end text-text opacity-0 group-hover/box:opacity-50 duration-500">
                    Les mer
                  </p>
                  <div className="flex pt-4 space-x-3">
                    <img
                      src="/assets/images/portrait.jpeg"
                      alt="portrait"
                      className="drop-shadow-lg p-0 w-1/2 grayscale group-hover/box:grayscale-0 transition-all duration-500  object-contain"
                    />
                    <div>
                      <h3>Navn</h3>
                      <p className="group-hover/box:text-secondary duration-500">
                        Jørgen Kleppan
                      </p>
                      <h3 className="pt-2">Alder</h3>
                      <p className="group-hover/box:text-secondary duration-500">
                        24 år
                      </p>
                      <h3 className="pt-2">Høyde</h3>
                      <p className="group-hover/box:text-secondary duration-500">
                        178cm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideBox>
          <SlideBox delay={200} direction="left">
            <div
              className="h-full w-full p-6 group/box cursor-pointer overflow-hidden"
              onClick={() =>
                handleBoxClick(
                  <div className="flex flex-col md:flex-row h-[40rem] ">
                    <img
                      src="/assets/images/sykkelMeg.jpeg"
                      alt="bike-picture"
                      className=" h-full object-cover w-96 hidden md:block"
                    />
                    <div className="h-full w-4 bg-primary hidden md:block"></div>
                    <div className="flex flex-col mx-5 pt-10 md:w-96 overflow-scroll scrollbar-hide">
                      <h2 className="text-4xl font-bold">Erfaring</h2>
                      <p className="opacity-50 pb-5">CV</p>
                      <CvLine
                        title="Utvikler"
                        date="02-2024 - 10.2024"
                        location="SimplyLearn"
                        description="Hos SimplyLearn utviklet jeg blant annet responsive WordPress-nettsider og e-læringsløsninger med verktøy som Beaver Builder og Advanced Custom Fields."
                      />
                      <CvLine
                        title="Budbilsjåfør"
                        date="08-2021 - 06-2022"
                        location="Posten Norge"
                        description="Som sjåfør hos Posten Norge leverte jeg bedriftspakker og utviklet ferdigheter i effektivitet, tidshåndtering og kundekommunikasjon."
                      />
                      <CvLine
                        title="Budbilsjåfør"
                        date="10-2020 - 05-2021"
                        location="Posten Norge"
                        description="Som kveldssjåfør i Oslo leverte jeg pakker til privatpersoner og utviklet ferdigheter i ruteplanlegging, sortering og effektiv levering i et hektisk miljø."
                      />
                      <CvLine
                        title="Operasjonssoldat"
                        date="09-2019 - 08-2020"
                        location="Forsvaret"
                        description="Som operasjonssoldat i Luftforsvaret håndterte jeg informasjon med høy grad av struktur og nøyaktighet, bistod avdelinger med kontroll og formidling, og disponerte oppgaver effektivt under lange arbeidsdager."
                      />
                    </div>
                  </div>
                )
              }
            >
              <div className="w-10 flex h-10 justify-center align-center text-text bg-gray-300 font-walter-turncoat rounded-full absolute -top-5 -left-5 drop-shadow-lg group-hover/box:bg-secondary transition-all duration-500">
                <p className="my-auto font-extrabold">CV</p>
              </div>
              <h2 className="text-4xl font-bold">Erfaring</h2>
              <p className="text-end text-text opacity-0 group-hover/box:opacity-50 duration-500 pb-2">
                Les mer
              </p>
              <CvLineShort
                title="Utvikler"
                date="02-2024 - 10.2024"
                location="SimplyLearn"
              />
              <CvLineShort
                title="Budbilsjåfør"
                date="08-2021 - 06-2022"
                location="Posten Norge"
              />

              <CvLineShort
                title="Budbilsjåfør"
                date="10-2020 - 05-2021"
                location="Posten Norge"
              />

              <CvLineShort
                title="Operasjonssoldat"
                date="09-2019 - 08-2020"
                location="Forsvaret"
              />
            </div>
          </SlideBox>
          <SlideBox direction="left">
            <div
              className="w-full h-full p-6 group/box cursor-pointer"
              onClick={() =>
                handleBoxClick(
                  <div className="flex flex-col md:flex-row h-[40rem] ">
                    <div className="md:w-96 bg-primary py-10 px-5">
                      <h2 className=" text-background">Strava stats</h2>
                      <p className="text-background">Kommer snart</p>
                    </div>
                    <div className="h-full w-4 bg-primary hidden md:block"></div>
                    <div className="flex flex-col mx-5 pt-10 md:w-96 overflow-scroll scrollbar-hide">
                      <h2 className="text-4xl font-bold">Hobbyer</h2>
                      <p className="opacity-50 pb-5">Aktiv & Lærevillig</p>
                      <CvLine
                        title="Sykling"
                        date=""
                        location=""
                        description="Sykling er den hobbyen jeg bruker mest tid på. Jeg har stor interesse for sykling og ser frem til å sykle ritt, og trene frem til årets store mål: Trondheim-Oslo."
                      />
                      <CvLine
                        title="Webutvikling"
                        date=""
                        location=""
                        description="Webutvikling er en hobby jeg virkelig har fått en fascinasjon for, og jeg bruker mye tid på å lære nye teknologier. Akkurat nå fokuserer jeg på å bli flinkere i React for å lage dynamiske og brukervennlige nettsider."
                      />
                      <CvLine
                        title="Musikk & Bassgitar"
                        date=""
                        location=""
                        description="Fra jeg var 13 år har jeg spilt bassgitar. Hovedsaklig har jeg spilt i kirkesammenheng, og har opp igjennom fått være med å spille på ulike arrangementer og konserter."
                      />
                    </div>
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
              <p className="text-end text-text opacity-0 group-hover/box:opacity-50 duration-500 pb-2">
                Les mer
              </p>
              <CvLineShort
                title="Sykling"
                date="2019 - Til dags dato"
                location=""
              />
              <div className="w-full my-2 h-[1px] group-hover/box:bg-secondary duration-500"></div>
              <CvLineShort
                title="Webutvikling"
                date="2021 - Til dags dato"
                location=""
              />
              <div className="w-full my-2 h-[1px] group-hover/box:bg-secondary duration-500"></div>

              <CvLineShort
                title="Musikk & Bassgitar"
                date="2013 - Til dags dato"
                location=""
              />
            </div>
          </SlideBox>
        </div>
        {overlayContent && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-500 ${
              isOverlayVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseOverlay}
          >
            <div
              className={`bg-white animate-open-box overflow-hidden rounded-lg shadow-lg relative  transition-transform duration-500 ease-in-out  ${
                isOverlayVisible ? "scale-100" : ""
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

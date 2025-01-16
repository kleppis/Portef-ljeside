import SlideIn from "../components/slideIn";

export const Home: React.FC = () => (
  <>
    <div className="bg-background text-text min-h-screen flex flex-col items-center justify-center">
      <h1 className="">Welcome to Home Page</h1>
      <a href="/contact">Contact</a>
      <a href="/about">About</a>
    </div>
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold">Scroll ned for å se animasjon</h1>
      <div className="h-[200vh]"></div> {/* Simulerer en høy side */}
      <SlideIn>
        <div className="p-6 bg-primary text-white rounded shadow-md">
          Dette er en boks som sklir inn!
        </div>
      </SlideIn>
      <SlideIn>
        <div className="p-6 bg-secondary text-white rounded shadow-md">
          Enda en boks med animasjon!
        </div>
      </SlideIn>
    </div>
  </>
);

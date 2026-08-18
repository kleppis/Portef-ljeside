import React from "react";
import SlideIn from "../components/slideIn";
import { education, experience, interests, person } from "../lib/content";

const About: React.FC = () => {
  return (
    <div>
      <section className="page-wrap grid items-center gap-10 pb-16 pt-10 md:grid-cols-12 md:pb-20 md:pt-16">
        <div className="md:col-span-7">
          <SlideIn>
            <p className="section-label">Om meg</p>
            <h1 className="mt-4">Jørgen Kleppan</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {person.bio}
            </p>
          </SlideIn>
        </div>
        <SlideIn delay={120} className="md:col-span-5">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/assets/images/sykkelMeg.jpeg"
              alt="Jørgen Kleppan på sykkeltur"
                className="aspect-[4/5] w-full object-cover object-[center_20%]"
            />
          </div>
        </SlideIn>
      </section>

      <section className="border-t border-divider">
        <div className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="section-label">Erfaring</p>
            <h2 className="mt-3">Hva jeg har gjort</h2>
          </div>
          <div className="md:col-span-8">
            <ul>
              {experience.map((item) => (
                <li
                  key={`${item.title}-${item.date}`}
                  className="grid gap-2 border-t border-divider py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-6"
                >
                  <p className="text-sm text-muted md:col-span-4">{item.date}</p>
                  <div className="md:col-span-8">
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-primary">{item.location}</p>
                    <p className="mt-3 text-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="section-label">Utdanning</p>
            <h2 className="mt-3">Studier</h2>
          </div>
          <div className="md:col-span-8">
            {education.map((item) => (
              <div
                key={item.title}
                className="grid gap-2 md:grid-cols-12 md:gap-6"
              >
                <p className="text-sm text-muted md:col-span-4">{item.date}</p>
                <div className="md:col-span-8">
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-primary">{item.location}</p>
                  <p className="mt-3 text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="section-label">Ved siden av</p>
            <h2 className="mt-3">Interesser</h2>
          </div>
          <div className="md:col-span-8 grid gap-8 sm:grid-cols-2">
            {interests.map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

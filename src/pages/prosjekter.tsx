import React from "react";
import SlideIn from "../components/slideIn";
import { ProjectCard } from "../components/projectCard";
import { personalProjects, workProjects } from "../lib/content";

const Prosjekter: React.FC = () => {
  return (
    <div>
      <section className="page-wrap pb-6 pt-14 md:pb-8 md:pt-24">
        <SlideIn>
          <p className="section-label">Portefølje</p>
          <h1 className="mt-4">Utvalgt arbeid</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Arbeid fra jobb og egne, personlige prosjekter. Nettsider, oppdrag
            og løsninger jeg har bygget.
          </p>
        </SlideIn>
      </section>

      <section className="page-wrap pb-12 md:pb-16">
        <SlideIn>
          <h2>Arbeidsprosjekter</h2>
        </SlideIn>
        {workProjects.map((project, i) => (
          <SlideIn key={project.id} delay={i * 70}>
            <ProjectCard
              project={project}
              index={String(i + 1).padStart(2, "0")}
              featured
            />
          </SlideIn>
        ))}
      </section>

      <section className="page-wrap pb-20 md:pb-28">
        <SlideIn>
          <h2>Personlige prosjekter</h2>
        </SlideIn>
        {personalProjects.map((project, i) => (
          <SlideIn key={project.id} delay={i * 70}>
            <ProjectCard
              project={project}
              index={String(i + 1).padStart(2, "0")}
              featured
            />
          </SlideIn>
        ))}
      </section>
    </div>
  );
};

export default Prosjekter;

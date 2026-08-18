import React from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SlideIn from "../components/slideIn";
import { ProjectCard } from "../components/projectCard";
import { featuredProjects, person, skills } from "../lib/content";

const Home: React.FC = () => {
  const featured = featuredProjects;

  return (
    <div>
      <section className="page-wrap grid items-center gap-10 pb-16 pt-10 sm:grid-cols-12 sm:gap-12 sm:pb-24 sm:pt-16">
        <div className="sm:col-span-7">
          <SlideIn>
            <span className="section-label">{person.location}</span>
          </SlideIn>

          <SlideIn delay={80}>
            <h1 className="display mt-6">{person.name}</h1>
          </SlideIn>

          <SlideIn delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {person.role} fra OsloMet. {person.shortBio}
            </p>
          </SlideIn>

          <SlideIn delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/prosjekter"
                className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-80"
              >
                Se arbeider
                <FiArrowRight />
              </Link>
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2 px-2 py-2.5 text-sm text-muted hover:text-text"
              >
                {person.email}
                <FiArrowUpRight />
              </a>
            </div>
          </SlideIn>
        </div>

        <SlideIn delay={180} className="sm:col-span-5">
          <figure className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/assets/images/portrait.jpeg"
                alt="Portrett av Jørgen Kleppan"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-sm text-muted">
              <span>Utvikler</span>
              <span>Oslo, Norge</span>
            </figcaption>
          </figure>
        </SlideIn>
      </section>

      <section className="border-t border-divider">
        <div className="page-wrap py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="section-label">01 — Portefølje</p>
              <h2 className="mt-3">Utvalgt arbeid</h2>
            </div>
            <Link
              to="/prosjekter"
              className="hidden items-center gap-1 text-sm text-muted hover:text-primary sm:inline-flex"
            >
              Alle prosjekter
              <FiArrowRight />
            </Link>
          </div>

          <div className="mt-6">
            {featured.map((project, i) => (
              <SlideIn key={project.id} delay={i * 80}>
                <ProjectCard
                  project={project}
                  index={String(i + 1).padStart(2, "0")}
                  featured
                />
              </SlideIn>
            ))}
          </div>

          <Link
            to="/prosjekter"
            className="mt-4 inline-flex items-center gap-1 text-sm text-primary sm:hidden"
          >
            Alle prosjekter
            <FiArrowRight />
          </Link>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="section-label">02 — Om</p>
            <h2 className="mt-3">Kort fortalt</h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              {person.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-divider px-3 py-1.5 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-1 text-sm text-primary hover:text-linkHover"
            >
              Mer om meg
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="page-wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="section-label">03 — Kontakt</p>
            <h2 className="mt-3">Ta kontakt</h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-xl text-lg text-muted">
              Lurer du på et prosjekt, trenger en nettside, eller vil bare si
              hei? Send en e-post eller ring.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2 font-serif text-2xl hover:text-primary md:text-3xl"
              >
                {person.email}
                <FiArrowUpRight className="text-lg" />
              </a>
              <a
                href={`tel:${person.phone}`}
                className="text-muted hover:text-text"
              >
                {person.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "../lib/content";

interface ProjectCardProps {
  project: Project;
  index: string;
  featured?: boolean;
}

export const ProjectCard = ({
  project,
  index,
  featured = false,
}: ProjectCardProps) => {
  const body = (
    <>
      <div className="flex items-start justify-between md:col-span-2">
        <span className="section-label">{index}</span>
        <span className="text-sm text-muted md:hidden">{project.year}</span>
      </div>

      <div
        className={`overflow-hidden rounded-xl bg-surface ${
          featured ? "md:col-span-4" : "md:col-span-3"
        }`}
      >
        <div className="flex aspect-[4/3] items-center justify-center border border-divider bg-background p-8">
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt ?? project.title}
              className="max-h-24 max-w-[8rem] object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="font-serif text-5xl text-muted transition-transform duration-500 group-hover:scale-105">
              {project.monogram}
            </span>
          )}
        </div>
      </div>

      <div className={featured ? "md:col-span-6" : "md:col-span-7"}>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-3xl md:text-4xl">{project.title}</h3>
          <span className="hidden shrink-0 text-sm text-muted md:inline">
            {project.year}
          </span>
        </div>
        <p className="mt-3 max-w-xl text-muted">
          {featured ? project.longDescription : project.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-divider px-3 py-1 text-xs tracking-wide text-muted"
            >
              {tag}
            </span>
          ))}
          {project.url && (
            <span className="ml-auto inline-flex items-center gap-1 text-sm text-primary">
              {project.urlLabel ?? "Åpne"}
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          )}
        </div>
      </div>
    </>
  );

  const layoutClass =
    "group grid gap-6 border-t border-divider py-10 md:grid-cols-12 md:gap-8 md:py-14";

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`${layoutClass} text-text hover:text-text`}
      >
        {body}
      </a>
    );
  }

  return <article className={layoutClass}>{body}</article>;
};

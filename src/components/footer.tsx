import { Link } from "react-router-dom";
import { person } from "../lib/content";

export const Footer = () => {
  return (
    <footer className="border-t border-divider">
      <div className="page-wrap flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between md:py-16">
        <div>
          <p className="font-serif text-2xl text-text">{person.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            {person.role} i {person.location}.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a href={`mailto:${person.email}`} className="text-muted hover:text-primary">
            {person.email}
          </a>
          <a href={`tel:${person.phone}`} className="text-muted hover:text-primary">
            {person.phoneDisplay}
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted">
          <Link to="/prosjekter" className="hover:text-text">
            Arbeid
          </Link>
          <Link to="/about" className="hover:text-text">
            Om meg
          </Link>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

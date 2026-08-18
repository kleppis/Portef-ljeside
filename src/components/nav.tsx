import { NavLink, Link, useLocation } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../lib/theme/themeProvider";
import { person } from "../lib/content";

const links = [
  { to: "/prosjekter", label: "Arbeid" },
  { to: "/about", label: "Om" },
];

export const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-divider/70 bg-background/80 backdrop-blur-md">
      <div className="page-wrap flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-text hover:text-primary md:text-xl"
        >
          {person.name}
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          <nav className="flex items-center gap-5 md:gap-7">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide ${
                  location.pathname === link.to
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`mailto:${person.email}`}
              className="hidden text-sm tracking-wide text-muted hover:text-text sm:inline"
            >
              Kontakt
            </a>
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Bytt til lyst tema" : "Bytt til mørkt tema"
            }
            className="flex h-9 w-9 items-center justify-center rounded-full border border-divider text-text transition-colors hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export const person = {
  name: "Jørgen Kleppan",
  role: "Nyutdannet dataingeniør",
  location: "Oslo",
  email: "jorgenklepp@outlook.com",
  phone: "+4793441227",
  phoneDisplay: "+47 934 41 227",
  shortBio: "Jeg designer og bygger nettsider og IT-løsninger.",
  bio: "Jeg heter Jørgen, er 26 år og nyutdannet dataingeniør fra OsloMet. Jeg er opptatt av webutvikling og av å bruke teknologi til å løse konkrete problemer. Ved siden av det jobber jeg med egne prosjekter. Ta gjerne kontakt hvis du vil samarbeide.",
};

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Java",
  "SQL",
  "HTML & CSS",
  "WordPress",
  ".NET",
  "Vite",
];

export type Project = {
  id: string;
  title: string;
  year: string;
  url?: string;
  urlLabel?: string;
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  monogram?: string;
  category: "work" | "personal";
};

export const workProjects: Project[] = [
  {
    id: "guard-automation",
    title: "Guard Automation",
    year: "jun. 2025 — des. 2025",
    description: "Utviklet en intern applikasjon i .NET hos Guard Automation.",
    longDescription:
      "Som utvikler hos Guard Automation laget jeg en intern applikasjon i .NET. Selskapet jobber med industriell automatisering, og applikasjonen skulle støtte det interne arbeidet.",
    tags: [".NET", "C#"],
    monogram: "GA",
    category: "work",
  },
  {
    id: "simplylearn",
    title: "SimplyLearn",
    year: "2024",
    description:
      "Responsive WordPress-sider og e-læringsløsninger for et opplæringsmiljø.",
    longDescription:
      "Som utvikler hos SimplyLearn bygde jeg responsive WordPress-nettsider og e-læringsløsninger, blant annet med Beaver Builder og Advanced Custom Fields. Arbeidet handlet om å gjøre innhold tydelig og sidene enkle å oppdatere.",
    tags: ["WordPress", "ACF", "Kundebehandling"],
    monogram: "SL",
    category: "work",
  },
  {
    id: "kleppan-it",
    title: "Kleppan IT",
    year: "2024 — nå",
    description:
      "Eget firma for webutvikling og IT-støtte, der jeg tar det jeg har lært ut i praksis.",
    longDescription:
      "Kleppan IT er et sideprosjekt og et lite firma der jeg tilbyr webutvikling og IT-support. Målet er å bygge løsninger som er enkle å bruke, og samtidig få mer erfaring med hele løpet fra idé til ferdig side.",
    tags: ["Webutvikling", "IT-support", "CRM", "Analyse"],
    image: "/assets/logo/hv_grønn.svg",
    imageAlt: "Kleppan IT-logo",
    category: "work",
  },
];

export const personalProjects: Project[] = [
  {
    id: "revetal-halvmaraton",
    title: "Revetal Halvmaraton",
    year: "2026",
    url: "https://revetalhalvmaraton.no/",
    urlLabel: "revetalhalvmaraton.no",
    description:
      "Nettside for Revetal Halvmaraton, med distanser, løypeinfo og praktisk informasjon til løpere.",
    longDescription:
      "En nettside for Revetal Halvmaraton, et løp med halvmaraton og 5 km gjennom Revetal. Siden samler distanser, løypekart, påmelding og praktisk informasjon, og gir løpere det de trenger før start.",
    tags: ["Next.js", "Fullstack", "CRM", "SEO", "Postgres"],
    monogram: "RH",
    category: "personal",
  },
  {
    id: "hortenslopet",
    title: "Hortensløpet",
    year: "2026",
    url: "https://hortenslopet.no/",
    urlLabel: "hortenslopet.no",
    description:
      "Nettside for Hortensløpet i Horten, med distanser, løypekart og verktøy for tempo.",
    longDescription:
      "Nettside for Hortensløpet med 10 km og 5 km i Horten sentrum. Siden har oversikt over distanser, interaktivt løypekart og fartskalkulator, slik at løpere enkelt finner rytme og informasjon før løpet.",
    tags: ["Next.js", "Fullstack", "CRM", "SEO", "Postgres"],
    monogram: "HL",
    category: "personal",
  },
  {
    id: "vinje-skulegard",
    title: "Vinje Skulegard",
    year: "2026",
    url: "https://stiftingavinjeskulegard.no/",
    urlLabel: "stiftingavinjeskulegard.no",
    description:
      "Nettside for Stiftinga Vinje Skulegard, et opplæringstilbud for skolene i Vinje kommune.",
    longDescription:
      "Nettside for Stiftinga Vinje Skulegard. Stiftelsen gir et tilpasset opplæringstilbud til skolene i Vinje, og siden samler informasjon om garden, berekraft og nyheter fra arbeidet med elevene.",
    tags: ["Fullstack", "SEO"],
    monogram: "VS",
    category: "personal",
  },
  {
    id: "maria-sebastian",
    title: "Maria & Sebastian",
    year: "2024",
    url: "https://www.maria-sebastian.no/",
    urlLabel: "maria-sebastian.no",
    description:
      "Bryllupsside for et par, med oversikt, praktisk informasjon og et tydelig visuelt uttrykk.",
    longDescription:
      "En skreddersydd bryllupsside bygget i React. Siden samler informasjon til gjestene og gir paret et sted som føles personlig, uten å være tungt å vedlikeholde.",
    tags: ["React", "Frontend"],
    image: "/assets/images/S&M3.svg",
    imageAlt: "Logo for Maria og Sebastian",
    category: "personal",
  },
];

export const projects: Project[] = [...workProjects, ...personalProjects];

export const featuredProjects: Project[] = [
  workProjects[0],
  personalProjects[0],
];

export const experience = [
  {
    title: "Utvikler",
    date: "jun. 2025 — des. 2025",
    location: "Guard Automation",
    description: "Jobbet med å lage en intern applikasjon i .NET.",
  },
  {
    title: "Utvikler",
    date: "feb. 2024 — okt. 2024",
    location: "SimplyLearn",
    description:
      "Utviklet responsive WordPress-nettsider og e-læringsløsninger med Beaver Builder og Advanced Custom Fields.",
  },
  {
    title: "Budbilsjåfør",
    date: "aug. 2021 — jun. 2022",
    location: "Posten Norge",
    description:
      "Leverte bedriftspakker og jobbet med effektivitet, tidshåndtering og kundekommunikasjon.",
  },
  {
    title: "Budbilsjåfør",
    date: "okt. 2020 — mai 2021",
    location: "Posten Norge",
    description:
      "Kveldssjåfør i Oslo med ruteplanlegging, sortering og levering i et hektisk miljø.",
  },
  {
    title: "Operasjonssoldat",
    date: "sep. 2019 — aug. 2020",
    location: "Forsvaret",
    description:
      "Håndterte informasjon med struktur og nøyaktighet i Luftforsvaret, og bistod avdelinger med kontroll og formidling.",
  },
];

export const education = [
  {
    title: "Dataingeniør",
    date: "2023 — 2026",
    location: "OsloMet",
    description:
      "Bachelor i dataingeniør med vekt på webutvikling, databaser, algoritmer og praktisk systemutvikling.",
  },
];

export const interests = [
  {
    title: "Sykling",
    description:
      "Sykling er hobbyen jeg bruker mest tid på. Jeg trener jevnlig og liker lange turer, med mål som Trondheim–Oslo i sikte.",
  },
  {
    title: "Webutvikling",
    description:
      "Jeg bruker mye tid på å lære nye verktøy, og jobber særlig med React for å lage tydelige og brukervennlige nettsider.",
  },
  {
    title: "Musikk og bassgitar",
    description:
      "Jeg har spilt bassgitar siden jeg var 13, mest i kirkesammenheng, og har vært med på arrangementer og konserter.",
  },
];

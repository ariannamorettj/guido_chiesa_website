export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavItem[];
};

const base = import.meta.env.BASE_URL;
const b = (path: string) => base + path.replace(/^\//, '');

export const navGroups: NavGroup[] = [
  { label: "News",             href: base },
  { label: "Biografia",        href: b("/biografia/") },
  { label: "Filmografia",      href: b("/filmografia/") },
  { label: "Sceneggiature",    href: b("/sceneggiature/") },
  { label: "Testi",            href: b("/testi/") },
  { label: "Bibliografia",     href: b("/bibliografia/") },
  { label: "Progetti",         href: b("/progetti/") },
  { label: "Musica",           href: b("/musica/") },
  { label: "Foto",             href: b("/foto/") },
  { label: "Video",            href: b("/video/") },
  { label: "Rassegna stampa",  href: b("/rassegna-stampa/") },
  { label: "Links",            href: b("/links/") },
  { label: "Contatti",         href: b("/contatti/") },
];

export const footerLinks: NavItem[] = [
  { label: "Biografia",        href: b("/biografia/") },
  { label: "Filmografia",      href: b("/filmografia/") },
  { label: "Sceneggiature",    href: b("/sceneggiature/") },
  { label: "Testi",            href: b("/testi/") },
  { label: "Bibliografia",     href: b("/bibliografia/") },
  { label: "Progetti",         href: b("/progetti/") },
  { label: "Musica",           href: b("/musica/") },
  { label: "Foto",             href: b("/foto/") },
  { label: "Video",            href: b("/video/") },
  { label: "Rassegna stampa",  href: b("/rassegna-stampa/") },
  { label: "Links",            href: b("/links/") },
  { label: "Contatti",         href: b("/contatti/") },
];

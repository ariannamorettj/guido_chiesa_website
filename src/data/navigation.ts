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

export const navGroups: NavGroup[] = [
  { label: "News", href: "/" },
  { label: "Biografia", href: "/biografia/" },
  { label: "Filmografia", href: "/filmografia/" },
  { label: "Sceneggiature", href: "/sceneggiature/" },
  { label: "Testi", href: "/testi/" },
  { label: "Bibliografia", href: "/bibliografia/" },
  { label: "Progetti", href: "/progetti/" },
  { label: "Musica", href: "/musica/" },
  { label: "Foto", href: "/foto/" },
  { label: "Video", href: "/video/" },
  { label: "Rassegna stampa", href: "/rassegna-stampa/" },
  { label: "Links", href: "/links/" },
  { label: "Contatti", href: "/contatti/" },
];

export const footerLinks: NavItem[] = [
  { label: "Biografia", href: "/biografia/" },
  { label: "Filmografia", href: "/filmografia/" },
  { label: "Sceneggiature", href: "/sceneggiature/" },
  { label: "Testi", href: "/testi/" },
  { label: "Bibliografia", href: "/bibliografia/" },
  { label: "Progetti", href: "/progetti/" },
  { label: "Musica", href: "/musica/" },
  { label: "Foto", href: "/foto/" },
  { label: "Video", href: "/video/" },
  { label: "Rassegna stampa", href: "/rassegna-stampa/" },
  { label: "Links", href: "/links/" },
  { label: "Contatti", href: "/contatti/" },
];

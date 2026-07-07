export interface Project {
  name: string;
  cat: string;
  url: string;
  demo?: string;
  desc: string;
  tags: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Achievement {
  tag: string;
  big: string;
  title: string;
  sub: string;
  url: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  date: string;
  current: boolean;
  bullets: React.ReactNode[];
}

export interface Repo {
  name: string;
  desc: string;
  lang: string;
  stars: number;
  url: string;
}

export interface PaletteItem {
  icon: string;
  label: string;
  href: string;
  hint: string;
}

/** A styled run inside a terminal output line. */
export type TermSeg = string | { a?: string; t: string; ext?: boolean; acc?: boolean };

/** A single line in the terminal log: either an echoed command or an output. */
export type TermLine = { echo: true; cmd: string } | { segs: TermSeg[] };

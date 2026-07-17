"use client";

import { useCallback, useEffect, useState } from "react";
import TopBar from "./TopBar";
import Hero from "./Hero";
import StatStrip from "./StatStrip";
import About from "./About";
import Terminal from "./Terminal";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Contact from "./Contact";
import CommandPalette from "./CommandPalette";

type Theme = "dark" | "light";

export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Sync React state with the theme the inline head script already applied.
  useEffect(() => {
    const applied = document.documentElement.dataset.theme;
    if (applied === "light" || applied === "dark") setTheme(applied);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  // Global ⌘K / Ctrl+K and Esc.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(true);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const themeLabel = theme === "dark" ? "◐ dark" : "◑ light";

  return (
    <div id="tty">
      <TopBar
        themeLabel={themeLabel}
        onToggleTheme={toggleTheme}
        onOpenPalette={openPalette}
      />
      <Hero />
      <StatStrip />
      <About />
      <Terminal theme={theme} onToggleTheme={toggleTheme} />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact themeLabel={themeLabel} />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </div>
  );
}

"use client";

import { LINKS } from "@/lib/data";

const NAV = [
  "about",
  "experience",
  "projects",
  "skills",
  "achievements",
  "contact",
];

export default function TopBar({
  themeLabel,
  onToggleTheme,
  onOpenPalette,
}: {
  themeLabel: string;
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 22px",
        fontSize: 12.5,
      }}
    >
      <span
        style={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: "var(--acc)",
          boxShadow: "var(--glow)",
          flex: "none",
        }}
      />
      <span style={{ color: "var(--acc)", fontWeight: 700 }}>owais@iiitj</span>
      <span style={{ color: "var(--faint)" }}>:~$</span>
      <nav
        data-hide-narrow
        style={{ marginLeft: 26, display: "flex", gap: 20 }}
      >
        {NAV.map((n) => (
          <a key={n} className="navl" href={`#${n}`}>
            {n}
          </a>
        ))}
      </nav>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <button
          onClick={onOpenPalette}
          style={{
            background: "transparent",
            border: "1px solid var(--line2)",
            color: "var(--dim)",
            font: "inherit",
            fontSize: 11.5,
            padding: "5px 11px",
            cursor: "pointer",
            display: "flex",
            gap: 7,
            alignItems: "center",
          }}
        >
          ⌘K <span data-hide-narrow style={{ color: "var(--faint)" }}>search</span>
        </button>
        <a
          href={LINKS.resume}
          target="_blank"
          rel="noreferrer"
          data-hide-narrow
          style={{
            background: "var(--accdim)",
            border: "1px solid var(--acc)",
            color: "var(--acc)",
            fontSize: 11.5,
            padding: "5px 11px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          ↓ resume
        </a>
        <button
          onClick={onToggleTheme}
          style={{
            background: "transparent",
            border: "1px solid var(--line2)",
            color: "var(--dim)",
            font: "inherit",
            fontSize: 11.5,
            padding: "5px 11px",
            cursor: "pointer",
          }}
        >
          {themeLabel}
        </button>
      </div>
    </div>
  );
}

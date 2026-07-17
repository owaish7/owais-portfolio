"use client";

import { useEffect, useRef, useState } from "react";
import { paletteItems } from "@/lib/data";

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const q = query.toLowerCase().trim();
  const results = q
    ? paletteItems.filter((i) =>
        (i.label + " " + i.hint).toLowerCase().includes(q)
      )
    : paletteItems;

  const activate = (href: string) => {
    if (href.startsWith("http")) window.open(href, "_blank");
    else location.hash = href;
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        background: "rgba(0,0,0,.6)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "14vh",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(560px,92vw)",
          background: "var(--panel)",
          border: "1px solid var(--acc)",
          boxShadow: "0 0 30px rgba(57,255,20,.25)",
        }}
      >
        <div
          style={{
            padding: "14px 16px",
            borderBottom: "1px solid var(--line)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ color: "var(--acc)" }}>➜</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && results[0]) activate(results[0].href);
            }}
            placeholder="jump to… (about, projects, contact…)"
            autoComplete="off"
            spellCheck={false}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--fg)",
              font: "inherit",
              flex: 1,
              caretColor: "var(--acc)",
            }}
          />
          <span
            style={{
              color: "var(--faint)",
              fontSize: 11,
              border: "1px solid var(--line2)",
              padding: "2px 6px",
            }}
          >
            esc
          </span>
        </div>
        <div style={{ maxHeight: 320, overflowY: "auto", padding: 6 }}>
          {results.map((it) => (
            <a
              key={it.label}
              className="pk"
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={it.href.startsWith("http") ? "noreferrer" : undefined}
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "11px 12px",
                textDecoration: "none",
                color: "var(--fg)",
              }}
            >
              <span
                style={{ color: "var(--acc)", width: 18, textAlign: "center" }}
              >
                {it.icon}
              </span>
              <span style={{ flex: 1, fontSize: 14 }}>{it.label}</span>
              <span style={{ color: "var(--faint)", fontSize: 11 }}>
                {it.hint}
              </span>
            </a>
          ))}
          {results.length === 0 && (
            <div
              style={{
                padding: "16px 12px",
                color: "var(--faint)",
                fontSize: 13,
              }}
            >
              no matches
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

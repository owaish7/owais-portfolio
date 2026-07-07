"use client";

import { useRef, useState } from "react";
import { LINKS } from "@/lib/data";
import type { TermLine, TermSeg } from "@/lib/types";

const INITIAL: TermLine[] = [
  {
    segs: [
      "owais-portfolio v1.0.0  —  type ",
      { acc: true, t: "help" },
      " and hit enter",
    ],
  },
  { segs: ["\u00A0"] },
];

function Segment({ s }: { s: TermSeg }) {
  if (typeof s === "string") return <>{s}</>;
  if (s.a)
    return (
      <a
        href={s.a}
        target={s.ext ? "_blank" : undefined}
        rel={s.ext ? "noreferrer" : undefined}
        style={{ color: "var(--acc)" }}
      >
        {s.t}
      </a>
    );
  if (s.acc) return <span style={{ color: "var(--acc)" }}>{s.t}</span>;
  return <>{s.t}</>;
}

function Line({ line }: { line: TermLine }) {
  const style: React.CSSProperties = {
    whiteSpace: "pre-wrap",
    lineHeight: 1.6,
    color: "var(--dim)",
  };
  if ("echo" in line) {
    return (
      <div style={style}>
        <span style={{ color: "var(--acc)" }}>➜ ~</span>
        {"  " + line.cmd}
      </div>
    );
  }
  return (
    <div style={style}>
      {line.segs.map((s, i) => (
        <Segment key={i} s={s} />
      ))}
    </div>
  );
}

export default function Terminal({
  theme,
  onToggleTheme,
}: {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  const [lines, setLines] = useState<TermLine[]>(INITIAL);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const focus = () => inputRef.current?.focus();
  const scrollDown = () =>
    setTimeout(() => {
      if (scrollRef.current)
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 20);

  const run = (raw: string) => {
    const cmd = raw.trim();
    const echo: TermLine = { echo: true, cmd };
    const out = (segs: TermSeg[]): TermLine => ({ segs });

    if (!cmd) {
      setLines((l) => [...l, echo]);
      setInput("");
      scrollDown();
      return;
    }

    const c = cmd.toLowerCase();
    let extra: TermLine[] = [];

    switch (c) {
      case "help":
        extra = [
          out([
            "available: ",
            {
              acc: true,
              t: "whoami about experience projects skills achievements contact github resume theme clear sudo",
            },
          ]),
        ];
        break;
      case "whoami":
        extra = [
          out([
            "Mohammad Owais — Software Engineer @ Talendy (Tech Japan). B.Tech CS, IIIT Jabalpur (CPI 8.1). Search infra by day, competitive programming by night.",
          ]),
        ];
        break;
      case "about":
        extra = [
          out([
            "I build large-scale search systems and solve 1000+ CP problems. ",
            { a: "#about", t: "→ read more" },
          ]),
        ];
        break;
      case "experience":
      case "exp":
        extra = [
          out([
            "Talendy (SWE, 2026–) · Akatsuki Technologies JP (SDE Intern). ",
            { a: "#experience", t: "→ full log" },
          ]),
        ];
        break;
      case "projects":
      case "ls":
        extra = [
          out([
            "food-link/   fast-er-ambulance/   ",
            { a: "#projects", t: "→ open" },
          ]),
        ];
        break;
      case "skills":
        extra = [
          out([
            "Python C++ Java JS TS · React Next Node Flask FastAPI · AWS Azure Docker · Mongo Postgres MySQL",
          ]),
        ];
        break;
      case "achievements":
      case "cp":
      case "stats":
        extra = [
          out([
            "ICPC Asia West AIR 102 · Meta Hacker Cup R2 · Codeforces Specialist 1503 · LeetCode Top 6%. ",
            { a: "#achievements", t: "→ details" },
          ]),
        ];
        break;
      case "resume":
      case "cv":
        extra = [
          out([
            "opening résumé ↗ ",
            { a: LINKS.resume, t: "drive.google.com", ext: true },
          ]),
        ];
        setTimeout(() => window.open(LINKS.resume, "_blank"), 200);
        break;
      case "contact":
        extra = [
          out([
            { a: `mailto:${LINKS.email}`, t: LINKS.email },
            ` · ${LINKS.phone} · `,
            { a: LINKS.linkedin, t: "linkedin", ext: true },
            " · ",
            { a: LINKS.github, t: "github/owaish7", ext: true },
          ]),
        ];
        break;
      case "github":
        extra = [
          out(["github.com/owaish7 — opening ↗"]),
          out([{ a: "#github", t: "→ see repos below" }]),
        ];
        setTimeout(() => window.open(LINKS.github, "_blank"), 200);
        break;
      case "theme":
        onToggleTheme();
        extra = [out(["theme → " + (theme === "dark" ? "light" : "dark")])];
        break;
      case "sudo":
      case "sudo su":
        extra = [out(["nice try 😉 — you don't have root here."])];
        break;
      case "clear":
      case "cls":
        setLines([]);
        setInput("");
        return;
      default:
        extra = [
          out([
            "command not found: " + cmd + "  — type ",
            { acc: true, t: "help" },
          ]),
        ];
    }

    setLines((l) => [...l, echo, ...extra]);
    setInput("");
    scrollDown();
  };

  return (
    <section
      style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 78px" }}
    >
      <div style={{ color: "var(--acc)", fontSize: 13, marginBottom: 14 }}>
        $ ./talk-to-me.sh{" "}
        <span style={{ color: "var(--faint)" }}>
          # it&apos;s real — type a command
        </span>
      </div>
      <div
        onClick={focus}
        style={{
          border: "1px solid var(--line2)",
          background: "var(--panel)",
          cursor: "text",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "9px 14px",
            borderBottom: "1px solid var(--line)",
            fontSize: 11,
            color: "var(--faint)",
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#ff5f56",
            }}
          />
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#ffbd2e",
            }}
          />
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#27c93f",
            }}
          />
          <span style={{ marginLeft: 8 }}>owais@portfolio — bash</span>
        </div>
        <div
          ref={scrollRef}
          style={{
            padding: "16px 16px 18px",
            fontSize: 13.5,
            minHeight: 190,
            maxHeight: 340,
            overflowY: "auto",
          }}
        >
          {lines.map((ln, i) => (
            <Line key={i} line={ln} />
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              marginTop: 4,
            }}
          >
            <span style={{ color: "var(--acc)", flex: "none" }}>➜ ~</span>
            <input
              id="tinput"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") run(input);
              }}
              placeholder="try: help"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

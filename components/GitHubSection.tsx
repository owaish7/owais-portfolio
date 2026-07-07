"use client";

import { useEffect, useState } from "react";
import { fallbackRepos, LINKS } from "@/lib/data";
import type { Repo } from "@/lib/types";

const CELLS = 371; // 7 rows x 53 weeks

function levelColor(level: number): string {
  switch (level) {
    case 0:
      return "var(--line)";
    case 1:
      return "color-mix(in srgb,var(--acc) 35%,var(--bg))";
    case 2:
      return "color-mix(in srgb,var(--acc) 65%,var(--bg))";
    default:
      return "var(--acc)";
  }
}

// Deterministic pattern used only if the live contribution API is unavailable.
function fallbackLevels(): number[] {
  let seed = 20260707;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0xffffffff;
  };
  const arr: number[] = [];
  for (let i = 0; i < CELLS; i++) {
    const r = rnd();
    arr.push(r > 0.86 ? 3 : r > 0.66 ? 2 : r > 0.4 ? 1 : 0);
  }
  return arr;
}

interface ContribDay {
  level?: number;
}

interface ApiRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  fork: boolean;
  pushed_at: string;
}

export default function GitHubSection() {
  const [levels, setLevels] = useState<number[]>([]);
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [repoNote, setRepoNote] = useState(
    "fetching live from github.com/owaish7 …"
  );

  // Contribution heatmap — real data via public proxy, deterministic fallback.
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${LINKS.githubUser}?y=last`
        );
        if (!r.ok) throw new Error("status " + r.status);
        const j = (await r.json()) as { contributions?: ContribDay[] };
        const days = (j.contributions || []).map((d) => d.level ?? 0);
        if (alive) setLevels(days.length ? days.slice(-CELLS) : fallbackLevels());
      } catch {
        if (alive) setLevels(fallbackLevels());
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Live repositories with graceful fallback to a curated list.
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${LINKS.githubUser}/repos?sort=updated&per_page=100`
        );
        if (!res.ok) throw new Error("status " + res.status);
        const data = (await res.json()) as ApiRepo[];
        const mapped = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, 4)
          .map((r) => ({
            name: r.name,
            desc: r.description || "No description provided.",
            lang: r.language || "Code",
            stars: r.stargazers_count,
            url: r.html_url,
          }));
        if (!alive) return;
        if (mapped.length) {
          setRepos(mapped);
          setRepoNote(
            "✓ live from the GitHub API — sorted by stars, then recent activity"
          );
        } else {
          setRepos(fallbackRepos);
          setRepoNote("showing highlights — no public repos returned");
        }
      } catch {
        if (!alive) return;
        setRepos(fallbackRepos);
        setRepoNote("showing curated highlights (live fetch unavailable)");
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const legend = ["var(--line)", levelColor(1), levelColor(2), "var(--acc)"];

  return (
    <section
      id="github"
      style={{ maxWidth: 1080, margin: "0 auto", padding: "8px 24px 78px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 22,
        }}
      >
        <div style={{ color: "var(--acc)", fontSize: 13 }}>
          $ git log --oneline --all{" "}
          <span style={{ color: "var(--faint)" }}>// @owaish7</span>
        </div>
        <a
          className="lk"
          href={LINKS.github}
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: 12 }}
        >
          open profile ↗
        </a>
      </div>

      <div
        style={{
          border: "1px solid var(--line)",
          background: "var(--panel)",
          padding: "22px 22px 18px",
          marginBottom: 22,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            color: "var(--faint)",
            marginBottom: 14,
          }}
        >
          <span>// CONTRIBUTION ACTIVITY</span>
          <span>last 52 weeks</span>
        </div>
        <div style={{ overflowX: "auto" }}>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridTemplateRows: "repeat(7,11px)",
              gridAutoColumns: "11px",
              gap: 3,
              minWidth: 760,
            }}
          >
            {levels.map((lv, i) => (
              <span
                key={i}
                className="cell"
                style={{ background: levelColor(lv) }}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 14,
            fontSize: 11,
            color: "var(--faint)",
          }}
        >
          less
          {legend.map((bg, i) => (
            <span
              key={i}
              className="cell"
              style={{ width: 11, height: 11, padding: 0, background: bg }}
            />
          ))}
          more
        </div>
      </div>

      <div
        data-two
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
      >
        {repos.map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid var(--line)",
              background: "var(--panel)",
              padding: "18px 20px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              transition: ".2s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--acc)",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {r.name}
              </span>
              <span style={{ color: "var(--faint)", fontSize: 12 }}>
                ★ {r.stars}
              </span>
            </div>
            <div
              style={{
                color: "var(--dim)",
                fontSize: 13,
                lineHeight: 1.5,
                minHeight: "2.6em",
              }}
            >
              {r.desc}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: 11.5,
                color: "var(--faint)",
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "var(--acc)",
                }}
              />
              {r.lang}
            </div>
          </a>
        ))}
      </div>
      <div style={{ color: "var(--faint)", fontSize: 12, marginTop: 12 }}>
        {repoNote}
      </div>
    </section>
  );
}

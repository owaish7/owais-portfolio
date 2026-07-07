import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ maxWidth: 1080, margin: "0 auto", padding: "8px 24px 78px" }}
    >
      <div style={{ color: "var(--acc)", fontSize: 13, marginBottom: 26 }}>
        $ ls ./projects
      </div>
      <div
        data-two
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 22,
        }}
      >
        {projects.map((p) => (
          <div
            key={p.name}
            style={{
              border: "1px solid var(--line)",
              background: "var(--panel)",
              padding: "26px 26px 22px",
              transition: ".2s",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 10,
              }}
            >
              <span
                style={{ fontSize: 22, fontWeight: 700, color: "var(--fg)" }}
              >
                {p.name}
              </span>
              <span
                style={{
                  color: "var(--faint)",
                  fontSize: 12,
                  whiteSpace: "nowrap",
                }}
              >
                / {p.cat}
              </span>
            </div>
            <p
              style={{
                margin: "14px 0 16px",
                color: "var(--dim)",
                fontSize: 14,
                lineHeight: 1.65,
                flex: 1,
              }}
            >
              {p.desc}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 7,
                marginBottom: 16,
              }}
            >
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    border: "1px solid var(--line2)",
                    color: "var(--dim)",
                    fontSize: 11,
                    padding: "4px 9px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 9, marginTop: "auto" }}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                data-plink
                style={{
                  border: "1px solid var(--line2)",
                  color: "var(--dim)",
                  fontSize: 12,
                  padding: "6px 13px",
                  textDecoration: "none",
                  transition: ".18s",
                }}
              >
                {"</>"} code ↗
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  data-plink
                  style={{
                    border: "1px solid var(--acc)",
                    color: "var(--acc)",
                    fontSize: 12,
                    padding: "6px 13px",
                    textDecoration: "none",
                    transition: ".18s",
                  }}
                >
                  ▶ live demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

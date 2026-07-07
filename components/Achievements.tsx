import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{ maxWidth: 1080, margin: "0 auto", padding: "8px 24px 78px" }}
    >
      <div style={{ color: "var(--acc)", fontSize: 13, marginBottom: 26 }}>
        $ ./achievements --competitive-programming
      </div>
      <div
        data-three
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 16,
        }}
      >
        {achievements.map((a) => (
          <a
            key={a.tag + a.big}
            href={a.url}
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid var(--line)",
              background: "var(--panel)",
              padding: "22px 22px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              textDecoration: "none",
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
                  fontSize: 11,
                  color: "var(--faint)",
                  letterSpacing: ".06em",
                }}
              >
                {a.tag}
              </span>
              <span style={{ color: "var(--acc)" }}>↗</span>
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "var(--acc)",
                textShadow: "var(--glow)",
              }}
            >
              {a.big}
            </div>
            <div style={{ fontSize: 13, color: "var(--fg)" }}>{a.title}</div>
            <div
              style={{ fontSize: 12, color: "var(--dim)", lineHeight: 1.5 }}
            >
              {a.sub}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

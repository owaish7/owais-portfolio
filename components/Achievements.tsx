import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 24px 90px" }}
    >
      <div style={{ color: "var(--acc)", fontSize: 13, marginBottom: 26 }}>
        $ ./achievements --competitive-programming
      </div>
      <div
        data-three
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20,
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
              padding: "30px 28px 28px",
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
                fontSize: 40,
                fontWeight: 800,
                color: "var(--acc)",
                textShadow: "var(--glow)",
              }}
            >
              {a.big}
            </div>
            <div style={{ fontSize: 16, color: "var(--fg)", fontWeight: 600 }}>{a.title}</div>
            <div
              style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.6 }}
            >
              {a.sub}
            </div>
            {a.writeup && (
              <div style={{ fontSize: 12, color: "var(--faint)", lineHeight: 1.6, marginTop: 5 }}>
                {a.writeup}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}


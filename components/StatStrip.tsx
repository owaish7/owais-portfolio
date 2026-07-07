import { STATS } from "@/lib/data";

export default function StatStrip() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "26px 22px",
              borderRight:
                i < STATS.length - 1 ? "1px solid var(--line)" : undefined,
            }}
          >
            <div
              style={{
                fontSize: "clamp(26px,4vw,38px)",
                fontWeight: 800,
                color: "var(--acc)",
                textShadow: "var(--glow)",
              }}
            >
              {s.big}
            </div>
            <div
              style={{
                fontSize: 10.5,
                color: "var(--faint)",
                letterSpacing: ".08em",
                marginTop: 4,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

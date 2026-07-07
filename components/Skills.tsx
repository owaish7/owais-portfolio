import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ maxWidth: 1080, margin: "0 auto", padding: "8px 24px 78px" }}
    >
      <div style={{ color: "var(--acc)", fontSize: 13, marginBottom: 26 }}>
        $ tree ./skills
      </div>
      <div
        data-two
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "16px 44px",
        }}
      >
        {skillGroups.map((g) => (
          <div
            key={g.name}
            style={{
              borderBottom: "1px solid var(--line)",
              paddingBottom: 16,
            }}
          >
            <div
              style={{ color: "var(--acc)", fontSize: 13, marginBottom: 10 }}
            >
              ├─ {g.name}/
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                paddingLeft: 16,
              }}
            >
              {g.items.map((s) => (
                <span
                  key={s}
                  style={{
                    color: "var(--dim)",
                    fontSize: 13.5,
                    border: "1px solid var(--line2)",
                    padding: "5px 11px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

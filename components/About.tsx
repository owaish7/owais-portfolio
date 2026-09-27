const SNAPSHOT: { k: string; v: React.ReactNode }[] = [
  { k: "location", v: "Noida, India" },
  { k: "education", v: "IIIT Jabalpur · CS" },
  { k: "graduated", v: "June 2026" },
  { k: "relocation", v: "Open to Europe / UK" },
  { k: "focus", v: "AI · Automation · Backend" },
  {
    k: "status",
    v: <span style={{ color: "var(--acc)" }}>● open to opportunities</span>,
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ maxWidth: 1080, margin: "0 auto", padding: "78px 24px" }}
    >
      <div style={{ color: "var(--acc)", fontSize: 13, marginBottom: 22 }}>
        $ cat about.md
      </div>
      <div
        data-two
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 44,
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 16px",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--fg)",
            }}
          >
            I&apos;m a recent B.Tech CS graduate from{" "}
            <span style={{ color: "var(--acc)" }}>IIIT Jabalpur</span> (CPI 8.1)
            building practical AI tools on a foundation of backend engineering
            and competitive programming.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.75,
              color: "var(--dim)",
            }}
          >
            My work spans search infrastructure, retrieval-augmented generation,
            workflow automation and model fine-tuning. I like understanding the
            pieces underneath a tool: how it retrieves evidence, handles a
            failed API call, or decides when a human should take over. I document
            those decisions and their limitations alongside the code.
          </p>
        </div>
        <div
          style={{
            border: "1px solid var(--line)",
            background: "var(--panel)",
            padding: "22px 24px",
          }}
        >
          <div
            style={{
              color: "var(--faint)",
              fontSize: 11,
              letterSpacing: ".08em",
              marginBottom: 16,
            }}
          >
            // SNAPSHOT
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 13,
              fontSize: 13.5,
            }}
          >
            {SNAPSHOT.map((row, i) => (
              <div
                key={row.k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom:
                    i < SNAPSHOT.length - 1
                      ? "1px dashed var(--line2)"
                      : undefined,
                  paddingBottom: i < SNAPSHOT.length - 1 ? 11 : undefined,
                }}
              >
                <span style={{ color: "var(--faint)" }}>{row.k}</span>
                <span>{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



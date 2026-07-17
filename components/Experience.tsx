const hi = (t: React.ReactNode) => (
  <span style={{ color: "var(--fg)" }}>{t}</span>
);

interface Entry {
  role: string;
  company: string;
  date: string;
  current: boolean;
  bullets: React.ReactNode[];
}

const ENTRIES: Entry[] = [
  {
    role: "Software Engineer",
    company: "Talendy (Tech Japan)",
    date: "Jun 2026 — Present",
    current: true,
    bullets: [
      <>
        Built {hi("AI job summaries")} with Amazon Bedrock (Claude Haiku 4.5) so
        advisors can scan roles without opening each listing.
      </>,
      <>
        Architected a cross-source dedup system (facility + role + employment
        composite key) over {hi("256,000+ records")} from 7 sources, removing{" "}
        {hi("12,600 duplicates")} while keeping every job findable per source.
      </>,
      <>
        Leading the {hi("Azure→AWS migration")} — onto OpenSearch, ECS Fargate
        and S3, including a full rewrite of the query builder from Azure OData to
        OpenSearch DSL.
      </>,
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Akatsuki AI Technologies, Japan",
    date: "Nov 2025 — Jun 2026",
    current: false,
    bullets: [
      <>
        Built the full automated pipeline on Azure for a healthcare job-search
        platform — scrapers for 4 Japanese portals, preprocessing and indexing
        into Azure AI Search — scaling it to {hi("145,000+ listings")} across all
        47 prefectures with 6-worker concurrency and a resume layer for network
        failures.
      </>,
      <>
        Generated {hi("AI summaries")} for the full catalog with Azure OpenAI,
        running 20 parallel calls and handling content-filter edge cases to reach
        near 100% coverage.
      </>,
      <>
        Fixed distance search returning no nursing jobs — lifting coordinate
        coverage from {hi("51% to 100%")} and results within 10 km of Tokyo from
        0 to over 5,400.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ maxWidth: 1080, margin: "0 auto", padding: "8px 24px 78px" }}
    >
      <div style={{ color: "var(--acc)", fontSize: 13, marginBottom: 26 }}>
        $ cat experience.log
      </div>
      <div
        style={{
          borderLeft: "2px solid var(--line2)",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {ENTRIES.map((e, i) => (
          <div
            key={e.role}
            style={{
              position: "relative",
              padding: i === 0 ? "0 0 40px 30px" : "0 0 8px 30px",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: -7,
                top: 5,
                width: 12,
                height: 12,
                borderRadius: 2,
                background: e.current ? "var(--acc)" : "var(--panel2)",
                border: e.current ? undefined : "2px solid var(--line2)",
                boxShadow: e.current ? "var(--glow)" : undefined,
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 6,
                alignItems: "baseline",
              }}
            >
              <span
                style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)" }}
              >
                {e.role}
              </span>
              <span style={{ color: "var(--faint)", fontSize: 13 }}>
                {e.date}
              </span>
            </div>
            <div
              style={{ color: "var(--acc)", fontSize: 14, margin: "4px 0 14px" }}
            >
              {e.company}
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                color: "var(--dim)",
                fontSize: 14,
                lineHeight: 1.7,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {e.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

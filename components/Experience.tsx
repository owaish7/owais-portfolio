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
        Expanded the {hi("Carreros AI")} job-search platform to 7 data sources
        (256,000 listings) and built a cross-source dedup system (NFKC facility +
        role + employment composite key) that removed {hi("12,600 duplicate")}{" "}
        postings while keeping every job findable per source.
      </>,
      <>
        Leading the {hi("Azure→AWS migration")} — re-architecting onto
        OpenSearch, ECS Fargate, S3 and Bedrock, and rewriting the query builder
        from Azure OData to OpenSearch DSL.
      </>,
    ],
  },
  {
    role: "SDE Intern",
    company: "Akatsuki Technologies, Japan",
    date: "Oct 2025 — May 2026",
    current: false,
    bullets: [
      <>
        Built web scrapers for 3 Japanese healthcare job portals (Playwright,
        BeautifulSoup, JSON-LD), collecting {hi("66,000+ listings")} across 4
        prefectures.
      </>,
      <>
        Developed a {hi("440+ line")} Japanese-to-English mapping &amp;
        preprocessing pipeline — field extraction, normalization and indexing
        for Azure AI Search across 48 searchable fields.
      </>,
      <>
        Implemented Google Maps location search — full-screen map modal,
        Geocoding-API address search, and distance filtering via bounding-box
        calculations.
      </>,
      <>
        Resolved 10+ search-filter issues iteratively with client feedback
        (railway line/station separation, driver&apos;s-license tri-state logic,
        city partial match).
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

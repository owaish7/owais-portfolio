import { LINKS } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      style={{ maxWidth: 1080, margin: "0 auto", padding: "88px 24px 60px" }}
    >
      <div
        className="rev"
        style={{ color: "var(--faint)", fontSize: 13, marginBottom: 18 }}
      >
        $ whoami --verbose
      </div>
      <h1
        className="rev"
        style={{
          fontSize: "clamp(44px,9vw,104px)",
          lineHeight: 0.94,
          fontWeight: 800,
          letterSpacing: "-.03em",
          margin: 0,
          color: "var(--fg)",
        }}
      >
        MOHAMMAD
        <br />
        OWAIS
        <span className="cur" />
      </h1>
      <p
        className="rev"
        style={{
          margin: "26px 0 0",
          fontSize: "clamp(15px,2.4vw,19px)",
          color: "var(--dim)",
          maxWidth: 680,
          lineHeight: 1.65,
        }}
      >
        Software Engineer{" "}
        <span style={{ color: "var(--acc)" }}>@ Talendy (Tech Japan)</span>. I
        build search platforms that index a quarter-million jobs across
        countries, and enjoy competitive programming on the side.
      </p>
      <div
        className="rev"
        style={{
          marginTop: 30,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          fontSize: 13,
        }}
      >
        <a className="lk lkacc" href="#projects">
          → view work
        </a>
        <a className="lk" href={LINKS.github} target="_blank" rel="noreferrer">
          ↗ github.com/owaish7
        </a>
        <a className="lk" href={LINKS.linkedin} target="_blank" rel="noreferrer">
          ↗ linkedin
        </a>
        <a className="lk" href={`mailto:${LINKS.email}`}>
          ✉ email
        </a>
      </div>
    </section>
  );
}

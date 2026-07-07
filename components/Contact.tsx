import { LINKS } from "@/lib/data";

export default function Contact({ themeLabel }: { themeLabel: string }) {
  return (
    <section
      id="contact"
      style={{ borderTop: "1px solid var(--line)", background: "var(--panel)" }}
    >
      <div
        style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px 40px" }}
      >
        <div style={{ color: "var(--acc)", fontSize: 13, marginBottom: 18 }}>
          $ ./contact --send
        </div>
        <h2
          style={{
            fontSize: "clamp(30px,6vw,56px)",
            fontWeight: 800,
            letterSpacing: "-.02em",
            margin: "0 0 8px",
            color: "var(--fg)",
          }}
        >
          Let&apos;s build something.
          <span className="cur" />
        </h2>
        <p
          style={{
            margin: "0 0 30px",
            color: "var(--dim)",
            fontSize: 15,
            maxWidth: 560,
          }}
        >
          Open to software-engineering roles and interesting problems. Fastest
          reply by email — or find me grinding rating on Codeforces.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            fontSize: 13,
          }}
        >
          <a className="lk lkacc" href={`mailto:${LINKS.email}`}>
            ✉ {LINKS.email}
          </a>
          <a className="lk" href={LINKS.resume} target="_blank" rel="noreferrer">
            ↓ resume
          </a>
          <a className="lk" href={`tel:${LINKS.phone.replace(/\s/g, "")}`}>
            ☏ {LINKS.phone}
          </a>
          <a className="lk" href={LINKS.github} target="_blank" rel="noreferrer">
            ↗ github.com/owaish7
          </a>
          <a
            className="lk"
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            ↗ linkedin
          </a>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "22px 24px 34px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          fontSize: 11.5,
          color: "var(--faint)",
          borderTop: "1px solid var(--line)",
        }}
      >
        <span>© 2026 Mohammad Owais — built from scratch, no template.</span>
        <span>
          press <span style={{ color: "var(--dim)" }}>⌘K</span> anywhere ·{" "}
          <span style={{ color: "var(--dim)" }}>{themeLabel}</span>
        </span>
      </div>
    </section>
  );
}

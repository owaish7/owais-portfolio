import { LINKS } from "@/lib/data";

const SNAPSHOT = [
  ["location", "Noida, India"],
  ["education", "IIIT Jabalpur · CS"],
  ["graduated", "June 2026"],
  ["relocation", "Open"],
  ["focus", "AI · Automation · Backend"],
] as const;

export default function Hero() {
  return (
    <section id="home" className="hero-shell about-hero">
      <div className="about-hero-heading"><p className="eyebrow rev">$ cat about.md</p></div>
      <div className="about-hero-grid">
        <div className="about-hero-copy">
          <p className="about-lead rev">I&apos;m <span>Mohammad Owais</span>, a recent B.Tech CS graduate from IIIT Jabalpur, building practical AI tools on a foundation of backend engineering and competitive programming.</p>
          <p className="about-body rev">My work spans search infrastructure, retrieval-augmented generation, workflow automation and model fine-tuning. I like understanding the pieces underneath a tool: how it retrieves evidence, handles a failed API call, or decides when a human should take over. I document those decisions and their limitations alongside the code.</p>
          <div className="hero-actions rev">
            <a className="lk lkacc" href="#projects">Explore selected work ↓</a>
            <a className="lk" href={LINKS.resume} target="_blank" rel="noreferrer">View résumé ↗</a>
            <a className="lk" href={LINKS.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div className="snapshot-card rev">
          <p className="snapshot-title">// SNAPSHOT</p>
          {SNAPSHOT.map(([key, value]) => <div className="snapshot-row" key={key}><span>{key}</span><strong>{value}</strong></div>)}
          <div className="snapshot-row snapshot-status"><span>status</span><strong><i /> open to opportunities</strong></div>
        </div>
      </div>
    </section>
  );
}


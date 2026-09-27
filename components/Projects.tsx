import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading"><div><p className="eyebrow">$ ls ./selected-work</p><h2>Less pitch. More proof.</h2></div><p>Six projects across AI, automation and security.<br />Source code, decisions and trade-offs included.</p></div>
      <div className="project-grid">
        {projects.map((p,i) => (
          <article key={p.name} className="project-card">
            <div className="project-meta"><span>0{i+1} / {p.cat}</span><span aria-hidden="true">↗</span></div>
            <h3>{p.name}</h3><p className="project-desc">{p.desc}</p>
            <p className="project-proof">{p.proof}</p>
            <div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
            <div className="project-links"><a className="lk" href={p.url} target="_blank" rel="noreferrer" aria-label={p.name+" source code"}>Source & write-up ↗</a>{p.demo && <a className="lk lkacc" href={p.demo} target="_blank" rel="noreferrer" aria-label={p.name+" live demo"}>Live demo ↗</a>}</div>
          </article>
        ))}
      </div>
    </section>
  );
}


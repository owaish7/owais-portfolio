import { LINKS } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero-copy">
        <p className="eyebrow rev"><span className="status-dot" /> OPEN TO AI & TECH INTERNSHIPS</p>
        <p className="hero-name rev">MOHAMMAD OWAIS <span>/ SOFTWARE ENGINEER</span></p>
        <h1 className="rev">I build AI that<br /><span>does the work.</span><span className="cur" /></h1>
        <p className="hero-description rev">From a question to a cited answer. From a webhook to an automated workflow. I build AI tools with useful interfaces, inspectable behavior, and code you can explore.</p>
        <div className="hero-actions rev">
          <a className="lk lkacc" href="#projects">Explore selected work ↓</a>
          <a className="lk" href={LINKS.resume} target="_blank" rel="noreferrer">View résumé ↗</a>
          <a className="lk" href={LINKS.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <p className="hero-footnote">Python / TypeScript / AI systems / full-stack development</p>
      </div>
      <aside className="build-panel rev" aria-label="Areas of hands-on project work">
        <div className="panel-top"><span>~/owais/build-log</span><span className="status-dot" /></div>
        <div className="build-row"><span className="build-index">01</span><div><h2>Automate the workflow</h2><p>Triggers → AI steps → human approval</p><a href="https://github.com/owaish7/ai-workflow-builder" target="_blank" rel="noreferrer">Explore the executor ↗</a></div></div>
        <div className="build-row"><span className="build-index">02</span><div><h2>Ground the answer</h2><p>Local embeddings → retrieval → citations</p><a href="https://github.com/owaish7/devrag" target="_blank" rel="noreferrer">Read the RAG implementation ↗</a></div></div>
        <div className="build-row"><span className="build-index">03</span><div><h2>Test the model</h2><p>Fine-tuning → benchmarks → browser tool</p><a href="https://github.com/owaish7/Phishing-scanner-extension" target="_blank" rel="noreferrer">Inspect the security project ↗</a></div></div>
        <div className="panel-bottom">$ build · inspect · improve<span className="small-cursor">_</span></div>
      </aside>
    </section>
  );
}


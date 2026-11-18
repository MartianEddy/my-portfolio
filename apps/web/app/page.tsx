import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects, principles, researchTopics } from '@/content/site';
import { ProjectCard } from '@/components/project-card';

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero"><div className="container hero-grid">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> INDEPENDENT ENGINEERING & RESEARCH · KENYA</div>
          <h1 className="display">Engineering trust<br />into <em>intelligent</em><br />systems.</h1>
          <p className="lead">I build and investigate secure, reliable and verifiable AI systems — from autonomous-agent security to the infrastructure they depend on.</p>
          <div className="button-row"><Link className="button button-dark" href="/engineering">Explore engineering <ArrowUpRight size={15} aria-hidden="true" /></Link><Link className="button button-light" href="/about">About my work <ArrowRight size={15} aria-hidden="true" /></Link></div>
          <div className="hero-foot"><strong>FOCUS</strong><span>AI SECURITY</span><span>·</span><span>AGENT SYSTEMS</span><span>·</span><span>APPLIED CRYPTOGRAPHY</span></div>
        </div>
        <div className="hero-visual" aria-hidden="true"><div className="signal-orbit" /><div className="signal-card"><div className="signal-top"><span>EDBOT / SYSTEMS VIEW</span><span>01—04</span></div><div className="signal-core"><div className="signal-lock">AI</div></div><div className="signal-bottom"><span>TRUST LAYER</span><span>● OPERATIONAL RESEARCH</span></div></div></div>
      </div></section>
      <div className="marquee"><span>SECURE AUTONOMY</span><span>✳</span><span>ADVERSARIAL ROBUSTNESS</span><span>✳</span><span>VERIFIABLE SYSTEMS</span><span>✳</span><span>ENGINEERING RESEARCH</span></div>
      <section className="section"><div className="container">
        <div className="section-head"><div><div className="kicker">01 / SELECTED ENGINEERING</div><h2 className="heading">Built to be<br /><em>inspected.</em></h2></div><p className="section-intro">A growing body of applied engineering. Project status is stated plainly; detailed implementation evidence and case studies are added as they are verified.</p></div>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} {...project} />)}</div>
        <div className="button-row"><Link className="button button-light" href="/engineering">View engineering index <ArrowRight size={15} aria-hidden="true" /></Link></div>
      </div></section>
      <section className="dark-band"><div className="container"><div className="kicker">02 / RESEARCH AGENDA</div><h2 className="heading">Questions worth<br /><em>engineering.</em></h2><div className="research-grid">{researchTopics.slice(0,4).map((item) => <div className="research-item" key={item.id}><span className="research-index">{item.id}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</div><div className="button-row"><Link className="button button-acid" href="/research">Explore research agenda <ArrowUpRight size={15} aria-hidden="true" /></Link></div></div></section>
      <section className="section"><div className="container"><div className="kicker">03 / ENGINEERING PRINCIPLES</div><h2 className="heading">Rigor is the<br /><em>product.</em></h2><div className="principle-grid">{principles.map((item) => <article className="principle" key={item.id}><span>{item.id}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section>
      <section className="container"><div className="cta-panel"><div><div className="kicker">OPEN TO TECHNICAL CONVERSATIONS</div><h2>Building systems that deserve to be trusted.</h2></div><a className="button button-dark" href="mailto:edwinwakibari@gmail.com">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a></div></section>
    </main>
  );
}

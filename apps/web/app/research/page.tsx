import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { researchTopics } from '@/content/site';
export const metadata: Metadata = { title: 'Research' };
export default function ResearchPage() {
  return <main id="main-content"><PageHero index="02" eyebrow="Research agenda" title="Questions worth" emphasis="engineering." description="An applied research agenda across secure autonomous agents, adversarial robustness, cryptographic systems and AI reliability. These are areas of investigation, not claims of completed original research." /><section className="page-body"><div className="container"><div className="content-grid"><aside className="side-label">CURRENT INVESTIGATION AREAS</aside><div className="content-stack">{researchTopics.map((topic) => <article className="content-panel" key={topic.id}><div className="kicker">{topic.id} / RESEARCH THEME</div><h2 style={{marginTop:'.8rem'}}>{topic.title}</h2><p>{topic.description}</p></article>)}</div></div></div></section></main>;
}

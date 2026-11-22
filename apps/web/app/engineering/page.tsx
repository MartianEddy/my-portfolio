import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/content/site';
export const metadata: Metadata = { title: 'Engineering' };
export default function EngineeringPage() {
  return <main id="main-content"><PageHero index="01" eyebrow="Engineering" title="Systems built for" emphasis="real scrutiny." description="Selected software and security engineering work. Each project is labelled by its current evidence state; detailed case studies follow as implementation and test evidence are reviewed." /><section className="page-body"><div className="container"><div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} {...project} />)}</div><div className="content-panel" style={{marginTop:'1rem'}}><h2>How projects are presented</h2><p>Implemented work, prototypes, research and proposed directions are not treated as interchangeable. Case studies will identify the problem, architecture, personal contribution, verification evidence, operational boundaries and unresolved risks.</p></div></div></section></main>;
}

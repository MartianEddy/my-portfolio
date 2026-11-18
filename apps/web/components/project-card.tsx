import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = { number: string; name: string; category: string; status: string; description: string; tags: readonly string[]; href: string };
export function ProjectCard({ number, name, category, status, description, tags, href }: ProjectCardProps) {
  const external = href.startsWith('http');
  return (
    <article className="project-card">
      <div className="project-meta"><span>{number} / {category}</span><span className="status-pill">{status}</span></div>
      <h3>{name}</h3><p>{description}</p>
      <div className="tag-list">{tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      {external ? <a className="card-link" href={href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={14} aria-hidden="true" /></a> : <Link className="card-link" href={href}>Explore project <ArrowUpRight size={14} aria-hidden="true" /></Link>}
    </article>
  );
}

import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
export const metadata: Metadata = { title: 'Engineering Notes' };
const notes = [
  { date: 'IN PROGRESS', title: 'Threat modelling tool-using AI agents', detail: 'A practical framework for assets, trust boundaries, abuse cases and runtime controls.', state: 'DRAFT' },
  { date: 'PLANNED', title: 'What hash-chained audit logs can and cannot prove', detail: 'Integrity verification, truncation, full rewrites and external anchoring.', state: 'PLANNED' },
  { date: 'PLANNED', title: 'Evaluating prompt-injection defenses beyond keyword matching', detail: 'Adversarial test design, false positives, false negatives and evaluation limits.', state: 'PLANNED' },
];
export default function NotesPage() {
  return <main id="main-content"><PageHero index="04" eyebrow="Engineering notes" title="Thinking in" emphasis="public." description="Technical notes, implementation observations and research summaries. Drafts and planned writing are labelled clearly; unpublished ideas are not presented as completed findings." /><section className="page-body"><div className="container"><div className="note-list">{notes.map((note) => <article className="note-row" key={note.title}><span className="note-date">{note.date}</span><div><h3>{note.title}</h3><p>{note.detail}</p></div><span className="status-pill">{note.state}</span></article>)}</div></div></section></main>;
}

type PageHeroProps = { index: string; eyebrow: string; title: string; emphasis: string; description: string };
export function PageHero({ index, eyebrow, title, emphasis, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow"><span>{index}</span><span>/</span><span>{eyebrow}</span></div>
        <h1 className="display">{title}<br /><em>{emphasis}</em></h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}

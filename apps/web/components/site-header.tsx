import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { navigation } from '@/content/site';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="EDBOT Engineering home">
        <span className="wordmark-mark">E.</span><span>EDBOT</span><span>/ ENGINEERING</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <a className="nav-contact" href="mailto:edwinwakibari@gmail.com">Contact <ArrowUpRight size={13} aria-hidden="true" /></a>
      </nav>
    </header>
  );
}

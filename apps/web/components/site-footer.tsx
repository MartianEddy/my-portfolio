import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { navigation } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="wordmark" href="/" aria-label="EDBOT Engineering home"><span className="wordmark-mark">E.</span><span>EDBOT</span><span>/ ENGINEERING</span></Link>
        <div className="footer-links">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <a href="https://github.com/MartianEddy" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
          <a href="mailto:edwinwakibari@gmail.com">Email <ArrowUpRight size={12} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="footer-bottom"><span>EDWIN WAKIBARI · EDBOT ENGINEERING</span><span>INDEPENDENT ENGINEERING & RESEARCH · 2026</span></div>
    </footer>
  );
}

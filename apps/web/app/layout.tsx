import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: { default: 'EDBOT Engineering — AI Security & Agent Systems', template: '%s | EDBOT Engineering' },
  description: 'Edwin Wakibari builds and investigates secure, reliable and verifiable AI systems, with a focus on agent security and applied cybersecurity.',
  applicationName: 'EDBOT Engineering',
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'EDBOT Engineering', description: 'Building secure, reliable and verifiable autonomous AI systems.', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><div className="site-shell"><SiteHeader />{children}<SiteFooter /></div></body></html>;
}

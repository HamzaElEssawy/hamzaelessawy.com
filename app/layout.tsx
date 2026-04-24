import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hamza Elessawy',
  description: 'I build so the next person who couldn\'t get in — gets in. Product leader working at the intersection of AI, fintech, and healthcare.',
  openGraph: {
    title: 'Hamza Elessawy',
    description: 'I build so the next person who couldn\'t get in — gets in.',
    url: 'https://hamzaelessawy.com',
    siteName: 'Hamza Elessawy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Elessawy',
    description: 'I build so the next person who couldn\'t get in — gets in.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/" className="name">Hamza Elessawy</Link>
          <div className="links">
            <Link href="/work">Work</Link>
            <Link href="/resume">Resume</Link>
          </div>
        </nav>

        <main>{children}</main>

        <footer>
          © 2026 Hamza Elessawy<span className="sep">·</span>Wherever the next broken room is
        </footer>
      </body>
    </html>
  );
}

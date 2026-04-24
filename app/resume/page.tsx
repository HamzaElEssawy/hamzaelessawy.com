import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume — Hamza Elessawy',
  description: 'CV coming soon.',
};

export default function ResumePage() {
  return (
    <div className="placeholder">
      <h1>
        Almost <span className="em">ready.</span>
      </h1>
      <p>
        A downloadable CV is on the way. In the meantime, reach me at{' '}
        <a
          href="mailto:info@hamzaelessawy.com"
          style={{
            color: 'var(--text)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--accent)',
            paddingBottom: '2px',
          }}
        >
          info@hamzaelessawy.com
        </a>
        .
      </p>
      <Link href="/" className="back-link">
        &larr; Back
      </Link>
    </div>
  );
}

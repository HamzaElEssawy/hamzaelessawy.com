import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work — Hamza Elessawy',
  description: 'Case studies coming soon.',
};

export default function WorkPage() {
  return (
    <div className="placeholder">
      <h1>
        In <span className="em">progress.</span>
      </h1>
      <p>
        The full work — I-SCORE, Skip Pay, Tapway, Pixelence, and the
        consulting arc — is being written up, one story at a time. Check back
        soon.
      </p>
      <Link href="/" className="back-link">
        &larr; Back
      </Link>
    </div>
  );
}

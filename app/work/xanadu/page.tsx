import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Xanadu — Hamza Elessawy',
  description:
    "Co-founded with Hussain Al Menyawy in 2024 — an AI-focused venture studio for early-stage founders who don't fit accelerator timelines. Currently four ideas in active development. This page is short on purpose.",
};

export default function XanaduPage() {
  return (
    <div className="case-study">

      <header className="case-header">
        <p className="eyebrow">Case study · Venture Studio · Co-Founder</p>
        <h1>
          Xanadu <span className="em">—</span> the AI venture studio for
          founders who don&rsquo;t fit accelerator timelines.
        </h1>
        <p className="lede">
          Xanadu is the AI-focused venture studio I co-founded with Hussain
          Al Menyawy in 2024 &mdash; a two-time Egyptian founder with
          networks across Arab, Gulf, and African ecosystems. The thesis
          is that most early-stage founders don&rsquo;t get what they need
          from accelerator cycles, and the gap between accelerator
          graduation and real product-market traction is where most
          startups die quietly. We&rsquo;re building Xanadu for the founders
          whose problems don&rsquo;t fit the accelerator timeline.
          Currently four ideas in active development. This page is short
          on purpose.
        </p>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>Co-Founder</dd></div>
          <div><dt>Period</dt><dd>2024 — Present</dd></div>
          <div><dt>Co-Founder</dt><dd>Hussain Al Menyawy</dd></div>
          <div><dt>Portfolio</dt><dd>4 ideas in active development · Tapback ran through here</dd></div>
        </dl>
      </header>

      <section className="case-section">
        <h2 className="case-section-title">What Xanadu is</h2>
        <p>
          Xanadu is an AI-focused venture studio. We co-founded it in 2024
          &mdash; myself and Hussain Al Menyawy, who&rsquo;s a two-time
          Egyptian founder with networks across Arab, Gulf, and African
          ecosystems. The two of us bring complementary positions: I focus
          on the product and technical side, Hussain brings the founder
          and commercial network and the deal-side judgement. We work with
          equity stakes across the portfolio.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The thesis</h2>
        <p>
          The studios and accelerators that exist today serve a particular
          shape of founder well &mdash; early-stage, two-cofounder,
          prototype-ready, willing to follow the program timeline. But
          there are other founders who have real ideas and can&rsquo;t fit
          that shape. Three patterns we see most often.
        </p>
        <p>
          A technical founder working a deep problem who needs product
          validation help they don&rsquo;t have time to build themselves.
          A strong technical founder still in their day job who needs the
          bridge to make the leap. Or a business-background founder with
          a real customer insight but no technical ability to ship.
        </p>
        <p>
          For all three, what&rsquo;s missing isn&rsquo;t a six-month
          program. It&rsquo;s targeted help at the specific bottleneck
          &mdash; getting an MVP that actually works, getting the first
          ten to fifty customers, getting the round closed. We&rsquo;re
          building Xanadu to be that targeted help, structured as a
          venture studio rather than as another accelerator.
        </p>
      </section>

      <section className="case-section case-reflection">
        <h2 className="case-section-title">Where it stands</h2>
        <p>
          Currently we have four ideas in active development &mdash; a
          mix of new ventures we&rsquo;ve sourced and existing teams
          we&rsquo;ve come in to accelerate. Tapback, the restaurant-tech
          rebuild now landing in Saudi Arabia, ran through Xanadu. The
          other ideas are at earlier stages and not yet at a point where
          there&rsquo;s something public to share.
        </p>
        <p>
          <strong>This page is short on purpose.</strong> Xanadu is still
          early. There&rsquo;s a strong argument that an operating venture
          studio has nothing to say publicly until the first portfolio
          outcomes have landed clearly. We disagree slightly &mdash; the
          work itself is real, the thesis is clear, and saying so honestly
          is part of how we attract the right founders. But we&rsquo;re
          not pretending to be further along than we are. When the
          portfolio has more to point at, this page will say more.
        </p>
      </section>

      <footer className="case-footer">
        <Link href="/work" className="back-link">
          &larr; All work
        </Link>
      </footer>

    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tapback — Hamza Elessawy',
  description:
    "Restaurant-tech rebuild via Xanadu. Revamped the core product with table reservation and pre-order as first-class capabilities, reshaped the revenue model, and tightened the team's shipping cadence. Now operating in Saudi Arabia with a licensing deal with a major Saudi financial institution in final stages.",
};

export default function TapbackPage() {
  return (
    <div className="case-study">

      <header className="case-header">
        <p className="eyebrow">Case study · Restaurant-tech · Product Rebuild</p>
        <h1>
          Tapback <span className="em">—</span> the restaurant-tech rebuild
          now landing in Saudi Arabia.
        </h1>
        <p className="lede">
          Tapback is a restaurant-tech platform that came to me through
          Xanadu, the venture-building operation I co-founded. The product
          had customers already running on it, a revenue model that
          wasn&rsquo;t quite working, and a customer base that wanted to
          consolidate the five different service providers they used for
          restaurant operations into one system. We revamped the core
          product, introduced table reservation and pre-order as first-class
          capabilities, reshaped the revenue model, and tightened the way
          the team shipped. The platform is now operating in Saudi Arabia,
          with a licensing deal with a major Saudi financial institution
          in final stages.
        </p>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>Product Consultant (via Xanadu)</dd></div>
          <div><dt>Domain</dt><dd>Restaurant-tech · F&amp;B operations</dd></div>
          <div><dt>Scope</dt><dd>Core product revamp · table reservation · pre-order · revenue model · sprint redesign</dd></div>
          <div><dt>Status</dt><dd>Operating in Saudi Arabia · licensing deal in final stages</dd></div>
        </dl>
      </header>

      <section className="case-section">
        <h2 className="case-section-title">What I joined</h2>
        <p>
          Tapback came to me through Xanadu &mdash; restaurant-tech with
          active customers but a product surface that hadn&rsquo;t kept up
          with what those customers actually needed. The pattern was the
          one most early-stage SaaS hits in F&amp;B: the operators were
          running across five different service providers because none of
          them, including Tapback, did everything well enough to consolidate.
          The opportunity was to be the one system the customer could
          actually use end-to-end, but only if the product could earn that
          role.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">What we built</h2>
        <p>
          The core product got revamped across two major capability lines.
        </p>
        <p>
          <strong>Table reservation.</strong> In other companies &mdash;
          OpenTable, Resy &mdash; table reservation is its own product,
          with its own funding rounds and its own brand. Building it as a
          feature inside Tapback meant being honest about what restaurants
          actually use, stripping out the layers that don&rsquo;t apply to
          small-and-mid-sized operators, and integrating cleanly with the
          rest of the platform.
        </p>
        <p>
          <strong>Pre-order.</strong> Letting customers order ahead and
          have food ready when they arrive sounds simple until you build
          it: kitchen flow, staff allocation, payment timing, fulfilment
          edge cases. We shipped it as a real first-class capability rather
          than a half-feature.
        </p>
        <p>
          The revenue model was reshaped alongside the product work. The
          previous model wasn&rsquo;t aligned with how customers were
          actually using the platform, which created friction at every
          renewal conversation. The new model matched usage to value more
          directly &mdash; the kind of change that makes the next year&rsquo;s
          renewals easier than the last year&rsquo;s.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">How we built it</h2>
        <p>
          The way the team was shipping needed work too.
        </p>
        <p>
          We moved from a two-week sprint to a one-week sprint. That
          doesn&rsquo;t sound dramatic until you do it: the cadence forces
          tighter scope, sharper standups, and a backlog that has to
          actually be triaged rather than carried. The team&rsquo;s velocity
          went up, partly because the false comfort of &ldquo;we have
          another week&rdquo; went away.
        </p>
        <p>
          We also shortened the path from BRD to working prototype. The
          product designer could move faster when requirements arrived in
          a shape that translated cleanly to wireframes. We restructured
          the upstream artefact so that happened by default rather than
          by exception. Small process change, real impact on time-to-first-
          prototype.
        </p>
      </section>

      <section className="case-section case-reflection">
        <h2 className="case-section-title">Where it&rsquo;s going</h2>
        <p>
          Tapback is now operating in Saudi Arabia. A licensing deal with
          a major Saudi financial institution is in final stages &mdash;
          the kind of deal that turns a regional restaurant-tech product
          into infrastructure that financial-services partners build on
          top of.
        </p>
        <p>
          I came in to revamp the product. What I left was a product, a
          revenue model, and a delivery cadence that could carry the
          company into a different market entirely. That&rsquo;s the
          version of consulting work that&rsquo;s worth doing.
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

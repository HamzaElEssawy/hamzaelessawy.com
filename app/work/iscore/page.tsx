import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'I-SCORE — Hamza Elessawy',
  description:
    "First Technical Product Manager at Egypt's national credit bureau — the data layer underpinning credit decisions across the entire Egyptian banking sector.",
};

export default function IScorePage() {
  return (
    <div className="case-study">

      <header className="case-header">
        <p className="eyebrow">Case study · Fintech · Credit Infrastructure</p>
        <h1>
          I-SCORE <span className="em">—</span> first technical PM at
          Egypt&rsquo;s national credit bureau.
        </h1>
        <p className="lede">
          When a bank in Egypt makes a lending decision, the data they pull
          comes from one place. I-SCORE &mdash; the Egyptian Credit Bureau
          &mdash; holds the credit records that effectively every licensed
          bank, financial institution, and microfinance provider in the
          country relies on before extending credit. I joined as its first
          Technical Product Manager, owning the product and technical
          relationship between I-SCORE and the external vendor building its
          applications. This is what that work looked like, told within
          the limits of what can be shared.
        </p>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>Technical Product Manager</dd></div>
          <div><dt>Period</dt><dd>Jan 2021 — Dec 2021</dd></div>
          <div><dt>Placement</dt><dd>Via Div Systems consulting contract</dd></div>
          <div><dt>Environment</dt><dd>High-security on-premise · Central Bank of Egypt regulated</dd></div>
          <div><dt>Scope</dt><dd>4 application versions launched · vendor relationship owned</dd></div>
          <div><dt>Links</dt><dd>
            <a href="https://www.i-score.com.eg" target="_blank" rel="noopener noreferrer">i-score.com.eg</a>
            {' · '}
            <a href="https://www.linkedin.com/company/the-egyptian-credit-bureau" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </dd></div>
        </dl>
      </header>

      <section className="case-section">
        <h2 className="case-section-title">What I-SCORE actually is</h2>
        <p>
          I-SCORE is the spine of how credit gets extended in Egypt. The
          institution&rsquo;s own description is that it holds close to
          100% of the credit data on individuals and SMEs from commercial
          banks, with banks, financial institutions, and microfinance
          providers across the country subscribing to its services.
          That makes it less a credit bureau in the international-comparison
          sense and more the central data layer the country&rsquo;s lending
          ecosystem treats as ground truth.
        </p>
        <p>
          Most people only encounter that infrastructure indirectly &mdash;
          when an application is approved or rejected. From the inside,
          it&rsquo;s a regulated, high-security technical environment that
          runs on-premise, sits inside the Central Bank of Egypt&rsquo;s
          regulatory perimeter, and cannot afford the kind of mistakes that
          smaller systems can absorb.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">What I walked into</h2>
        <p>
          I joined I-SCORE in January 2021, placed via a Div Systems
          consulting contract, as I-SCORE&rsquo;s first Technical Product
          Manager. There was no internal playbook for the role. The product
          layer I was being asked to own &mdash; between an external vendor
          on one side and the internal data, network, and security teams
          on the other &mdash; hadn&rsquo;t been held by a PM before me.
          The expectation was that I&rsquo;d hold it anyway, in production,
          while the system kept serving every bank in the country.
        </p>
        <p>
          Most of the people I was translating between were senior leaders
          in their domains, with regional reputations earned over decades.
          The way through wasn&rsquo;t to fake fluency. It was to take the
          work seriously, ask the question the room actually needed asked,
          and never confuse motion for progress.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">What I shipped</h2>
        <p>
          Across the year, I led the launch of four application versions
          across I-SCORE&rsquo;s product suite &mdash; covering credit,
          investigation, and identification-check workflows used by the
          financial institutions in I-SCORE&rsquo;s subscriber network.
          The work spanned deployment planning, technical assessment, QA,
          and the operational tail: tracking deployments inside the
          on-premise servers, raising incidents when an application went
          down, participating in disaster replication exercises that kept
          the architecture defensible.
        </p>
        <p>
          I also evaluated current and future vendors against technical
          and security requirements. Recommendations from those assessments
          fed into procurement and infrastructure decisions. The vendor
          relationship itself &mdash; the day-to-day product and technical
          contact between I-SCORE and the external team building the
          applications &mdash; sat with me.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The translation work</h2>
        <p>
          The harder part of the role wasn&rsquo;t any single application.
          It was sitting at the intersection of disciplines that don&rsquo;t
          naturally agree, and finding the version of every decision that
          worked for all of them at once. Database teams care about schema
          integrity and query patterns. Network and infrastructure leads
          care about throughput, latency, and segmentation. Security cares
          about who touches what, when, and why it&rsquo;s auditable.
          Business stakeholders across the Central Bank ecosystem care
          about regulatory clarity and what the report on their desk
          actually says. The financial institutions themselves, when they
          were in the room for an implementation or a root-cause analysis,
          cared about what was going to break next and when it would be
          fixed.
        </p>
        <p>
          The mistake in that situation is to try to make everyone happy.
          The work I learned to do was to make the real tradeoffs visible,
          name the cost of each one, and let the room decide together
          &mdash; with the document in front of us, not behind us.
        </p>
      </section>

      <section className="case-section case-reflection">
        <h2 className="case-section-title">What this still shapes</h2>
        <p>
          Two threads from this year still run through everything I&rsquo;ve
          done since.
        </p>
        <p>
          The first is Skip Pay. The conviction that financial inclusion
          done right transforms lives is easy to repeat. The conviction
          that comes from spending a year inside the data layer, watching
          whose credit history exists and whose doesn&rsquo;t, is
          different. That&rsquo;s where Skip Pay&rsquo;s mission came
          from &mdash; not a deck, the desk.
        </p>
        <p>
          The second is how I work in regulated AI environments. When I
          ran the Trisilco engagement on CIMB&rsquo;s modern credit-scoring
          system in Malaysia, what I brought wasn&rsquo;t theoretical.
          It was the feel of regulated credit infrastructure &mdash; what
          auditors look for, where the failure modes hide, why a model
          that performs well on a benchmark can still be wrong in
          production. That feel doesn&rsquo;t come from courses. It
          comes from a year spent inside one of these environments,
          on the hook for whether things work.
        </p>
        <p>
          <strong>This page is short on purpose.</strong> There&rsquo;s a
          lot about that year that lives under NDA and stays there. What
          you see here is what can be said.
        </p>
      </section>

      <footer className="case-footer">
        <Link href="/work" className="back-link">
          &larr; All work
        </Link>
        <a
          href="https://www.i-score.com.eg"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-link"
        >
          About I-SCORE &rarr;
        </a>
      </footer>

    </div>
  );
}

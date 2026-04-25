import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BrioHR — Hamza Elessawy',
  description:
    "Embedded full-time as one of two PMs at a YC W21 HR platform through Series A. Closed the feature-and-issue intake gap, pushed the analytics foundation, and led AI adoption module by module.",
};

export default function BrioHRPage() {
  return (
    <div className="case-study">

      <header className="case-header">
        <p className="eyebrow">Case study · HR Tech · AI Adoption</p>
        <h1>
          BrioHR <span className="em">—</span> bringing AI into an established
          platform without breaking what works.
        </h1>
        <p className="lede">
          A YC W21 HR platform during a Series A growth window. I was brought
          in as a Product Management Consultant but operated full-time as one
          of only two PMs in the organisation, embedded in the team rather
          than running engagements from outside. The work covered three
          things at once: closing a foundational gap in how requests and
          issues reached the product team, pushing the analytics layer the
          company didn&rsquo;t yet have, and leading AI adoption module by
          module &mdash; deliberately, not all at once.
        </p>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>Product Management Consultant (embedded full-time)</dd></div>
          <div><dt>Period</dt><dd>Feb 2025 — Oct 2025</dd></div>
          <div><dt>Stage</dt><dd>YC W21 · Series A growth</dd></div>
          <div><dt>Scope</dt><dd>1 of 2 PMs · 3 modules revamped · AI strategy across the platform</dd></div>
          <div><dt>Links</dt><dd>
            <a href="https://www.briohr.com" target="_blank" rel="noopener noreferrer">briohr.com</a>
            {' · '}
            <a href="https://www.ycombinator.com/companies/briohr" target="_blank" rel="noopener noreferrer">YC W21</a>
          </dd></div>
        </dl>
      </header>

      <section className="case-section">
        <h2 className="case-section-title">What I joined</h2>
        <p>
          BrioHR is an HR platform serving small and mid-sized businesses
          across Southeast Asia. By the time I joined in February 2025 the
          product had real customers, multiple modules in production, and
          the kind of growth profile that tends to outrun the systems that
          got the company there. Hiring had stepped up sharply. The
          organisation was preparing for &mdash; and during my time, closing
          and announcing &mdash; its Series A.
        </p>
        <p>
          I was one of two product managers in the company. That ratio
          mattered. With a product surface area larger than two PMs can
          carry by themselves, the only honest way to operate is to choose
          the few things that compound and let the rest wait. Most of what
          I did at BrioHR was about that prioritisation discipline,
          translated into specific shipped work.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The foundations I closed</h2>
        <p>
          Two foundational gaps were costing the team more than anyone was
          measuring.
        </p>
        <p>
          The first was the request and issue intake layer. Feature requests
          were arriving from sales conversations, from current customers,
          and from internal teams &mdash; in different channels, with
          different framing, no shared language for severity or value.
          Reported issues followed the same scattered pattern. I kicked
          off an initiative to centralise both: one place where requests
          and reports landed, with the structure needed to triage and
          decide. That gave the company something it didn&rsquo;t have
          before &mdash; a single view of what was being asked for and
          what was breaking, separated from the noise of who asked
          loudest.
        </p>
        <p>
          The second was product analytics. Mixpanel had been evaluated
          but the underlying event instrumentation across the platform
          hadn&rsquo;t been fully built out, which meant we were making
          product calls partly on instinct rather than on what users were
          actually doing. The push there was less about choosing a tool
          and more about getting tracking in place so the tool would
          have something to measure.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The modules I revamped</h2>
        <p>
          I worked across three modules during my tenure: Recruit,
          Onboarding, and Time &amp; Attendance.
        </p>
        <p>
          The most substantive of the three was Time &amp; Attendance,
          where we went beyond the simple punch-in / punch-out model and
          shipped shift management as a first-class capability. For the
          customers BrioHR serves &mdash; SMBs across multiple
          industries, many of them shift-based &mdash; this is where the
          product earns its keep. Designing shift logic that handles the
          real variations operators run into, without making the
          interface harder for the businesses that don&rsquo;t need the
          complexity, was the harder part of the work. Recruit and
          Onboarding got their revamps too, focused on the points where
          the existing flows were creating support load that the team
          felt every week.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The AI adoption strategy</h2>
        <p>
          The Series A close brought a question to the front of the room:
          where does AI actually create value in an HR platform, versus
          where does it look impressive in a screenshot and break in
          production? My role was to lead that strategy across the
          platform, and the principle I held was that AI features get
          shipped only where they answer a real product question
          &mdash; and they get rolled out one at a time, with the
          accuracy bar honest from day one.
        </p>
        <p>
          Two AI features came out of that work in the period I was there.
          Inside the Recruit module, an AI capability that understands a
          company&rsquo;s context and helps generate job descriptions when
          a hiring manager creates a role &mdash; reducing the blank-page
          friction that&rsquo;s the actual reason most postings sit
          half-finished for days. Inside payroll, an AI capability that
          surfaces likely errors before payroll runs &mdash; the highest-
          stakes module in any HR product, because a wrong payroll is a
          relationship problem with employees, not a UI problem. Both
          were rolled out gradually and tuned against real usage rather
          than launched on a fixed date. That sequencing was deliberate.
        </p>
        <p>
          The harder part of the AI work wasn&rsquo;t any specific
          feature. It was navigating the organisational dynamics of
          introducing AI into an established team that had been shipping
          for years without it. The way through there is the same as in
          most senior product work: name the question the team is
          actually asking, make the tradeoffs visible, and let the
          decision get made together rather than imposed.
        </p>
      </section>

      <section className="case-section case-reflection">
        <h2 className="case-section-title">What I learned</h2>
        <p>
          <strong>Foundations are unglamorous and they are the highest-
          leverage thing you can ship.</strong>{' '}
          The intake initiative and the analytics push are the kind of
          work that doesn&rsquo;t get celebrated &mdash; no demo, no
          marketing post, no screenshot &mdash; but they shaped what
          every following decision was made against. A senior PM
          doesn&rsquo;t need to be told this twice. A team without one
          tends to.
        </p>
        <p>
          <strong>Series-A scale is its own discipline.</strong>{' '}
          The challenge isn&rsquo;t inventing new product surface. It&rsquo;s
          choosing the few things that compound, defending the choice
          when sales or a customer pushes a different ask, and shipping
          them with the existing engineering capacity rather than
          assuming the round will solve the constraint. The round
          doesn&rsquo;t solve the constraint &mdash; it changes which
          constraint binds next.
        </p>
        <p>
          <strong>AI adoption is an organisational decision before
          it&rsquo;s a product decision.</strong>{' '}
          Teams that have been shipping for years have a way of working
          that AI can disrupt productively or destructively, and the
          difference is in how the strategy is brought into the team,
          not in how clever the model is. The criterion I used &mdash;
          AI features answer real product questions, not surface ones,
          and roll out one at a time with the accuracy bar honest from
          day one &mdash; is the version of this I&rsquo;d defend in any
          AI adoption brief I&rsquo;m asked to write next.
        </p>
      </section>

      <footer className="case-footer">
        <Link href="/work" className="back-link">
          &larr; All work
        </Link>
        <a
          href="https://www.briohr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-link"
        >
          Visit briohr.com &rarr;
        </a>
      </footer>

    </div>
  );
}

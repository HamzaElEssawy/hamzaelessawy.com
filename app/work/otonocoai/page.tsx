import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OtonocoAI — Hamza Elessawy',
  description:
    "Helped a regulatory AI compliance startup move from a developer-mode prototype to a production-ready MVP, on a pre-seed runway with an Antler funding decision approaching. Joined the early customer pilots with Malaysia's largest financial institution and a top-five bank.",
};

export default function OtonocoAIPage() {
  return (
    <div className="case-study">

      <header className="case-header">
        <p className="eyebrow">Case study · Regulatory AI · Pre-seed</p>
        <h1>
          OtonocoAI <span className="em">—</span> from developer-mode prototype
          to bank pilots, on a pre-seed runway.
        </h1>
        <p className="lede">
          OtonocoAI was building <em>Nakhoda</em> &mdash; an AI-powered
          compliance product for capital markets and financial institutions,
          designed to track regulatory changes, analyse obligations, and
          automate compliance workflows. When I came in the team had a
          working prototype and an Antler funding decision approaching.
          The work was helping move the product from developer-mode to
          something a real customer could deploy, defining the MVP the
          round would be evaluated against, and joining the first customer
          conversations with Malaysia&rsquo;s largest financial institution
          and one of the country&rsquo;s top-five banks.
        </p>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>Independent AI Product Consultant</dd></div>
          <div><dt>Period</dt><dd>2024 — Jan 2025</dd></div>
          <div><dt>Product</dt><dd>Nakhoda — AI compliance for capital markets</dd></div>
          <div><dt>Stage</dt><dd>Prototype → Antler pre-seed close (USD $110K, Feb 2025)</dd></div>
          <div><dt>Links</dt><dd>
            <a href="https://www.otonocoai.com" target="_blank" rel="noopener noreferrer">otonocoai.com</a>
          </dd></div>
        </dl>
      </header>

      <section className="case-section">
        <h2 className="case-section-title">What they were building</h2>
        <p>
          Capital-markets compliance is one of the more painful corners of
          financial-services operations. Regulators publish updates
          constantly. Each one has to be parsed against the
          institution&rsquo;s existing obligations, mapped to the workflows
          and policies that need to change, and tracked through
          implementation. Most of that work is still done by analysts
          reading documents and updating spreadsheets.
        </p>
        <p>
          Nakhoda is OtonocoAI&rsquo;s flagship product &mdash; an
          AI-powered platform that takes regulatory changes, analyses
          the obligations they create, and automates the compliance
          workflows that follow. The thesis is straightforward: this is
          work that AI is genuinely better suited to than humans, and
          the financial institutions that adopt it first will operate
          with a structural cost and accuracy advantage.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The state when I came in</h2>
        <p>
          The product existed but it was in developer-mode &mdash; runnable,
          viewable, demonstrable, but not in a state a real customer could
          deploy. That gap is the gap a lot of pre-seed AI startups hit.
          The prototype proves the model can do the thing. The next bar is
          whether the model can do the thing reliably, on real customer
          data, with the kind of guardrails an enterprise expects. Closing
          that gap on a pre-seed budget, with a funding decision approaching,
          was the constraint.
        </p>
        <p>
          One of the founders had been in my MY2 cohort at Antler, which
          is part of why they reached out: they wanted product help from
          someone who knew what an Antler round actually demanded versus
          what the program told you, and who&rsquo;d already navigated
          that round once.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">What we shipped</h2>
        <p>
          The work covered four fronts in parallel.
        </p>
        <p>
          <strong>The MVP definition.</strong> We reframed what the product
          needed to demonstrate for the round &mdash; not the full vision,
          but a sharp version of the workflow that worked end-to-end on
          customer-grade data. That focus made the round defensible.
        </p>
        <p>
          <strong>The prototype itself.</strong> I worked on the
          prototype-side acceleration directly &mdash; closing the gaps
          between what the engineering team had shipped and what the
          customer demos required, so the team could keep moving without
          waiting on the founders for every product decision and the
          founders could keep moving without me blocking them.
        </p>
        <p>
          <strong>The team.</strong> Hiring on a pre-seed budget means you
          can&rsquo;t bring in a senior engineer at market rate. We worked
          through the network to identify specific calibres who could plug
          into specific gaps, scoped the engagements to fit the budget,
          and brought in the right people without overcommitting the
          runway. That hiring discipline is its own product decision when
          the runway is the binding constraint.
        </p>
        <p>
          <strong>The customer side.</strong> We joined the pilot meetings
          with the early customers &mdash; Malaysia&rsquo;s largest
          financial institution and one of the country&rsquo;s top-five
          banks. The work there was helping the founders carry the technical
          conversation in the room, hear what the customer was actually
          asking for under the surface request, and translate the
          compliance requirements back into product roadmap.
        </p>
      </section>

      <section className="case-section case-reflection">
        <h2 className="case-section-title">What carries forward</h2>
        <p>
          The early-stage AI bridge &mdash; from prototype to production-ready
          MVP, on a budget that doesn&rsquo;t allow for waste &mdash; is its
          own discipline. The pattern at OtonocoAI is the pattern you see at
          most AI startups in that window: a model that works in the lab,
          a team that needs three things at once (product clarity,
          engineering acceleration, customer presence), and a runway that
          doesn&rsquo;t permit any of those things to be done at full
          breadth.
        </p>
        <p>
          The work is about choosing the version of each that fits the
          round, shipping it, and letting the company keep moving. Antler
          closed the round at USD $110K in February 2025. The product is
          live, the customer pilots are running, and the team is scaling
          on a real funding base. That&rsquo;s the version of consulting
          work that&rsquo;s worth doing &mdash; the kind that leaves the
          company better equipped to operate without you than they were
          before.
        </p>
      </section>

      <footer className="case-footer">
        <Link href="/work" className="back-link">
          &larr; All work
        </Link>
        <a
          href="https://www.otonocoai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-link"
        >
          Visit otonocoai.com &rarr;
        </a>
      </footer>

    </div>
  );
}

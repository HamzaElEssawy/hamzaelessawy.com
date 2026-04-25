import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Tinkerers KL — Hamza Elessawy',
  description:
    "Co-Director of Kuala Lumpur's AI practitioner community from kickoff in Aug 2024 to Sep 2025. Twice-monthly cadence with two distinct tracks, practitioner hackathons, and a partner layer across Antler, YTL AI Labs, Grab, TDCX, Paynet, Moneylion, and Asia Business School.",
};

export default function AITinkerersPage() {
  return (
    <div className="case-study">

      <header className="case-header">
        <p className="eyebrow">Case study · Community · Partnerships</p>
        <h1>
          AI Tinkerers KL <span className="em">—</span> co-directing the
          chapter that became KL&rsquo;s AI practitioner pipeline.
        </h1>
        <p className="lede">
          Co-Director of the Kuala Lumpur chapter of AI Tinkerers &mdash; a
          global community of AI practitioners building real things with
          frontier tools. From kickoff in August 2024 through September
          2025, KL&rsquo;s chapter went from a single monthly meetup to a
          twice-monthly cadence with two distinct tracks, ran practitioner
          hackathons, and built a partner network across the most relevant
          institutions in Malaysia and the region. The community became a
          direct pipeline into consulting work, client introductions, AI
          workshops at major enterprises, and funded startup collaborations.
          This is the work I&rsquo;m proudest of that I haven&rsquo;t
          talked about much.
        </p>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>Co-Director (volunteer)</dd></div>
          <div><dt>Period</dt><dd>Aug 2024 — Sep 2025</dd></div>
          <div><dt>City</dt><dd>Kuala Lumpur, Malaysia</dd></div>
          <div><dt>Cadence</dt><dd>Twice-monthly · two distinct tracks (builder · business) · practitioner hackathons</dd></div>
          <div><dt>Partners</dt><dd>Antler · YTL AI Labs · Grab · TDCX · Paynet · Moneylion · Asia Business School · others</dd></div>
          <div><dt>Links</dt><dd>
            <a href="https://www.linkedin.com/company/ai-tinkerers-kuala-lumpur/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {' · '}
            <a href="https://aitinkerers.org" target="_blank" rel="noopener noreferrer">aitinkerers.org</a>
          </dd></div>
        </dl>
      </header>

      <section className="case-section">
        <h2 className="case-section-title">What KL&rsquo;s AI community needed</h2>
        <p>
          The AI Tinkerers community exists to give practitioners a place
          to share what they&rsquo;re actually building &mdash; not slide
          decks about AI strategy, but working code, real demos, real
          failures, real lessons. When we kicked off the Kuala Lumpur
          chapter, the city had AI conversation in plenty of places:
          corporate panels, vendor-led summits, consulting roundtables.
          What it didn&rsquo;t have was a regular room where the people
          shipping AI products could find each other and learn from
          peers, with no agenda beyond the work itself.
        </p>
        <p>
          That gap was the thing worth filling.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The kickoff, the cadence, and the hackathons</h2>
        <p>
          We kicked the chapter off in August 2024. The first events were
          monthly &mdash; one room, one shape, mixed audience. That worked
          for getting to a critical mass of people, but as the community
          grew it became clear that the builders and the business operators
          in the room wanted different things from a meetup. The builders
          wanted technical depth: someone walking through their RAG
          architecture, the fine-tuning run that worked, the eval setup
          they actually shipped. The operators wanted product judgement:
          what AI features customers paid for, where adoption stalled, how
          to cost a model in production.
        </p>
        <p>
          Rather than try to serve both in the same room, we shifted to a
          twice-monthly cadence with two distinct tracks. One event a
          month for builders, focused on technical work. One event a
          month for the business side, focused on product and
          go-to-market. The split doubled the value the community
          delivered without doubling the cost of running it &mdash; the
          people who wanted both came to both, the people who only wanted
          one got the one they wanted, and neither side felt they were
          sitting through content meant for the other room.
        </p>
        <p>
          Alongside the regular events, we ran practitioner hackathons
          &mdash; focused, time-boxed builds where the community shipped
          real things together rather than just talking about them.
          The hackathons pulled in the builders who don&rsquo;t always
          show up for evening meetups, and gave the chapter a different
          kind of energy from the panel-and-demo format.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The partner layer</h2>
        <p>
          A community without partners is a meetup. A community with the
          right partners becomes infrastructure. We built that layer
          deliberately, across a few overlapping fronts.
        </p>
        <p>
          <strong>The capital and founder layer.</strong> Antler&rsquo;s KL
          presence was a regular co-conspirator &mdash; founders we hosted
          often turned into Antler-funded startups, and Antler-funded
          startups regularly came through our rooms. The community and
          the venture studio fed each other.
        </p>
        <p>
          <strong>The infrastructure and applied-AI layer.</strong>{' '}
          YTL AI Labs anchored the conversation about AI compute at
          industrial scale, including some of the largest AI data-centre
          development in the region. Grab brought applied-AI engineering
          depth from one of the strongest AI teams in Southeast Asia.
          TDCX brought the deployment-at-scale lens &mdash; what AI
          actually looks like running across multiple markets at
          customer-experience volume.
        </p>
        <p>
          <strong>The financial-services layer.</strong>{' '}
          Paynet, the operator of Malaysia&rsquo;s national payments
          infrastructure, anchored conversations about deploying AI
          inside regulated financial rails. Moneylion brought
          practitioner depth on consumer-facing AI fintech products
          with regional reach.
        </p>
        <p>
          <strong>The academic layer.</strong>{' '}
          Asia Business School anchored the business-track conversation
          with the rigour of a school setting alongside practitioner
          depth.
        </p>
        <p>
          Plus a wider list of partners and supporters who showed up
          across events, hackathons, and sponsor sessions through the
          year. Each partnership came with a real reason. The community
          got access. The partners got direct connection to practitioners
          they couldn&rsquo;t reach through marketing. The currency was
          relevance, not sponsorship.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">What it became</h2>
        <p>
          The community started returning value beyond what its founders
          put in.
        </p>
        <p>
          AI Tinkerers KL became a direct pipeline into consulting work,
          client introductions, and funded startup collaborations. AI
          workshop opportunities at a Big 4 firm and major Malaysian
          enterprises &mdash; including Paynet &mdash; came partly out
          of these relationships. The OtonocoAI engagement intersected
          with the same network. Founders found co-founders, engineers
          found their next role, and people who&rsquo;d been working
          alone discovered they had peers. That&rsquo;s the right
          outcome for a practitioner community &mdash; the room creates
          flow, and the flow turns into work.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The honest part</h2>
        <p>
          AI Tinkerers KL was a volunteer role. The work was real
          &mdash; kickoff, two-track cadence, hackathons, partnerships,
          sponsor conversations, talent flow &mdash; and unpaid through
          the year. The team worked on monetisation in parallel, because
          community work that depends on indefinite goodwill eventually
          breaks. Building a sustainable model alongside running the
          chapter was its own quiet project, less visible than the
          events themselves but central to whether the format could
          last past the energy of its first year.
        </p>
        <p>
          That&rsquo;s the reality of practitioner community in a city
          that doesn&rsquo;t yet have venture-funded models for the
          format. We named it openly to ourselves and to partners.
          That honesty was part of why the partnerships held.
        </p>
      </section>

      <section className="case-section case-reflection">
        <h2 className="case-section-title">The thread back to the early days</h2>
        <p>
          What this work drew on isn&rsquo;t recent. The partnership and
          sales muscle came from much earlier &mdash; from the customer
          service and technical support years, from running T360 as a
          small consulting firm during university, from building a book
          of clients by treating relationships seriously rather than
          transactionally.
        </p>
        <p>
          AI Tinkerers KL is the most recent expression of those skills,
          applied at a different scale and with different stakes. The
          shape of the work is the same: identify what a group of people
          actually needs, build the small mechanism that gives it to
          them, partner with the institutions that make it credible, and
          treat the people in the room with the respect that earns the
          next conversation.
        </p>
        <p>
          That&rsquo;s the work. It&rsquo;s harder to put on a resume
          than a shipped product. It&rsquo;s also part of why the rooms
          I walk into stay open.
        </p>
      </section>

      <footer className="case-footer">
        <Link href="/work" className="back-link">
          &larr; All work
        </Link>
        <a
          href="https://www.linkedin.com/company/ai-tinkerers-kuala-lumpur/"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-link"
        >
          AI Tinkerers KL on LinkedIn &rarr;
        </a>
      </footer>

    </div>
  );
}

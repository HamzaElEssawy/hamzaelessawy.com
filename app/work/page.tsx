import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work — Hamza Elessawy',
  description: 'Selected work across fintech, healthcare AI, computer vision, and national credit infrastructure.',
};

export default function WorkPage() {
  return (
    <div className="work-page">
      <header className="work-header">
        <p className="eyebrow">Work</p>
        <h1>
          The things I&rsquo;ve built, <span className="em">in order.</span>
        </h1>
        <p className="lede">
          Twelve years, four countries, one mission. Some of these have their
          own page. Others are a paragraph here. All of them are real.
        </p>
      </header>

      <section className="work-list">

        {/* Pixelence — has dedicated page */}
        <article className="work-item has-page">
          <div className="work-item-head">
            <h2>
              <Link href="/work/pixelence">Pixelence</Link>
            </h2>
            <span className="work-item-meta">Co-Founder &amp; CPO &middot; May 2024 — Present</span>
          </div>
          <p>
            The world&rsquo;s first non-contrast AI solution for brain MRI.
            GAN-based contrast synthesis on standard scans — no Gadolinium,
            no kidney test, no waiting, no second scan. Peer-reviewed in the{' '}
            <em>Journal of Clinical Oncology</em>. Clinical trials live at
            NUHS, IDC, and UPM. RM200K raised, EIC Grant Phase 1 approved, 2nd
            place Eureka IIEC 2025. Patent filed. Pitched at SusHi Tech Tokyo
            and SelectUSA.
          </p>
          <Link href="/work/pixelence" className="read-more">
            Read the case study &rarr;
          </Link>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>Xanadu AI Factory</h2>
            <span className="work-item-meta">Co-Founder &middot; Jun 2024 — Present</span>
          </div>
          <p>
            Venture-building operation co-founded with Hussain Al Menyawy
            (two-time Egyptian founder, networked across Arab, Gulf, and
            African ecosystems). Thesis: help promising founders validate from
            the product and business side faster, bypassing endless accelerator
            cycles. Active with equity stakes. More to show as ventures mature.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>Tapback</h2>
            <span className="work-item-meta">Product Consultant &middot; Via Xanadu</span>
          </div>
          <p>
            Restaurant-tech startup now operating in Saudi Arabia. Revamped the
            core product, introduced pre-order and table-reservation models,
            reshaped the revenue model. Currently in final stages of a
            licensing deal with a major Saudi financial institution.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>BrioHR <span className="work-item-badge">YC W21</span></h2>
            <span className="work-item-meta">Product Management Consultant &middot; Feb 2025 — Oct 2025</span>
          </div>
          <p>
            Joined pre-Series A during a period of significant company growth
            and hiring — one of only two PMs in the organization. Led AI
            adoption strategy across BrioHR&rsquo;s HR platform, identifying
            where AI creates real product value rather than surface-level
            features. Navigated the organizational dynamics of introducing AI
            into an established team.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>Independent AI Product Consultant</h2>
            <span className="work-item-meta">Multiple Clients &middot; Jun 2024 — Jan 2025</span>
          </div>
          <p>
            Four engagements in parallel.{' '}
            <em>OtonocoAI</em> — built their regulatory AI compliance product
            from zero including a document comparison tool; company raised
            pre-seed from Antler.{' '}
            <em>Trisilco</em> — six months embedded with the CEO on a live
            CIMB credit-scoring project, bringing direct I-SCORE credit bureau
            expertise into the engagement.{' '}
            <em>EY Malaysia</em> — designed and delivered an AI and RAG
            workshop for EY employees.{' '}
            <em>AI Tinkerers KL (Co-Director)</em> — grew KL&rsquo;s most
            active AI practitioner community into a direct pipeline for
            consulting work, client introductions, and funded startup
            collaborations.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>Antler Malaysia (MY2)</h2>
            <span className="work-item-meta">Entrepreneur in Residence &middot; Mar 2024 — Jun 2024</span>
          </div>
          <p>
            Joined to build at the intersection of AI and healthcare. Identified
            top co-founder within the first days of the program. Iterated
            through multiple ideas, got rejected several times on scalability,
            eventually landed on non-contrast MRI and brought in a clinical
            oncologist as third co-founder. Reached the investment finals. The
            company became Pixelence.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>Tapway</h2>
            <span className="work-item-meta">Senior Product Manager &middot; Feb 2023 — Jul 2024</span>
          </div>
          <p>
            Joined one month after a cardiac event, two weeks after an
            angiogram, to lead product at a loss-making AI computer vision
            company with no CTO, no technical lead, no solution architect.
            Turned the company profitable by RM500K within 18 months. Built
            <em> Samurai Central</em> and <em>Samurai Copilot</em> — a no-code
            CV platform that became Malaysia&rsquo;s first computer vision ISV
            on AWS Marketplace. Deployments at Changi Airport, Penang Port,
            Petronas, Sime Darby, and KLK Palm Oil across five Southeast Asian
            countries. Case study coming.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>DXC Technology</h2>
            <span className="work-item-meta">Product Owner / Technical PMO &middot; Dec 2021 — Apr 2023</span>
          </div>
          <p>
            Two engagements at a FTSE-listed global IT services company.
            <em> BAE Systems</em> — led three remote Scrum squads across web
            and mobile application development.
            <em> Manchester United</em> — PMO-level work on capability
            management, finance alignment, and timeline coordination. Honest
            reflection: the most structured, process-heavy role of my career.
            Valuable for learning how large organizations run programs at
            scale. Not where I do my best work.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>Skip Pay</h2>
            <span className="work-item-meta">Founder &amp; CEO &middot; Oct 2021 — Aug 2022</span>
          </div>
          <p>
            Built a contactless payment and personal finance app for Egypt,
            Libya, and Iraq — driven by firsthand understanding of financial
            exclusion from I-SCORE credit infrastructure work. 300+ customer
            interviews before building. Functional beta on Google Play.
            Finalist at Orange Corners, the Netherlands-funded international
            accelerator. Shut down cleanly when licensing failed rather than
            drag it out. The co-founding team is now at Hala (Saudi Arabia),
            the Libyan Investment Authority, Fly Emirates, and Abu Dhabi MFA.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>I-SCORE — Egyptian Credit Bureau</h2>
            <span className="work-item-meta">Technical Product Manager &middot; Jan 2021 — Dec 2021</span>
          </div>
          <p>
            First Technical PM at Egypt&rsquo;s national credit bureau — the
            infrastructure underneath every bank and financial institution in
            the country. Led the launch of four application versions across
            I-SCORE&rsquo;s product suite in a high-security on-premise
            environment. Owned the product and technical relationship with the
            external vendor, translating between database teams, network
            infrastructure, security, and Central Bank stakeholders. Much of
            this work is covered by NDA; the structural reality is what can be
            shared.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>Div Systems</h2>
            <span className="work-item-meta">Product Manager &middot; Feb 2021 — Dec 2021</span>
          </div>
          <p>
            Shipped early-stage products across supply chain, e-commerce,
            e-learning, and sports with founding teams. The real output of
            this chapter wasn&rsquo;t any single product. It was building the
            muscle of reading a new domain fast, finding the real problem
            underneath the stated one, and moving without a safety net. The
            product designer and backend engineer I worked closest with here
            followed me into later work.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>Fugee &amp; Fugeelah</h2>
            <span className="work-item-meta">Product Manager &middot; Aug 2020 — Dec 2021</span>
          </div>
          <p>
            PM role at a refugee economic empowerment organisation, running
            remotely and concurrently with I-SCORE. Owned the full digital
            product layer — WordPress and Squarespace development with light
            custom coding, Google Data Studio dashboards for program analytics
            before it became Looker, SEO, donor acquisition, and marketing
            measurement frameworks. First time building data visualisation for
            real operational decisions.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>SOLS 24/7 Malaysia</h2>
            <span className="work-item-meta">Senior Project Coordinator &middot; 2019 — 2020</span>
          </div>
          <p>
            Led monitoring and evaluation across the operations department and
            structured the internal data infrastructure using Airtable — at a
            time when almost nobody was using it. The HR manager came with a
            vague brief. I spent a night mapping the entire data flow on a
            whiteboard. Built it. It worked. That same HR manager later showed
            up in my Antler cohort. Some people keep showing up.
          </p>
        </article>

        <article className="work-item">
          <div className="work-item-head">
            <h2>T360 Technology</h2>
            <span className="work-item-meta">Co-Founder &middot; Jun 2016 — Aug 2019</span>
          </div>
          <p>
            Co-founded an IT consulting and technical services firm during
            university. Serviced 20+ clients across network infrastructure,
            web development, email systems, and surveillance installations —
            under SLA agreements with recurring contracts. Signed my first
            client contract at 20. Built the book from scratch — friends
            asking for help with websites became formal contracts with
            businesses across Cairo.
          </p>
        </article>

        <article className="work-item compressed">
          <div className="work-item-head">
            <h2>Earlier</h2>
            <span className="work-item-meta">Customer Service &amp; Technical Support &middot; 2014 — 2016</span>
          </div>
          <p>
            Raya Contact Center, NAOS Solutions — customer service and
            technical support for Orange Telecommunication and others before I
            ever touched product. Which is why I still trust what builders and
            users tell me more than what the roadmap says.
          </p>
        </article>

      </section>

      <footer className="work-footer">
        <Link href="/" className="back-link">
          &larr; Back home
        </Link>
      </footer>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume — Hamza Elessawy',
  description: 'Product leader working at the intersection of AI, fintech, and healthcare.',
};

export default function ResumePage() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Hamza Elessawy</h1>
        <p className="resume-meta">
          Vilnius, Lithuania &middot;{' '}
          <a href="mailto:info@hamzaelessawy.com">info@hamzaelessawy.com</a>{' '}
          &middot;{' '}
          <a href="https://linkedin.com/in/hamza-el-essawy">LinkedIn</a>
        </p>
        <div className="resume-actions">
          <a href="/hamza-elessawy-resume.pdf" className="pdf-link" download>
            Download PDF
          </a>
          <Link href="/" className="back-link">
            &larr; Back
          </Link>
        </div>
      </header>

      <section className="resume-section intro">
        <p>
          I build products for people who couldn&rsquo;t get in. Across four
          countries and twelve years &mdash; in national credit infrastructure,
          fintech ventures, enterprise computer vision, and healthcare AI
          &mdash; the work has always been the same: enter the broken
          situation, build the team, ship the thing that closes the gap.
        </p>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Experience</h2>

        <div className="role">
          <div className="role-head">
            <h3>Co-Founder &amp; CPO</h3>
            <span className="role-dates">May 2024 — Present</span>
          </div>
          <p className="role-company">Pixelence &middot; Kuala Lumpur</p>
          <ul>
            <li>
              Co-founded the world&rsquo;s first non-contrast AI solution for
              brain MRI &mdash; GAN-based contrast synthesis that eliminates
              Gadolinium injections. Mission: 90% of global brain MRI scans
              contrast-free by 2029.
            </li>
            <li>
              Published peer-reviewed research in the{' '}
              <em>Journal of Clinical Oncology</em> &mdash; clinical trial of
              156 brain tumor patients, 40 doctor reviews, peer-reviewed by 9
              researchers.
            </li>
            <li>
              Active clinical trials at NUHS, IDC, and UPM. Training data
              partnerships covering 350K patients (Elborg Radiology) and 17M
              EMR records (Islamabad Diagnostic Centre).
            </li>
            <li>
              RM200K raised (CIP Spark Grant + WatchTower VC). European
              Innovation Council Grant Phase 1 approved &mdash; &euro;2.5M
              target. Patent search initiated.
            </li>
            <li>
              2nd Place &mdash; Eureka IIEC 2025 (Zagreb, 60+ global
              applicants). Top 3 &mdash; Malaysia Startup World Cup.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Co-Founder</h3>
            <span className="role-dates">Jun 2024 — Present</span>
          </div>
          <p className="role-company">Xanadu AI Factory &middot; Kuala Lumpur</p>
          <ul>
            <li>
              Venture-building operation co-founded with Hussain Al Menyawy
              (two-time Egyptian founder, networked across Arab, Gulf, and
              African ecosystems). Thesis: help promising founders validate
              from the product and business side faster &mdash; bypassing
              endless accelerator cycles.
            </li>
            <li>
              Active operation with equity stakes. Running sprints, defining
              product direction, connecting founders with first clients and
              investors.
            </li>
            <li>
              Tapback (parallel): PM for restaurant tech startup now operating
              in Saudi Arabia &mdash; revamped core product, introduced
              pre-order and table-reservation models, now in final stages of a
              licensing deal with a major Saudi financial institution.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Product Management Consultant</h3>
            <span className="role-dates">Feb 2025 — Oct 2025</span>
          </div>
          <p className="role-company">
            BrioHR (Y Combinator W21) &middot; Kuala Lumpur
          </p>
          <ul>
            <li>
              Joined pre-Series A during a period of significant company
              growth and hiring &mdash; one of only two PMs in the
              organization.
            </li>
            <li>
              Led AI adoption strategy across BrioHR&rsquo;s HR platform,
              identifying where AI could create real product value rather
              than surface-level features.
            </li>
            <li>
              Navigated the organizational dynamics of introducing AI into an
              established team and earning trust in a fast-moving, newly
              scaled environment.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Independent AI Product Consultant</h3>
            <span className="role-dates">Jun 2024 — Jan 2025</span>
          </div>
          <p className="role-company">Multiple Clients &middot; Kuala Lumpur</p>
          <ul>
            <li>
              <em>OtonocoAI:</em> Built regulatory AI compliance product from
              zero, including a document comparison tool. Connected the team
              with Kananga Malaysia and two Malaysian banks. Company raised
              pre-seed from Antler.
            </li>
            <li>
              <em>Trisilco:</em> Six months embedded with the CEO on a live
              CIMB project building modern AI-powered credit scoring systems
              &mdash; brought direct credit bureau expertise from I-SCORE
              into the engagement.
            </li>
            <li>
              <em>EY Malaysia:</em> Designed and delivered an AI and RAG
              workshop for EY employees.
            </li>
            <li>
              <em>AI Tinkerers KL (Co-Director):</em> Grew KL&rsquo;s most
              active AI practitioner community &mdash; a direct pipeline for
              consulting work, client introductions, and funded startup
              collaborations.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Entrepreneur in Residence</h3>
            <span className="role-dates">Mar 2024 — Jun 2024</span>
          </div>
          <p className="role-company">
            Antler Malaysia (MY2 cohort) &middot; Kuala Lumpur
          </p>
          <ul>
            <li>
              Identified top co-founder candidate within the first days of
              the program. Landed on eliminating Gadolinium contrast
              injections in brain MRI, brought a clinical oncologist with
              published domain research as third co-founder.
            </li>
            <li>
              Reached Antler investment finals. The company became Pixelence.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Senior Product Manager</h3>
            <span className="role-dates">Feb 2023 — Jul 2024</span>
          </div>
          <p className="role-company">Tapway &middot; Kuala Lumpur</p>
          <ul>
            <li>
              Joined one month after a cardiac event, two weeks after an
              angiogram, to lead product at a loss-making AI computer vision
              company with no CTO, no technical lead, and no solution
              architect.
            </li>
            <li>
              Turned the company profitable by RM500K within 18 months.
              Launched Malaysia&rsquo;s first computer vision ISV on AWS
              Marketplace.
            </li>
            <li>
              Built two products from zero: <em>Samurai Central</em> and{' '}
              <em>Samurai Copilot</em> &mdash; a no-code CV platform
              enabling enterprise vision model deployment without
              engineering dependency.
            </li>
            <li>
              Led deployments at Changi Airport (via Huawei), Penang Port,
              Petronas, Sime Darby Automotive, and KLK Palm Oil across
              Malaysia, Singapore, Thailand, Indonesia, and the Philippines.
            </li>
            <li>
              Rebuilt product function from scratch &mdash; hired a product
              designer (now Design Lead at Noon), structured the labeling
              team, owned the full ML pipeline from image collection through
              model training QC.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Product Owner / Technical PMO</h3>
            <span className="role-dates">Dec 2021 — Apr 2023</span>
          </div>
          <p className="role-company">
            DXC Technology &middot; BAE Systems, Manchester United
          </p>
          <ul>
            <li>
              <em>BAE Systems:</em> Led three remote Scrum squads across web
              and mobile application development &mdash; owned backlog, sprint
              planning, and release coordination across global teams.
            </li>
            <li>
              <em>Manchester United:</em> Brought in as additional 0.5 FTE
              for PMO-level work &mdash; capability management, hiring plan
              alignment with finance, timeline coordination.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Founder &amp; CEO</h3>
            <span className="role-dates">Oct 2021 — Aug 2022</span>
          </div>
          <p className="role-company">Skip Pay &middot; Egypt</p>
          <ul>
            <li>
              Built a contactless payment and personal finance app for Egypt,
              Libya, and Iraq &mdash; driven by firsthand understanding of
              financial exclusion from I-SCORE credit infrastructure work.
            </li>
            <li>
              300+ customer interviews before building. Launched functional
              beta on Google Play. Finalist at Orange Corners (Netherlands-
              funded international accelerator).
            </li>
            <li>
              Shut down cleanly when licensing failed rather than drag it
              out.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Technical Product Manager</h3>
            <span className="role-dates">Jan 2021 — Dec 2021</span>
          </div>
          <p className="role-company">
            Egyptian Credit Bureau (I-SCORE) &middot; Cairo
          </p>
          <ul>
            <li>
              First Technical PM at Egypt&rsquo;s national credit bureau
              &mdash; applications used by every bank and financial
              institution in the country.
            </li>
            <li>
              Led the launch of four application versions &mdash; deployment
              planning, technical assessment, QA in a high-security on-premise
              environment.
            </li>
            <li>
              Owned the product and technical relationship between I-SCORE
              and its external vendor &mdash; translating between database
              teams, network leads, security, and Central Bank stakeholders.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Product Manager</h3>
            <span className="role-dates">Feb 2021 — Dec 2021</span>
          </div>
          <p className="role-company">Div Systems &middot; Cairo</p>
          <ul>
            <li>
              Shipped early-stage products across supply chain, e-commerce,
              e-learning, and sports with founding teams. Core skill built:
              reading a new domain fast and finding the real problem
              underneath the stated one.
            </li>
          </ul>
        </div>

        <div className="role">
          <div className="role-head">
            <h3>Co-Founder</h3>
            <span className="role-dates">Jun 2016 — Aug 2019</span>
          </div>
          <p className="role-company">T360 Technology &middot; Cairo</p>
          <ul>
            <li>
              Co-founded an IT consulting and technical services firm during
              university. Serviced 20+ clients across network infrastructure,
              web development, email systems, and surveillance installations
              &mdash; under SLA agreements with recurring contracts.
            </li>
            <li>
              Signed my first client contract at 20. Built the book from
              scratch &mdash; friends asking for help with websites became
              formal contracts with businesses across Cairo.
            </li>
          </ul>
        </div>

        <div className="role compressed">
          <div className="role-head">
            <h3>Earlier</h3>
            <span className="role-dates">2014 — 2020</span>
          </div>
          <p className="role-company">
            SOLS 24/7 Malaysia, Raya Contact Center, NAOS Solutions
          </p>
          <ul>
            <li>
              Operations and senior project coordination at SOLS 24/7 Kuala
              Lumpur (2019 &ndash; 2020). Came into product through customer
              service and technical support roles before that &mdash; which
              is why I still trust what builders and users tell me more than
              what the roadmap says.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Education</h2>
        <div className="role">
          <div className="role-head">
            <h3>
              European Master in Management of Innovation &amp;
              Entrepreneurship (EMMIE)
            </h3>
            <span className="role-dates">2025 — 2027</span>
          </div>
          <p className="role-company">
            ISM University of Management and Economics &middot; Zagreb School
            of Economics and Management &middot; HEC Li&egrave;ge
          </p>
          <p className="role-note">
            Erasmus Mundus program. Focus: impact entrepreneurship,
            data-driven decision making, sustainable business models.
          </p>
        </div>
        <div className="role">
          <div className="role-head">
            <h3>Bachelor of Science, Computing &amp; Information Technology</h3>
            <span className="role-dates">2013 — 2018</span>
          </div>
          <p className="role-company">The Open University (UK)</p>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Recognition</h2>
        <ul className="recognition-list">
          <li>
            <strong>2nd Place</strong> &mdash; Eureka IIEC 2025, Zagreb (60+
            global applicants)
          </li>
          <li>
            <strong>Top 3</strong> &mdash; Malaysia Startup World Cup 2024
          </li>
          <li>
            <strong>Finalist</strong> &mdash; Antler Malaysia MY2 Investment
            Committee
          </li>
          <li>
            <strong>Finalist</strong> &mdash; Orange Corners International
            Accelerator (Dutch government-backed)
          </li>
          <li>
            <strong>Co-Director</strong> &mdash; AI Tinkerers KL (Aug 2024
            &ndash; Sep 2025)
          </li>
          <li>
            <strong>Peer-reviewed publication</strong> &mdash;{' '}
            <em>Journal of Clinical Oncology</em> (Pixelence)
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Skills &amp; Tools</h2>
        <dl className="skills-list">
          <div>
            <dt>Product</dt>
            <dd>
              PRDs, roadmapping, JTBD, user research, A/B testing,
              agile/scrum, backlog management
            </dd>
          </div>
          <div>
            <dt>AI / Technical</dt>
            <dd>
              ML pipeline (image collection, training, QC), RAG, LLMs,
              computer vision, API integrations, cloud (AWS / Azure), CI/CD
            </dd>
          </div>
          <div>
            <dt>Data</dt>
            <dd>
              SQL, Python (working knowledge), Looker / QuickSight, product
              analytics
            </dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Linear, Jira, Airtable, HubSpot, Figma, Notion, Postman</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>Arabic (native), English (professional)</dd>
          </div>
        </dl>
      </section>

      <footer className="resume-footer">
        <Link href="/" className="back-link">
          &larr; Back
        </Link>
      </footer>
    </div>
  );
}

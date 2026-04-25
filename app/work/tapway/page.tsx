import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tapway — Hamza Elessawy',
  description: "Senior Product Manager at a loss-making AI computer vision company with no CTO. Eighteen months to RM500K profit and Malaysia's first CV ISV on AWS Marketplace.",
};

export default function TapwayPage() {
  return (
    <div className="case-study">

      <header className="case-header">
        <p className="eyebrow">Case study · Computer Vision · Enterprise AI</p>
        <h1>
          Tapway <span className="em">—</span> shipping a turnaround that paid
          for itself.
        </h1>
        <p className="lede">
          A loss-making AI computer vision company. No CTO, no technical
          lead, no solution architect. A product stuck for over a year.
          Eighteen months later: RM500K profit, two products built from
          zero, and Malaysia&rsquo;s first computer vision ISV on the AWS
          Marketplace. The work, the team, and the constraints, told
          honestly.
        </p>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>Senior Product Manager</dd></div>
          <div><dt>Period</dt><dd>Feb 2023 — Jul 2024 (18 months)</dd></div>
          <div><dt>Outcome</dt><dd>RM500K profit · AWS Marketplace launch</dd></div>
          <div><dt>Deployments</dt><dd>5 SE Asian countries · 8+ named enterprise clients</dd></div>
          <div><dt>Links</dt><dd>
            <a href="https://visionsamur.ai" target="_blank" rel="noopener noreferrer">visionsamur.ai</a>
            {' · '}
            <a href="https://gotapway.com/news/tapway-launches-samurai-central-on-aws-marketplace-marking-a-milestone-as-malaysias-first-isv" target="_blank" rel="noopener noreferrer">AWS Marketplace launch</a>
            {' · '}
            <a href="https://gotapway.com" target="_blank" rel="noopener noreferrer">gotapway.com</a>
          </dd></div>
        </dl>
      </header>

      <section className="case-section">
        <h2 className="case-section-title">How it started</h2>
        <p>
          February 2023. One month after a cardiac event in Egypt, two weeks
          after the angiogram &mdash; I didn&rsquo;t have insurance in
          Malaysia yet, so the procedure happened back home. I started at
          Tapway carrying medications, an unfinished recovery, and the
          assumption that I&rsquo;d have technical leadership above me to lean
          on while I learned the company.
        </p>
        <p>
          Two months in, the product architect onboarding me resigned. Around
          the same time, the product designer left. There was no CTO. No
          technical lead. No solution architect. The team I had &mdash; ML
          ops engineer, AI engineer, DevOps, frontend, backend, QA, a
          labeling team &mdash; was strong, but the layer that was supposed to
          translate strategy into technical direction wasn&rsquo;t there.
        </p>
        <p>
          This was also my first deep engagement with computer vision and ML.
          I was the senior PM on paper, and the de facto product, technical,
          and people leader in practice. Not by ambition. By absence.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">What I inherited</h2>
        <p>
          The conversation with Chee How Lim, Tapway&rsquo;s CEO, in my first
          weeks was clear and useful. The company had made a loss in 2022.
          The mandate for 2023 was profit. There was a list of running
          enterprise projects to keep alive, and a parallel ambition to ship
          two new platform products &mdash; SamurAI Central and SamurAI
          Copilot &mdash; from scratch. There was no separate budget line for
          those two. They had to be built within the runway the running
          projects produced.
        </p>
        <p>
          That conversation defined the next eighteen months. Every product
          decision, every hire, every architectural call, every project we
          said yes or no to &mdash; got tested against the same question:
          does this serve the user, the team, and the runway, all three?
          Decisions that only served one or two failed the test.
        </p>
        <p>
          The product itself had been stuck for over a year. Inherited
          architecture choices &mdash; DynamoDB and a GraphQL layer
          &mdash; created friction every time we tried to add new features
          on top. We couldn&rsquo;t rebuild from scratch; the runway
          didn&rsquo;t allow it. So I led the team into a different posture:
          ship what works around the constraints, name what doesn&rsquo;t,
          and document the technical debt clearly enough that whoever picked
          it up after me would know exactly what they were inheriting.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The team I built</h2>
        <p>
          The first call was the product designer. With a tight budget, I
          couldn&rsquo;t hire a full-time senior designer at market rate. I
          brought in a part-time designer I&rsquo;d worked with before and
          trusted to deliver. He shipped at full quality on a part-time
          contract. He&rsquo;s now Design Lead at Noon. That hire alone
          changed what we could ship.
        </p>
        <p>
          One of the labelers on the team had been written off by the
          previous leadership &mdash; reputation issues, performance
          questions. I sat with him, understood what he was actually capable
          of, and gave him room to own the labeling pipeline end to end.
          He grew into the role. Tapway publicly recognized his contribution
          on the company LinkedIn page recently, more than a year after I
          left. Coaching the people the org has stopped believing in is one
          of the highest-leverage moves a PM can make. It also costs less
          than hiring around them.
        </p>
        <p>
          We hired a senior backend engineer with a master&rsquo;s degree
          who leadership initially questioned on cost. I defended the hire
          on the basis that the architecture problems we&rsquo;d inherited
          required someone who could see them clearly, not just patch them.
          He stayed. We&rsquo;re still in touch.
        </p>
        <p>
          I learned computer vision from the AI engineer who&rsquo;d started
          at Tapway as an intern and earned his way into a full-time role.
          He&rsquo;s still in my network. The brilliance was already in the
          building; what was missing was the structure to let it operate at
          full capacity.
        </p>
        <p>
          When labeling demand outgrew our in-house team, we couldn&rsquo;t
          just keep hiring. So I built a system: interviewed and selected a
          bench of freelance labelers ready on standby, defined per-image
          and per-project pricing tied to category and complexity, set up a
          dedicated Slack channel for coordination, and wrote a QC workflow
          that kept quality consistent across in-house and freelance work.
          The system worked well enough that it became the basis for a
          labeling task management feature inside SamurAI Central itself.
          Operations turned into product.
        </p>
        <p>
          For SamurAI Copilot &mdash; the edge deployment side &mdash; I
          brought in a freelance engineer specifically to build the
          deployment orchestration. Not a full-time hire we couldn&rsquo;t
          afford. A targeted engagement scoped to a problem I couldn&rsquo;t
          solve any other way within budget.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">SamurAI Central</h2>
        <p>
          A no-code computer vision platform that handles the full model
          lifecycle &mdash; image collection, labeling, training, evaluation,
          deployment &mdash; without requiring engineering effort from the
          customer. Built so an enterprise can stand up a production CV
          model on their own data without writing code.
        </p>
        <p>
          The labeling layer integrated CVAT (open-source, Angular-based) as
          an embedded frame inside Central. We didn&rsquo;t reinvent labeling
          tooling we didn&rsquo;t need to. We adapted what existed, integrated
          it cleanly, and configured it for our specific image-display and
          navigation requirements.
        </p>
        <p>
          We launched SamurAI Central on the AWS Marketplace on{' '}
          <a
            href="https://gotapway.com/news/tapway-launches-samurai-central-on-aws-marketplace-marking-a-milestone-as-malaysias-first-isv"
            target="_blank"
            rel="noopener noreferrer"
          >
            May 2, 2024
          </a>{' '}
          &mdash; Malaysia&rsquo;s first Independent Software Vendor of any
          kind on the marketplace. We maintained a direct relationship with
          AWS&rsquo;s startup teams throughout the build, which is part of
          what made the marketplace path navigable.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">SamurAI Copilot</h2>
        <p>
          Central is where models are trained. Copilot is where they run. For
          enterprise clients with multi-site deployments, the model needs to
          execute on edge servers at the site &mdash; not in the cloud
          &mdash; for latency, cost, and reliability reasons. NVIDIA Jetson
          Nano, AWS-spec hardware, and other edge devices depending on the
          project.
        </p>
        <p>
          The technical problem: every deployment was different. Different
          servers, different model types (object detection, segmentation,
          classification, sometimes multi-model combinations on the same
          server), different camera setups, different network conditions on
          site. Without a deployment system, every project required custom
          field engineering work.
        </p>
        <p>
          The solution we shipped was a Lambda-based deployment orchestration
          layer that handled model installation, configuration, camera-zone
          definition, streaming setup, and runtime management. The freelance
          engineer I brought in built the core of it, working remotely. The
          result wasn&rsquo;t perfect &mdash; some projects still needed
          on-site judgment calls &mdash; but it converted what had been
          one-off field deployments into a system that scaled.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Deployments in the wild</h2>
        <p>
          Across eighteen months, we deployed SamurAI in production for
          enterprise clients across Malaysia, Singapore, Thailand, Indonesia,
          and the Philippines. The work spanned domains, not just clients.
        </p>
        <p>
          <strong>Agriculture and food.</strong> A durian grading system for
          HERNAN, Malaysia&rsquo;s largest durian exporter, in a three-way
          collaboration with Mega Fortris on traceability. Launched at the
          Malaysia Digital Expo 2023 with the Secretary-General of the
          Ministry of Agriculture and Food Security present.{' '}
          <a
            href="https://gotapway.com/news/launch-of-digital-agtech-ai-empowered-durian-grading-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the launch announcement &rarr;
          </a>
          {' '}AI grading on KLK Berhad palm oil operations. A pizza-chain
          deployment in the Philippines.
        </p>
        <p>
          <strong>Logistics and infrastructure.</strong> Container
          inspection at Penang Port &mdash; ID recognition, damage detection,
          seal integrity, all from cameras mounted at crane height. Traveler
          tracking and vehicle management at Changi Airport Terminal 3, in
          partnership with Huawei. Gas cylinder tracking at Petronas. EV
          charging station monitoring.
        </p>
        <p>
          <strong>Retail, F&amp;B, and automotive.</strong> Visual compliance
          monitoring for ZUS Coffee &mdash; one of Malaysia&rsquo;s largest
          chains &mdash; covering ten-plus rule sets across barista actions,
          uniform compliance, hygiene, and table management. Live in five
          branches before I left, with five-plus models trained against
          their data. Workshop damage assessment at Sime Darby Automotive
          (vehicle inspection during the drive-in process). Warehouse
          management for a tissue-and-paper distributor &mdash; routing
          decisions between local distribution and shipment containers.
        </p>
      </section>

      <section className="case-section case-reflection">
        <h2 className="case-section-title">What I learned</h2>

        <p>
          <strong>Trust the people the org has written off.</strong>{' '}
          The labeler whose effort got publicly recognized a year after I
          left, the senior backend hire I defended, the AI engineer who
          earned his way from intern to full-time. None of them were
          obvious bets when I made them. All of them paid back the trust
          several times over. The cost of giving someone room to grow is
          almost always lower than the cost of replacing them &mdash;
          especially in a company on tight runway.
        </p>

        <p>
          <strong>Own the technical territory you don&rsquo;t have.</strong>{' '}
          I came in not knowing computer vision deeply. I left having owned
          the full ML pipeline from image collection through model training
          QC, having made architecture calls on AWS infrastructure, and
          having shipped two products on edge hardware. The way through was
          to be honest about what I didn&rsquo;t know, learn from the
          engineers who did, and never pretend I had answers I hadn&rsquo;t
          earned. PMs who try to fake technical fluency get caught
          immediately. PMs who admit gaps and close them in public earn
          something stronger than fluency: trust.
        </p>

        <p>
          <strong>Build systems, not heroics.</strong> The freelance labelers
          process became a Samurai Central feature. The Tapway agile guide
          became how new hires onboarded. The technical planning docs
          became the company&rsquo;s reference for scoping new client
          projects. None of these started as products. They started as me
          trying to stop solving the same problem twice. The pattern: every
          recurring operational pain is a candidate to become a product
          feature, an internal tool, or a documented process. On runway,
          you can&rsquo;t afford heroics.
        </p>

        <p>
          <strong>The plan does not survive contact.</strong> Mobile
          inference for Central &mdash; letting users test trained models
          on their phone &mdash; ran into a wall with SageMaker pipelines
          and model size constraints. Some technical problems we worked
          around, some we deferred, some we accepted as out of scope. Same
          with the inherited DynamoDB and GraphQL constraints &mdash; they
          shaped what we could build until we left them. Senior PM work in
          a small company isn&rsquo;t about making the right call on
          paper. It&rsquo;s about making the call that&rsquo;s right for
          the runway, the team, and the user, knowing that all three will
          push back as you build.
        </p>

        <p>
          <strong>Lead with the CEO, not around him.</strong> Setting
          company KPIs alongside Chee How, carrying managerial
          responsibility, leading hiring decisions &mdash; none of those
          were in my job description. They were what the company needed
          and what he asked me to do. The work was always done in the
          open, with the runway visible to both of us, and with
          decisions made together. The senior PM signal here isn&rsquo;t
          that I did more than my title. It&rsquo;s that I did it in a way
          that kept the CEO&rsquo;s confidence the whole time.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Where it stands</h2>
        <p>
          Tapway turned profitable by RM500K within the eighteen months I
          was there. The 2022 loss became a 2024 profit. Both Samurai
          products are still live. The company has continued building
          since I left &mdash; expanding into Indonesia and Thailand,
          partnering with new firms across the region.{' '}
          <a
            href="https://gotapway.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            gotapway.com
          </a>{' '}
          tells the current story. Mine ends in July 2024.
        </p>
        <p>
          What I took with me: the conviction that product, team, and
          business decisions are the same decision when the runway is short.
          You can&rsquo;t separate them &mdash; or rather, you can, but the
          company won&rsquo;t survive the separation. The senior PMs I want
          to work alongside are the ones who already know this.
        </p>
      </section>

      <footer className="case-footer">
        <Link href="/work" className="back-link">
          &larr; All work
        </Link>
        <a
          href="https://visionsamur.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-link"
        >
          Visit visionsamur.ai &rarr;
        </a>
      </footer>

    </div>
  );
}

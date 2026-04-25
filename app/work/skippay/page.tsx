import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Skip Pay — Hamza Elessawy',
  description:
    "A contactless payment and personal finance app for Egypt, with regional vision for Libya and Iraq. Real users on a beta. Orange Corners finalist. Shut down cleanly when the licensing path closed.",
};

export default function SkipPayPage() {
  return (
    <div className="case-study">

      <header className="case-header">
        <p className="eyebrow">Case study · Fintech · Founder</p>
        <h1>
          Skip Pay <span className="em">—</span> building for the people the
          system was leaving out.
        </h1>
        <p className="lede">
          A contactless payment and personal finance app launched in Egypt,
          designed for a regional rollout into Libya and Iraq. Built from a
          real conviction about financial inclusion, and from the deep work
          at I-SCORE that showed me exactly where the gaps were. Real users
          on a beta. Orange Corners finalist. Shut down cleanly when the
          licensing path closed &mdash; rather than drag it out.
        </p>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>Founder &amp; CEO</dd></div>
          <div><dt>Period</dt><dd>Oct 2021 — Aug 2022</dd></div>
          <div><dt>Markets</dt><dd>Egypt (launch) · Libya, Iraq (regional vision)</dd></div>
          <div><dt>Outcome</dt><dd>Functional beta · Orange Corners finalist · Clean shutdown</dd></div>
          <div><dt>Links</dt><dd>
            <a href="https://www.linkedin.com/company/skipnpay/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </dd></div>
        </dl>
      </header>

      <section className="case-section">
        <h2 className="case-section-title">What pushed me to start</h2>
        <p>
          The conviction came from two places, sitting together.
        </p>
        <p>
          What I&rsquo;d witnessed in Malaysia about how financial inclusion
          done right transforms lives &mdash; when payment infrastructure
          works, when people can actually see and control their money, the
          change in how they live is not abstract. The shift is daily,
          visible, and underpriced in most narratives about fintech.
        </p>
        <p>
          And my year at I-SCORE. Egypt&rsquo;s national credit bureau is
          the infrastructure underneath every bank in the country, and being
          the first technical PM there put me in front of credit data for a
          year. I saw how the data moved. I saw where it broke down. I saw
          who it was failing.
        </p>
        <p>
          The pattern was clear. People in Egypt were navigating their
          finances blind &mdash; fragmented bank accounts, no visibility
          into where money actually went, no real-time signal on what they
          were spending. The infrastructure existed. The interface to it
          didn&rsquo;t. And the macro picture supported what I was seeing:
          70% of Egyptian payments still ran on cash in 2021, against a
          national vision of financial inclusion by 2030. The question
          wasn&rsquo;t whether there was a market. The question was whether
          anyone would build for the people the system was already leaving
          out.
        </p>
        <p>
          That&rsquo;s what pushed me to move.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Who I built it with</h2>
        <p>
          I brought together a team of six. Two co-founders with finance
          and operations depth &mdash; one carrying community and
          operational experience, one carrying financial management from
          the corporate side. Three engineers between them spanned
          governmental software, corporate services, and fintech-specific
          backend work.
        </p>
        <p>
          Six people, no outside money, deliberately calling ourselves
          &ldquo;six broke guys&rdquo; in the deck because that&rsquo;s
          what we were. The credibility came from the work, not the
          runway.
        </p>
        <p>
          Where each of them is now is a conversation for in person, not
          this page. But the caliber tells the story.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">What we built and proved</h2>

        <p>
          Skip wasn&rsquo;t a challenger bank. That call mattered from
          the start. We weren&rsquo;t asking people to displace their
          money into a new account, build trust with another bank brand,
          or wait through KYC for a wallet they wouldn&rsquo;t actually
          use. The product sat as an orchestration layer on top of cards
          people already had &mdash; letting them pay by QR code at any
          merchant, switch which card the payment came from, see all
          their accounts in one view, and watch their spending in real
          time.
        </p>
        <p>
          The merchant side mirrored the same thinking. Two-minute online
          onboarding. No POS hardware. Static and dynamic QR codes that
          carried order details and amount. Compatibility with the QR
          networks every Egyptian bank already supported. We weren&rsquo;t
          asking merchants to choose us over their existing acquirer.
          We were giving them a faster path to accept what was already
          in motion.
        </p>
        <p>
          Before writing a line of production code, we ran more than 300
          customer interviews to shape what the product should be. We
          layered behavior analytics on top &mdash; Hotjar on the
          marketing surfaces, observational data on the prototype
          &mdash; to test where users actually got stuck versus where
          we thought they would. The combination of qualitative
          interviews and quantitative behavior signal kept us from
          inventing problems that didn&rsquo;t exist, and kept the
          roadmap honest when our instincts disagreed with the evidence.
        </p>
        <p>
          We launched a functional beta on Google Play. Real users
          transacted in test mode. The product surfaces all worked end
          to end &mdash; onboarding, home dashboard with Transfer / Scan
          to Pay / Top Up, utilities for gas / water / electricity,
          weekly income vs expense statistics, category breakdowns by
          merchant, payment activity history.
        </p>

        <div className="case-gallery">
          <figure>
            <Image
              src="/skippay/splash.jpg"
              alt="Skip onboarding splash — fastest payment, QR code scanning"
              width={720}
              height={1560}
            />
            <figcaption>Onboarding</figcaption>
          </figure>
          <figure>
            <Image
              src="/skippay/home.jpg"
              alt="Skip home dashboard with available balance, Transfer, Scan to Pay, Top Up, Utilities, Offers, Activity, Shop, Mobile Credit, Split Bill"
              width={720}
              height={1600}
            />
            <figcaption>Home dashboard</figcaption>
          </figure>
          <figure>
            <Image
              src="/skippay/stats.jpg"
              alt="Skip weekly statistics screen showing income, expense, daily bars and category chart"
              width={720}
              height={1600}
            />
            <figcaption>Weekly statistics</figcaption>
          </figure>
          <figure>
            <Image
              src="/skippay/categories.jpg"
              alt="Skip category breakdown showing transportation, shopping and coffee, with recent expenses list"
              width={720}
              height={1600}
            />
            <figcaption>Spend by category</figcaption>
          </figure>
        </div>

        <p>
          We were selected as a finalist at Orange Corners, the
          international accelerator backed by the Dutch government.
          Being a finalist there is real signal &mdash; the program
          runs serious diligence and the cohort is small.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The wall and the call</h2>
        <p>
          Egypt&rsquo;s payment licensing landscape moved underneath us.
          The Central Bank&rsquo;s instant payment network framework was
          being formalized in the same window we needed to integrate.
          Two things made the path close.
        </p>
        <p>
          The timing of the new fintech regulation didn&rsquo;t align
          with our runway. And the license fee structure for a payment
          service provider was set against capital we didn&rsquo;t have
          and couldn&rsquo;t raise on the timeline that mattered.
        </p>
        <p>
          I&rsquo;ve watched founders in our position try to keep going
          anyway &mdash; burning down the team, chasing bridge rounds,
          hoping the regulator moves. That&rsquo;s the wrong call when
          the gating constraint is regulatory and the regulator
          isn&rsquo;t moving. It costs the team&rsquo;s time, the
          investors&rsquo; patience, and the founder&rsquo;s clarity
          &mdash; and you owe all three more than that.
        </p>
        <p>
          We shut Skip down cleanly in August 2022. Closed accounts,
          archived the work, returned what could be returned, and let
          everyone move forward without ambiguity. No drama. No bridge
          round to &ldquo;see if something opens up.&rdquo; The path
          didn&rsquo;t open. We named it. We stopped.
        </p>
      </section>

      <section className="case-section case-reflection">
        <h2 className="case-section-title">What I learned about when to stop</h2>

        <p>
          Most founder stories celebrate persistence. Skip taught me
          that the rarer signal is recognizing a closed path early
          enough to stop without dragging others into the cost of
          pretending otherwise.
        </p>

        <p>
          <strong>The 300 interviews weren&rsquo;t research overhead.</strong>{' '}
          They were how we built conviction, and how, when the licensing
          wall came up, we already knew the demand was real. That made
          the shutdown a regulatory call, not a market call. The next
          time I face a decision like this, that distinction will matter
          again. Walking away from a market that doesn&rsquo;t exist is
          easy. Walking away from a market you&rsquo;ve verified is real
          but can&rsquo;t legally serve is harder &mdash; and clearer.
        </p>

        <p>
          <strong>A team you&rsquo;d build with again is the only team
          worth building with the first time.</strong>{' '}
          Skip&rsquo;s team didn&rsquo;t dissolve into resentment. We
          stayed in touch. Several of the people I worked with on Skip
          have shaped what I&rsquo;ve done since &mdash; and I&rsquo;d
          take a call from any of them, today, on anything. That
          outcome wasn&rsquo;t luck. It was the result of being honest
          with each other from week one and even more honest at the
          close.
        </p>

        <p>
          <strong>Stopping cleanly is a senior signal, not a junior one.</strong>{' '}
          The hardest decision in the founder&rsquo;s job isn&rsquo;t
          which feature to ship or which investor to take. It&rsquo;s
          recognizing when the path doesn&rsquo;t open and being
          willing to say so out loud, in time, while there&rsquo;s
          still dignity in the close. The senior PMs and operators I
          want to work alongside understand this in their bones. The
          ones who don&rsquo;t, you can usually spot by their last
          three jobs.
        </p>
      </section>

      <footer className="case-footer">
        <Link href="/work" className="back-link">
          &larr; All work
        </Link>
        <a
          href="https://www.linkedin.com/company/skipnpay/"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-link"
        >
          Skip on LinkedIn &rarr;
        </a>
      </footer>

    </div>
  );
}

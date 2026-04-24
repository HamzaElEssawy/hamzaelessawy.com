import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pixelence — Hamza Elessawy',
  description: "The world's first non-contrast AI solution for brain MRI. Co-founded by Hamza Elessawy.",
};

export default function PixelencePage() {
  return (
    <div className="case-study">

      <header className="case-header">
        <p className="eyebrow">Case study · Healthcare AI</p>
        <h1>
          Pixelence <span className="em">—</span> removing a barrier most people
          don&rsquo;t know exists.
        </h1>
        <p className="lede">
          Every year, hundreds of thousands of patients get brain MRIs to
          check for tumors. Most of them receive an injection of Gadolinium
          contrast dye to make the tumor visible. Many patients can&rsquo;t
          have it. Many more can&rsquo;t afford it. We&rsquo;re building the
          AI that replaces the injection.
        </p>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>Co-Founder &amp; CPO</dd></div>
          <div><dt>Since</dt><dd>May 2024</dd></div>
          <div><dt>Stage</dt><dd>Pre-revenue · active clinical trials</dd></div>
          <div><dt>Raised</dt><dd>RM 200K + EIC Phase 1 approved</dd></div>
          <div><dt>Links</dt><dd>
            <a href="https://www.pixelenceai.com" target="_blank" rel="noopener noreferrer">pixelenceai.com</a>
            {' · '}
            <a href="https://ascopubs.org/doi/full/10.1200/CCI.23.00266" target="_blank" rel="noopener noreferrer">JCO paper</a>
            {' · '}
            <a href="https://www.pixelenceai.com/news.html" target="_blank" rel="noopener noreferrer">News</a>
          </dd></div>
        </dl>
      </header>

      <section className="case-section">
        <h2 className="case-section-title">How it started</h2>
        <p>
          The idea came from a hospital room. Less than 24 hours after my
          heart stopped, my LinkedIn photo was taken. A second cardiac event a
          few years later reminded me what the data looks like from the
          inside. I&rsquo;d watched how much cost, how much risk, and how
          much time patients absorb for a diagnostic decision that should be
          simple.
        </p>
        <p>
          When I joined Antler Malaysia&rsquo;s MY2 cohort in March 2024, I
          told my coach in the first week that I wanted to build something in
          preventive healthcare. My first idea was rejected repeatedly — a
          symptom-logging app for early warning signs. Antler&rsquo;s feedback
          was sharp and correct: behavior-dependent, hard to scale, hard to
          monetize. I had to let it go.
        </p>
        <p>
          By week two I was working with Raheel Zubairi, who became my
          co-founder. We iterated through several more directions, most of
          them too broad. The turning point was narrowing radiology down to a
          single, honest question: <em>which specific scan causes the most
          friction today, and can we remove that friction without making the
          diagnosis worse?</em>
        </p>
        <p>
          That question led us to contrast-enhanced brain MRI, and to Amr
          Mohammad &mdash; a clinical oncologist with published research in
          exactly this domain. I asked Antler to allow him to join as our
          third co-founder despite being external to the program. They
          agreed. We made it to the investment finals.
        </p>
        <p>
          We didn&rsquo;t get selected for investment. The committee&rsquo;s
          comment was that the market wasn&rsquo;t big enough &mdash; and
          that&rsquo;s a message worth sitting with honestly. Either
          they&rsquo;re right, or we didn&rsquo;t deliver the message clearly
          enough. We decided we hadn&rsquo;t. Eighteen months later, the data
          supports that call.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The barrier</h2>
        <p>
          Gadolinium-based contrast is injected into patients before a brain
          MRI so that tumors and lesions become visible on the scan. It works.
          It&rsquo;s also a rare-earth metal that requires a functioning
          kidney, costs substantially more than the base scan, and leaves
          residual deposits in brain tissue that recent research is only
          beginning to characterize.
        </p>
        <p>
          The patient journey looks like this: a baseline MRI, then a kidney
          function test, then a prescription for the Gadolinium injection,
          then a wait, then a second scan. About two hours total, under good
          conditions. Many patients can&rsquo;t have the injection at all
          &mdash; an estimated 13.4% of the global population has some form
          of chronic kidney disease. Others simply can&rsquo;t afford the
          60% premium on the base scan cost.
        </p>
        <p>
          Gadolinium contrast is roughly a 1.5 billion USD per year market,
          with six major producers. The injection is the default of neuro-
          radiology because nothing better existed. That&rsquo;s where we
          enter.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">What we&rsquo;re building</h2>
        <p>
          Pixelence uses a generative model (U-Net with attention blocks, as
          described in our filed patent) to synthesize contrast-enhanced brain
          images from standard, non-contrast MRI sequences. The model takes
          T1, T2, and FLAIR inputs that every modern MRI already produces,
          and generates the equivalent contrast-enhanced view &mdash; plus a
          mask highlighting the region of interest for the radiologist.
        </p>
        <p>
          The result, measured on our clinical trial: in under 30 seconds, a
          radiologist receives a contrast-equivalent view with zero patient
          side effects, no second scan, and roughly 60% cost reduction at the
          scan level. For the hospital, it&rsquo;s 2x the effective ROI on an
          MRI machine they already own.
        </p>
        <p>
          As CPO, my work has covered the product end-to-end: the DICOM
          processing pipeline, the annotation strategy with our clinical
          partners, the evaluation protocol across three hospital sites, the
          hospital-side web interface and API, and the privacy architecture
          that lets us work with real patient data under regulated constraints.
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">Where it stands</h2>
        <p>
          <strong>Peer-reviewed validation.</strong> Our clinical study of
          156 brain tumor patients &mdash; 40 doctor reviews, peer-reviewed
          by 9 researchers, conducted with Sohag Medical Centre in Egypt
          &mdash; was published in the{' '}
          <a
            href="https://ascopubs.org/doi/full/10.1200/CCI.23.00266"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Journal of Clinical Oncology</em>
          </a>
          .
        </p>
        <p>
          <strong>Active clinical trials</strong> at NUHS, IDC, and UPM in
          Malaysia. Registered with Malaysia&rsquo;s National Medical Research
          Register (NMRR). Training data partnerships covering 350K patient
          records (Elborg Radiology Centre) and 17M EMR records (Islamabad
          Diagnostic Centre).
        </p>
        <p>
          <strong>Funding.</strong> RM 200K raised to date (Cradle CIP Spark
          Grant and WatchTower VC). European Innovation Council Grant Phase 1
          approved, with a &euro;2.5M Phase 2 target. Currently raising a
          USD 800K round against a clear milestone plan: CE and FDA pathway,
          95% accuracy target, and sales infrastructure.
        </p>
        <p>
          <strong>Recognition.</strong> 2nd place at Eureka IIEC 2025 in
          Zagreb (60+ global applicants). Top 3 at Malaysia Startup World Cup
          2024. Finalist at Startup World Cup West Malaysia 2025. Top 6 at
          Selangor Deep Tech Xccelerator. Top 3 at NEXEA Selangor Life
          Sciences Accelerator. Selected for the Cyberview Living Lab
          Accelerator Cohort 19.
        </p>
        <p>
          <strong>Recent milestones.</strong> Patent filed in March 2026 for
          our Gadolinium-free contrast MRI synthesis. Exhibited and pitched at
          SusHi Tech Tokyo 2026. Selected to pitch at the 2026 SelectUSA
          Investment Summit in Maryland.{' '}
          <a
            href="https://www.pixelenceai.com/news.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full news timeline &rarr;
          </a>
        </p>
      </section>

      <section className="case-section">
        <h2 className="case-section-title">The team</h2>
        <p>
          I came into Antler with the conviction that preventive healthcare
          was where I wanted to build. The brain MRI direction, the
          co-founder search, the decision to bring in a clinical oncologist
          as our third founder &mdash; those were the earliest moves. But
          Pixelence as a company is a three-person effort, and it has been
          from the start.
        </p>
        <p>
          Raheel Zubairi leads as CEO. His relentless push &mdash; through
          the fundraising rounds, the grant applications, the accelerator
          cycles, the international pitches &mdash; is a large part of why
          Pixelence is where it is today. His background spans fintech,
          governance, and digital transformation. Amr Mohammad leads as
          CTO and CMO. He&rsquo;s a clinical oncologist and data scientist,
          formerly Ex-Radiotherapy Chief in Egypt, currently with the NHS,
          and his published research in this specific domain was the reason
          the technology had a foundation to stand on from day one.
        </p>
        <p>
          I lead product as CPO. We&rsquo;re supported by clinical partners
          in Malaysia (Khairil Aswad Othman as Principal Investigator,
          Dayang Jok as Clinical Research Consultant) and a four-person
          advisory board including a site chief radiologist, two MDs, and a
          PhD in AI/ML and NLP.
        </p>
      </section>

      <section className="case-section case-reflection">
        <h2 className="case-section-title">What I learned</h2>
        <p>
          The technology is the smallest part of this.
        </p>
        <p>
          Healthcare products live or die on three things that have nothing to
          do with the model: whether a clinician trusts the output, whether
          the hospital&rsquo;s workflow can absorb it, and whether the
          regulator lets you say what you want to say about it. We spent
          almost a year earning those three things before a single paying
          customer was plausible. I was impatient about it. I was wrong to be
          impatient about it. The pace is the pace because the stakes are the
          stakes.
        </p>
        <p>
          The other thing I learned: a rejection from an investment committee
          is information, not a verdict. The committee was right about the
          framing we delivered, and the market itself has proven deeper than
          our pitch captured at the time. We updated the framing and kept
          going.
        </p>
      </section>

      <footer className="case-footer">
        <Link href="/work" className="back-link">
          &larr; All work
        </Link>
        <a
          href="https://www.pixelenceai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-link"
        >
          Visit pixelenceai.com &rarr;
        </a>
      </footer>

    </div>
  );
}

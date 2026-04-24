'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.beat').forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>
            I build so the next person who couldn&rsquo;t get in{' '}
            <span className="em">&mdash;</span> gets in.
          </h1>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      <div className="content">
        <section className="beat beat-mission">
          <p>
            A credit score locks millions out of a financial life they should
            already have.
          </p>
          <p>
            A brain MRI that screens for tumors still requires a contrast
            injection many patients can&rsquo;t have, can&rsquo;t tolerate, or
            can&rsquo;t afford.
          </p>
          <p>I build the products that close gaps like these.</p>
        </section>

        <section className="beat beat-bridge">
          <p>
            Four countries. Twelve years. Here&rsquo;s what that&rsquo;s looked
            like in practice.
          </p>
        </section>

        <div className="section-mark">· · ·</div>

        <section className="beat beat-proof">
          <div className="project">
            <p>
              <span className="project-name">
                I-SCORE, Egypt&rsquo;s national credit bureau.
              </span>{' '}
              I was the first technical PM the organization ever hired. Shipped
              four application versions used across the Central Bank ecosystem.
              Inherited no playbook, no mentor, no product function. Built all
              three.
            </p>
          </div>
          <div className="project">
            <p>
              <span className="project-name">Skip Pay.</span> Co-founded a
              contactless payment app in Egypt, for people who were navigating
              their finances blind. Ran 300+ customer interviews. Orange Corners
              finalist. We didn&rsquo;t secure the funding or the license. I
              learned when to stop.
            </p>
          </div>
          <div className="project">
            <p>
              <span className="project-name">Tapway.</span> Joined as the
              founding product lead one month after a cardiac event, before I
              had health insurance in Malaysia. Company was losing money. No
              CTO. No technical lead. A product that had been stuck for over a
              year. Eighteen months later: RM500K profit. Built an
              edge-deployable computer vision model builder, shipped to AWS
              Marketplace as Malaysia&rsquo;s first CV ISV. Deployments at
              Changi Airport, Penang Port, Petronas, and Sime Darby.
            </p>
          </div>
          <div className="project">
            <p>
              <span className="project-name">Pixelence.</span> Co-founded the
              world&rsquo;s first non-contrast AI solution for brain MRI
              &mdash; GAN-based contrast synthesis on standard scans. Published
              peer-reviewed research in the Journal of Clinical Oncology. Active
              clinical trials in Malaysia. RM200K raised. European Innovation
              Council Grant Phase 1 approved. 2nd place at Eureka IIEC 2025 in
              Zagreb.
            </p>
          </div>
        </section>

        <div className="section-mark">· · ·</div>

        <section className="beat beat-people">
          <h2 className="section-opener">
            People first, <span className="em">always.</span>
          </h2>
          <p>
            I studied Computing &amp; Information Technology, but I came into
            product through customer service and technical support first. Which
            means I understand builders because I was one, and I know what a
            bad product feels like from the user side. Engineers trust me
            quickly. So do the people on either side of them.
          </p>
          <p>
            I hire for what someone could become, not just what they&rsquo;ve
            already done. I&rsquo;ve defended hires when leadership doubted
            them, watched those same people become essential, and worked
            alongside many of them again across different companies and stages.
          </p>
          <p>
            Products ship because teams do. That&rsquo;s the proof I trust.
          </p>
        </section>

        <section className="beat beat-fit">
          <h2 className="section-opener">
            I&rsquo;m most useful to you <span className="em">if &mdash;</span>
          </h2>
          <div className="list-item">
            You have an AI or compliance wedge and haven&rsquo;t hired a
            founding PM yet.
          </div>
          <div className="list-item">
            Your technical team is strong but product direction keeps slipping.
          </div>
          <div className="list-item">
            You&rsquo;re stuck somewhere between 0 and 1, and the obvious moves
            haven&rsquo;t worked.
          </div>
          <div className="list-item">
            You&rsquo;re at scale and you want someone who&rsquo;ll drive the
            next wave of AI and innovation into production &mdash; past the
            usual limits, not inside them.
          </div>
          <div className="list-item">
            You&rsquo;re shaping the next venture &mdash; as a founder,
            investor, or executive &mdash; and you want a partner in the room
            who&rsquo;s shipped from zero, not just advised it.
          </div>
          <div className="list-item">
            You know what you want to build. You just don&rsquo;t know how to
            get a team from here to there.
          </div>
          <p className="closer">
            I&rsquo;m not the right fit if the role is mostly maintaining a
            stable product line on a fixed cadence. That&rsquo;s a different
            kind of PM work, and not where I do my best.
          </p>
        </section>

        <div className="section-mark">· · ·</div>

        <section className="beat beat-personal">
          <figure className="photo-block">
            <Image
              src="/hamza-cypress.jpg"
              alt="Hamza on a tree-lined path"
              width={700}
              height={821}
              priority={false}
            />
          </figure>
          <p>
            The photo on my LinkedIn was taken less than 24 hours after my
            heart stopped. Not metaphorically. It actually stopped. The doctors
            shocked it back, and I&rsquo;ve been living differently since
            &mdash; less performative, more intentional. A second event a few
            years later reminded me that time isn&rsquo;t something you manage.
            It&rsquo;s something you align with, or get flattened by.
          </p>
          <p>
            It&rsquo;s not a story I lead with. But it&rsquo;s why I build what
            I build, and why I don&rsquo;t flinch when the room is broken.
          </p>
        </section>

        <section className="beat beat-deeper">
          <p>
            If you want to see the full work &rarr;{' '}
            <a href="/work">Work</a>
          </p>
          <p>
            If you want the CV &rarr; <a href="/resume">Resume</a>
          </p>
        </section>

        <section className="beat beat-contact">
          <p>
            If any of this made you want to talk &mdash;{' '}
            <a href="mailto:info@hamzaelessawy.com" className="contact-link">
              info@hamzaelessawy.com
            </a>{' '}
            ·{' '}
            <a href="https://wa.me/37065508570" className="contact-link">
              WhatsApp
            </a>
          </p>
        </section>
      </div>
    </>
  );
}

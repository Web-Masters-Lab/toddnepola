'use client'
/* AboutPage.tsx — dedicated "About Todd Nepola" page (from page-about.jsx) */
import { A, Eyebrow } from '../atoms'
import { Stats } from '../Hero'
import { ABOUT_ROWS, AboutRows } from '../About'
import { PageHero, CTABand } from '../PageShell'

const VALUES = [
  { k: '01', h: 'Keep It Real', p: 'No get-rich-quick schemes. Plain, practical advice from real deals — the substance behind the track record, not the hype around it.' },
  { k: '02', h: 'Give It Back', p: 'Every dollar of net proceeds from the book goes to charity. Success is measured in what gets returned to the community, not just what gets closed.' },
  { k: '03', h: 'Stay Disciplined', p: 'The mindset that finishes an Ironman is the mindset that underwrites a property — preparation, patience, and the right questions, every time.' },
]

const MILESTONES = [
  { y: '1972', h: 'Born In Staten Island, New York', p: 'The next chapter in a family that had already spent three generations building and investing in real estate.' },
  { y: '1986', h: 'Move To Miami, FL', p: 'The Nepola family relocates to South Florida — the market Todd would go on to know better than anyone.' },
  { y: '1994', h: 'Graduated University Of South Florida', p: 'Earned his degree and set off toward investment banking before the family trade pulled him back.' },
  { y: '1998', h: 'Purchased First Commercial Property', p: 'Put theory into practice with his first commercial acquisition — the start of a hands-on track record.' },
  { y: '1999', h: 'TN Property Management Founded', p: 'Built the management arm that would let him buy, build, lease and operate his own portfolio end to end.' },
  { y: '2002', h: 'Rebranded To Current Capital Real Estate Group', p: 'The firm takes the name it carries today, focused on retail and industrial property across Florida.' },
  { y: '2022', h: 'Top Leasing Firm In Broward County', p: 'Current Capital Real Estate Group is recognized as the top leasing firm in Broward County.' },
  { y: '2025', h: 'CoStar Power Broker, Again', p: 'Named a CoStar Power Broker once more at CCM — a repeat honor for top transaction volume in the market.' },
]

export function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About · The Founder"
        title={<>Todd <em>Nepola</em></>}
        sub="Commercial real estate investor, manager and developer of 25+ years — founder of Current Capital Real Estate Group, author, philanthropist, and Florida Ironman finisher."
        bg="downtown-background.png"
      />

      {/* ---- bio split ---- */}
      <section className="section">
        <div className="container">
          <div className="bio-split">
            <div className="bio-figure">
              <div className="frame" style={{ backgroundImage: `url(${A}todd-headshot.png)` }} />
              <div className="stamp">
                <div className="n">25+</div>
                <div className="t">Years as an investor, manager &amp; developer</div>
              </div>
            </div>
            <div className="bio-copy">
              <Eyebrow>The Operator</Eyebrow>
              <h2 className="h-2" style={{ marginTop: 14 }}>Todd&apos;s Story</h2>
              <p className="lede muted" style={{ marginBottom: 24 }}>
                As President and founder of <span className="em">Current Capital Group</span>, Mr. Nepola is
                responsible for the company&apos;s vision and long-term strategic plans.
              </p>
              <p>
                Todd follows three generations of commercial real estate investors and developers. His
                paternal great-grandfather came to Manhattan from Italy in 1899 and spent over 40 years as a
                superintendent — responsible for building the Holland Tunnel and several of Manhattan&apos;s subway
                lines. His grandfather and father were real estate investors and developers as well.
              </p>
              <p>
                Mr. Nepola graduated from the University of South Florida in 1994. While pursuing a career in
                investment banking, he followed in his family&apos;s footsteps and began acquiring and developing
                properties for himself. After a decade of buying, building, leasing and managing, Todd opened
                his own firm — with properties throughout Florida and a second office in Port St. Lucie.
              </p>
              <p>
                A multiple-time winner of CoStar&apos;s Power Broker award and a member of the International Council
                of Shopping Centers (ICSC), he brings over two decades of hands-on experience. Todd resides in
                Miami with his wife Alexia and their two daughters, and is an active triathlete and Ironman finisher.
              </p>
              <div className="bio-sign">Todd T. Nepola</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- by the numbers ---- */}
      <Stats />

      {/* ---- the three pursuits ---- */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Eyebrow center>More Than One Pursuit</Eyebrow>
            <h2 className="h-2" style={{ marginTop: 14 }}>Investor. Author. Ironman.</h2>
            <p>The same discipline that closes nine-figure deals also finishes marathons and gives every book dollar to charity.</p>
          </div>
          <AboutRows rows={ABOUT_ROWS} />
        </div>
      </section>

      {/* ---- principles ---- */}
      <section className="section section-tight" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <div className="sec-head">
            <Eyebrow center>What Guides The Work</Eyebrow>
            <h2 className="h-2" style={{ marginTop: 14 }}>Credible. Grounded. Premium.</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.k}>
                <div className="vk">{v.k}</div>
                <h3>{v.h}</h3>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- milestones ---- */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Eyebrow center>The Track Record</Eyebrow>
            <h2 className="h-2" style={{ marginTop: 14 }}>Milestones</h2>
          </div>
          <div className="timeline">
            {MILESTONES.map((m) => (
              <div className="tl-row" key={m.h}>
                <div className="tl-year">{m.y}</div>
                <div className="tl-body">
                  <h4>{m.h}</h4>
                  <p>{m.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Keep It Real"
        title="Read The Book. Ask The Right Questions."
        text="Todd's playbook for commercial real estate — the questions that should be asked, and then answered."
        bg="skyline-background.png"
        primary={{ label: 'Order the Book', order: true }}
        secondary={{ label: 'Get In Touch', href: '/contact' }}
      />
    </main>
  )
}

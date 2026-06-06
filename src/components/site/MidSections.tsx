'use client'
/* MidSections.tsx — quick links, the book, current capital, awards
   (from the design bundle's midsections.jsx) */
import Link from 'next/link'
import { A, Icon, Eyebrow } from './atoms'
import { useOrder } from './Shell'

const QL = [
  { title: 'Case Studies', img: A + 'investment-property.jpg', tint: 'rgba(28,33,40,.78)', href: '/portfolio', span: false },
  { title: 'Order My Book', img: A + 'office-building.png', tint: 'rgba(255,255,255,.86)', href: '/book', dark: true, span: false },
  { title: 'Free Chapter', img: A + 'downtown-background.png', tint: 'rgba(10,39,141,.86)', href: '/book', span: false },
  { title: 'Podcasts & Press', img: A + 'skyline-background.png', tint: 'rgba(10,39,141,.84)', href: '/media', span: false },
  { title: 'Current Capital Group', img: A + 'hq.jpg', tint: 'rgba(4,18,63,.8)', href: 'https://www.currentcapitalgroup.com/', external: true, span: true },
]

export function QuickLinks() {
  return (
    <section className="section">
      <div className="container">
        <div className="ql-head">
          <Eyebrow center>Explore</Eyebrow>
          <h2 className="h-2" style={{ marginTop: 14 }}>Where Do You Want to Start?</h2>
        </div>
        <div className="ql-grid">
          {QL.map((q) => {
            const inner = (
              <>
                <div className="ql-bg" style={{ backgroundImage: `url(${q.img})` }} />
                <div className="ql-tint" style={{ background: q.tint }} />
                <h3>{q.title} <span className="arr">&rarr;</span></h3>
              </>
            )
            const className = 'ql' + (q.span ? ' span2' : '')
            const style = q.dark ? { color: 'var(--navy-800)' } : undefined
            return q.external ? (
              <a className={className} key={q.title} href={q.href} target="_blank" rel="noreferrer" style={style}>{inner}</a>
            ) : (
              <Link className={className} key={q.title} href={q.href} style={style}>{inner}</Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function BookSection() {
  const onOrder = useOrder()
  return (
    <section className="section section-navy-deep" id="book">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 54 }}>
          <Eyebrow dark center>The Book</Eyebrow>
          <h2 className="h-2 on-dark" style={{ marginTop: 14 }}>Keeping It Real on Commercial Real Estate</h2>
        </div>
        <div className="book-wrap">
          <div className="book-stage">
            <img src={A + 'book.png'} alt="Keeping It Real on Commercial Real Estate by Todd Nepola" />
          </div>
          <div className="book-copy">
            <p className="lead on-dark">
              Todd Nepola&apos;s highly anticipated book answers all the questions investors actually need answered &mdash;
              from a seasoned veteran with over 25 years as an investor, manager and developer.
            </p>
            <p className="lead on-dark">
              Over the years, would-be investors kept asking Todd the wrong questions. This book contains the
              questions that <em>should</em> be asked &mdash; and then answers them, in plain, easy-to-follow language.
            </p>
            <div className="actions">
              <button className="btn btn-gold" onClick={onOrder}>Get a Copy <Icon.arrow /></button>
              <Link className="btn btn-ghost-light" href="/book">Free Chapter</Link>
            </div>
            <div className="charity-flag" style={{ color: 'var(--gold-400)' }}>
              <span className="dot" /> All net proceeds are donated to charity
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CurrentCapital() {
  return (
    <section className="section">
      <div className="container">
        <div className="cc-wrap">
          <div className="cc-scrim" />
          <div className="cc-panel">
            <img className="cc-logo" src={A + 'ccreg-logo.png'} alt="Current Capital Real Estate Group" />
            <Eyebrow dark>The Company</Eyebrow>
            <h2 className="h-2 on-dark" style={{ marginTop: 12 }}>Current Capital<br />Real Estate Group</h2>
            <p style={{ marginTop: 18 }}>
              With a primary focus on retail and industrial properties across Florida, Current Capital
              distinguishes itself through boutique-style, best-in-class service &mdash; consistently ranked
              among the top firms in the region.
            </p>
            <p>
              Over two decades of expertise, integrity, and results in property management, development,
              and leasing across the South Florida landscape.
            </p>
            <a className="btn btn-invert" href="https://www.currentcapitalgroup.com/" target="_blank" rel="noreferrer" style={{ marginTop: 14 }}>
              Visit the Website <Icon.arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Awards() {
  return (
    <section className="section section-navy">
      <div className="container">
        <div className="award-wrap">
          <div className="award-badge">
            <img src={A + 'costar-power-broker-2025.png'} alt="CoStar Power Broker 2025" />
          </div>
          <div className="award-copy">
            <span className="pill">2025 Winner</span>
            <h2 className="h-2 on-dark">CoStar Power Broker Award</h2>
            <p style={{ marginTop: 16 }}>
              Todd Nepola is a multiple-time winner of CoStar&apos;s prestigious Power Broker Award, most recently
              at CCM in 2025 &mdash; an annual honor for the top commercial brokers who closed the highest
              transaction volumes in their markets.
            </p>
            <p>
              The recognition is a testament to Current Capital&apos;s consistent performance and Todd&apos;s dedication
              to delivering exceptional results across South Florida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

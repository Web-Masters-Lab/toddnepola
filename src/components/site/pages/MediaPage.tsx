'use client'
/* MediaPage.tsx — dedicated "Media" page: news articles + podcast appearances
   (from page-media.jsx) */
import Link from 'next/link'
import { A, Icon, Eyebrow } from '../atoms'
import { PageHero, CTABand } from '../PageShell'

const FEATURE = {
  tag: 'Featured',
  date: 'Dec 21, 2022',
  src: 'The Real Deal · Francisco Alvarado',
  title: 'Todd Nepola pays $24M for Lauderdale Lakes shopping centers',
  blurb: 'One of several portfolio-defining South Florida retail plays reported by The Real Deal — Current Capital deepens its footprint with a pair of Lauderdale Lakes centers.',
  img: A + 'investment-property.jpg',
  href: 'https://therealdeal.com/miami/2022/12/21/todd-nepola-pays-24m-for-lauderdale-lakes-shopping-centers/',
}

const ARTICLES = [
  { date: 'Apr 13, 2022', src: 'The Real Deal', title: 'Todd Nepola buys a pair of Palm Beach County shopping centers for $13M', img: A + 'shopping-plaza.jpg', href: 'https://therealdeal.com/miami/2022/04/13/todd-nepola-buys-a-pair-of-palm-beach-county-shopping-centers-for-13m/' },
  { date: 'Feb 10, 2023', src: 'The Real Deal', title: 'South Florida commercial deals go cold', img: A + 'downtown-background.png', href: 'https://therealdeal.com/miami/2023/02/10/south-florida-commercial-deals-go-cold/' },
  { date: 'Sep 23, 2021', src: 'The Real Deal', title: 'Investor picks up Margate shopping center for $11M', img: A + 'office-building.png', href: 'https://therealdeal.com/miami/2021/09/23/investor-picks-up-margate-shopping-center-for-11m/' },
  { date: 'Jun 15, 2020', src: 'The Real Deal', title: 'Parking lot owner sells retail center in Lauderhill for $13M', img: A + 'skyline-background.png', href: 'https://therealdeal.com/miami/2020/06/15/miami-beach-parking-lot-mogul-sells-retail-center-in-lauderhill-for-13m/' },
  { date: 'CoStar', src: 'CoStar News', title: 'Todd Nepola bets on aging South Florida retail center', img: A + 'hq.jpg', href: 'https://product.costar.com/home/news/2139466768' },
  { date: 'CoStar', src: 'CoStar News', title: 'Todd Nepola buys Promenade at Inverrary, plans upgrades from ‘head to toe’', img: A + 'downtown-background.png', href: 'https://product.costar.com/home/news/2139466768' },
]

const PODCASTS = [
  { show: 'Left Field Investors', host: 'Jim Pfeifer', ep: 'Industrial & retail — investing in the niches', href: 'https://www.leftfieldinvestors.com/industrial-and-retail-real-estate-investing-in-the-niches-with-todd-nepola/' },
  { show: 'School of Hard Knocks', host: 'YouTube', ep: 'He turned $100k into $25M', href: 'https://www.youtube.com/watch?v=lAOliWexJgo' },
  { show: 'Rod Khleif Podcast', host: 'Rod Khleif', ep: 'Making money while you sleep', href: 'https://rodkhleif.com/podcasts/making-money-while-you-sleep/' },
  { show: 'Best Ever CRE', host: 'Ash Patel', ep: '10 expert tips on breaking into industrial & retail', href: 'https://www.bestevercre.com/podcast/jf2771-10-expert-tips-on-breaking-into-industrial-and-retail-ft-todd-nepola' },
  { show: 'Street Smart Success', host: 'Podcast', ep: 'Great retail centers are as relevant as ever', href: 'https://www.streetsmartsuccess.com/ToddNepola/' },
  { show: 'Kevin Bupp', host: 'Real Estate Investing', ep: 'Finding retail opportunities in today’s market', href: 'https://kevinbupp.com/podcast/450-finding-retail-opportunities-in-todays-market/' },
  { show: 'School of Hard Knocks', host: 'YouTube', ep: 'From $0 to $100+ million real estate empire', href: 'https://www.youtube.com/watch?v=JfIfLMXz7eU' },
  { show: 'CRE PRO Network', host: 'Podcast', ep: 'How to start investing in commercial real estate', href: 'https://www.youtube.com/watch?v=ObKMdL-K4Cw' },
]

export function MediaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Press · News · Podcasts"
        title={<>In The <em>News</em></>}
        sub="Deals, awards, and appearances — where Todd Nepola and Current Capital Real Estate Group show up in the press and on the mic."
        bg="skyline-background.png"
      />

      {/* ---- featured article ---- */}
      <section className="section" id="news">
        <div className="container">
          <a className="feature-article" href={FEATURE.href} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
            <div className="fa-img" style={{ backgroundImage: `url(${FEATURE.img})` }} />
            <div className="fa-body">
              <span className="fa-tag">{FEATURE.tag}</span>
              <div className="fa-meta">{FEATURE.date} · {FEATURE.src}</div>
              <h2>{FEATURE.title}</h2>
              <p>{FEATURE.blurb}</p>
              <span className="read">Read the story <Icon.arrow /></span>
            </div>
          </a>
        </div>
      </section>

      {/* ---- article grid ---- */}
      <section className="section section-navy-deep" style={{ background: 'linear-gradient(180deg,var(--navy-800),var(--navy-900))' }}>
        <div className="container">
          <div className="press-head">
            <Eyebrow dark center>News Articles</Eyebrow>
            <h2 className="h-2 on-dark" style={{ marginTop: 14 }}>Coverage</h2>
          </div>
          <div className="press-grid">
            {ARTICLES.map((p) => (
              <a className="press-card" key={p.title} href={p.href} target="_blank" rel="noreferrer">
                <div className="pc-bg" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="meta">{p.date}</div>
                <h3>{p.title}</h3>
                <div className="src">{p.src} &rarr;</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- podcasts & appearances ---- */}
      <section className="section" id="podcasts">
        <div className="container">
          <div className="sec-head">
            <div className="divider-tick center" />
            <Eyebrow center>On The Mic</Eyebrow>
            <h2 className="h-2" style={{ marginTop: 14 }}>Podcasts &amp; Appearances</h2>
          </div>
          <div className="pod-list" style={{ maxWidth: 920, margin: '0 auto' }}>
            {PODCASTS.map((p, i) => (
              <a className="pod-row" key={p.ep} href={p.href} target="_blank" rel="noreferrer">
                <div className="pod-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="pod-main">
                  <h4>{p.ep}</h4>
                  <div className="pm">{p.show} · {p.host}</div>
                </div>
                <span className="pod-go">Listen <Icon.arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- media kit ---- */}
      <section className="section section-tight" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <div className="mediakit">
            <div className="mk-copy">
              <Eyebrow dark>For Press</Eyebrow>
              <h2 className="h-2" style={{ marginTop: 14 }}>Media Inquiries &amp; Press Kit</h2>
              <p>
                Writing about South Florida commercial real estate, the book, or booking Todd for a podcast
                or panel? Reach out and the team will send bios, headshots, and the latest on Current Capital.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-gold" href="/contact">Contact the Team <Icon.arrow /></Link>
              </div>
            </div>
            <div className="mk-img" style={{ backgroundImage: `url(${A}todd-profile.jpg)`, backgroundPosition: '50% 0%' }} />
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Follow Along"
        title="Keep Up With Todd"
        text="New deals, book news, and behind-the-scenes from one of South Florida's most recognized CRE investors."
        bg="downtown-background.png"
        primary={{ label: 'Read About Todd', href: '/about' }}
        secondary={{ label: 'Get In Touch', href: '/contact' }}
      />
    </main>
  )
}

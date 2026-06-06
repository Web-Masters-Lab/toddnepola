'use client'
/* PortfolioPage.tsx — dedicated "Portfolio" page (from page-portfolio.jsx) */
import { PageHero, CTABand } from '../PageShell'

const P = '/assets/portfolio/'

type Stat = { k: string; v: string; gain?: boolean }
type Deal = { loc: string; addr: string; img: string; thumbs?: string[]; stats: Stat[]; body: string; flip: boolean }

const DEALS: Deal[] = [
  {
    loc: 'Lauderhill, Florida',
    addr: '4402–4678 N University Dr',
    img: P + 'lauderhill-1.jpg',
    thumbs: [P + 'lauderhill-2.jpg', P + 'lauderhill-3.jpg'],
    stats: [{ k: 'Under Contract', v: 'Jan 2020' }, { k: 'Purchase', v: '$12.75M' }, { k: 'Closed', v: 'Jun 2020' }],
    body: 'A property I got under contract in January 2020 for $12,750,000. Weeks later the Covid pandemic hit; everyone thought I should cancel, but I was still confident in the property and the location. We closed in June 2020, and after renovating the center we have been extremely happy with its performance — I would not sell it for double what I paid. Sometimes you have to take risks and be confident in your abilities.',
    flip: false,
  },
  {
    loc: 'Plantation, Florida',
    addr: '660 N State Road 7',
    img: P + 'plantation-1.jpg',
    stats: [{ k: 'Purchase 2014', v: '$1.165M' }, { k: 'Sold 2018', v: '$3.2M' }, { k: 'Return', v: '~2.7×', gain: true }],
    body: 'Purchased for $1,165,000 in October 2014 — a very outdated medical building with a lot of potential. We renovated the interior and exterior to make it more inviting, then landed tenants like Sherwin-Williams and Metro PCS along with several medical users. I sold the center in September 2018 for $3,200,000 and reinvested the proceeds into more properties.',
    flip: true,
  },
  {
    loc: 'Tamarac, Florida',
    addr: '6005–6091 University Drive Plaza',
    img: P + 'tamarac-1.jpg',
    stats: [{ k: 'Purchase 2018', v: '$3.0M' }, { k: 'Sold 2019', v: '$4.3M' }, { k: '18-Month Gain', v: '+45%', gain: true }],
    body: 'Purchased this 21,180-square-foot center in May 2018 for $3,000,000. At the time it was 75% vacant with Applebee’s as the only tenant. We leased most of the vacant space to Family Dollar and the rest to smaller users. In December 2019 we sold for $4,300,000 — nearly a 45% increase in just 18 months. With financing, our return on invested capital doubled. No improvements made; just brought the building to 100% occupancy.',
    flip: false,
  },
  {
    loc: 'Miramar, Florida',
    addr: '3500–3530 State Road 7',
    img: P + 'miramar-1.jpg',
    stats: [{ k: 'Purchase 2005', v: '$1.2M' }, { k: 'Status', v: 'Still Owned' }, { k: 'Strategy', v: 'No Money Down' }],
    body: 'A deal we purchased for $1,200,000 in 2005 — early in my career. After reading a book on how to buy properties with no money down, I found and closed here. It was two buildings, and yes, one was actually a set of Tee Pees. We received several hundred thousand dollars in grant funding from the city and completely renovated the property. We still own it today, and it has been a thriving deal for us.',
    flip: true,
  },
]

export function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio · South Florida"
        title={<>The <em>Deals</em></>}
        sub="Real retail and industrial properties, bought, built, leased and managed by Todd — told in his own words, with the numbers behind each play."
        bg="shopping-plaza.jpg"
      />

      <section className="section">
        <div className="container">
          {DEALS.map((d, i) => (
            <div className={'deal' + (d.flip ? ' flip' : '')} key={d.addr}>
              <div className="deal-figure">
                <div className="dimg" style={{ backgroundImage: `url(${d.img})` }} />
                <div className="dnum">{String(i + 1).padStart(2, '0')}</div>
                {d.thumbs && (
                  <div className="deal-thumbs">
                    {d.thumbs.map((t) => <div className="dt" key={t} style={{ backgroundImage: `url(${t})` }} />)}
                  </div>
                )}
              </div>
              <div className="deal-copy">
                <div className="dloc">{d.loc}</div>
                <h2>{d.addr}</h2>
                <div className="deal-stats">
                  {d.stats.map((s) => (
                    <div className={'deal-chip' + (s.gain ? ' gain' : '')} key={s.k}>
                      <span className="k">{s.k}</span>
                      <span className="v">{s.v}</span>
                    </div>
                  ))}
                </div>
                <p>{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="The Playbook Behind The Deals"
        title="It's All In The Book"
        text="The questions Todd asks before every acquisition — and the answers — in Keeping It Real on Commercial Real Estate."
        bg="downtown-background.png"
        primary={{ label: 'Order the Book', order: true }}
        secondary={{ label: 'About Todd', href: '/about' }}
      />
    </main>
  )
}

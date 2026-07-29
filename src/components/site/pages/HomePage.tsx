import Link from 'next/link'
import { css } from '../dc'
import { PageShell } from '../PageShell'
import { HomeHero } from '../HomeHero'
import { SpotlightGrid } from '../SpotlightGrid'

const BOOKBABY = 'https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate'

const bookParas = [
  'Todd Nepola’s highly anticipated book, "Keeping it Real on Commercial Real Estate" will answer all the questions investors need answered.',
  'Nepola is a seasoned veteran with over 25 year of experience as an investor, manager and developer.',
  'Over the years people have asked Todd questions about getting started in investing, and he realized that, many times, would-be investors ask the wrong questions, and do not focus in on what should be asked.',
  'You will find that Nepola‘s book contains all the questions that should be asked, and then answered!',
]

const bio = [
  {
    bg: "linear-gradient(rgba(8,31,111,.82),rgba(5,18,66,.9)),url('/images/downtown_background.webp')",
    bgPos: 'center',
    portrait: '/images/square.png',
    rotate: '0deg',
    paras: [
      'Todd Nepola is a distinguished figure known for his multifaceted accomplishments in the realms of real estate investment, property management, and philanthropy. Residing in the vibrant region of South Florida, Todd has made a significant impact on both the business and charitable communities.',
      'As the owner and founder of Current Capital Group, Todd Nepola has demonstrated an exceptional acumen for real estate investment and property management. His expertise and strategic vision have propelled his company to success, making it a prominent player in the real estate industry.',
    ],
    flip: false,
  },
  {
    bg: "linear-gradient(rgba(8,31,111,.82),rgba(5,18,66,.9)),url('/images/hero-bg-1.webp')",
    bgPos: 'center',
    portrait: '/images/contact-desktop.webp',
    rotate: '45deg',
    paras: [
      'Beyond his professional success, Todd is deeply committed to philanthropy. He wrote a book called "Keeping It Real on Commercial Real Estate," sharing his knowledge with others. What makes Todd stand out is that all the money from the book goes to charity, reflecting his dedication to giving back.',
      'In addition to his charitable work through literature, Todd Nepola is involved in various philanthropic areas. His commitment to making a positive impact extends to supporting numerous causes and organizations, showcasing his genuine desire to uplift those in need.',
    ],
    flip: true,
  },
  {
    bg: "linear-gradient(rgba(8,31,111,.82),rgba(5,18,66,.9)),url('/images/hero-bg-2.webp')",
    bgPos: 'center 40%',
    portrait: '/images/iron_man_todd_nepola.webp',
    rotate: '90deg',
    paras: [
      'Todd’s dedication to physical fitness is equally impressive. He has achieved remarkable feats as a finisher of the Florida Ironman and numerous other marathons and athletic events. His discipline, determination, and passion for athletics serve as an inspiration to others, emphasizing the importance of a healthy and active lifestyle.',
      'In summary, Todd Nepola is a remarkable individual whose achievements span real estate, philanthropy, and athletics. Through his company, philanthropic efforts, and athletic pursuits, Todd has made a positive impact on society and earned respect in his community and beyond.',
    ],
    flip: false,
  },
]

const podcasts = [
  { href: 'https://www.youtube.com/watch?v=JfIfLMXz7eU', img: '/images/podcasts/yt-JfIfLMXz7eU.webp', show: 'School of Hard Knocks', title: 'From $0 to $100+ Million Real Estate Empire' },
  { href: 'https://rodkhleif.com/podcasts/making-money-while-you-sleep/', img: '/images/podcasts/rod-khleif.webp', show: 'Rod Khleif', title: 'Making Money While You Sleep' },
  { href: 'https://www.youtube.com/watch?v=ObKMdL-K4Cw', img: '/images/podcasts/yt-ObKMdL-K4Cw.webp', show: 'Commercial Real Estate Pro Network', title: 'How to Start Investing in Commercial Real Estate' },
]

const articles = [
  { href: 'https://therealdeal.com/miami/2022/04/13/todd-nepola-buys-a-pair-of-palm-beach-county-shopping-centers-for-13m/', img: 'https://static.therealdeal.com/wp-content/uploads/2022/04/FT-Thumbnail_palm-beach-shopping-center.jpg', date: 'Apr 13, 2023', author: 'Francisco Alvarado', title: 'Buys two Palm Beach County shopping centers for $13M' },
  { href: 'https://therealdeal.com/miami/2023/02/10/south-florida-commercial-deals-go-cold/', img: 'https://static.therealdeal.com/wp-content/uploads/2023/02/2023-Starts-Slow-For-South-Florida-Commercial-Deals-1.jpg', date: 'Feb 10, 2023', author: 'Francisco Alvarado & Katherine Kallergis', title: 'South Florida commercial deals go cold' },
  { href: 'https://therealdeal.com/miami/2022/12/21/todd-nepola-pays-24m-for-lauderdale-lakes-shopping-centers/', img: 'https://static.therealdeal.com/wp-content/uploads/2022/12/FT-Thumbnail_Todd-Nepola.jpg', date: 'Feb 10, 2023', author: 'Francisco Alvarado', title: 'Todd Nepola pays $24M for Lauderdale Lakes shopping centers' },
]

const cardTitle = "margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:clamp(19px,1.7vw,23px);line-height:1.14;letter-spacing:-.2px;text-wrap:pretty;min-height:2.28em;"

export function HomePage() {
  return (
    <PageShell>
      <HomeHero />

      <SpotlightGrid />

      {/* BOOK */}
      <div style={css('display:flex;flex-direction:column;background:#fff;align-items:center;justify-content:center;padding:64px 0;')}>
        <h2 style={css("text-align:center;text-transform:uppercase;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#0A278D;margin:8px 0 48px;font-size:clamp(30px,5vw,48px);padding:0 20px;")}>Keeping it Real on Commercial Real Estate</h2>
        <div style={css('padding:0 16px;width:100%;max-width:1152px;')}>
          <div data-stack data-join data-book-stack style={css('display:flex;flex-wrap:wrap;border-radius:4px;background:#0A278D;background-image:linear-gradient(160deg,#2E74E0 0%,#0A278D 55%,#071c66 100%);')}>
            <div style={css('width:50%;padding-right:24px;')}>
              <div data-book-panel style={css('display:flex;border-radius:4px;height:600px;justify-content:center;align-items:center;background:transparent;')}>
                <img src="/images/book.webp" alt="Keeping it Real on Commercial Real Estate - Todd Nepola" style={css('object-fit:contain;filter:drop-shadow(0 30px 45px rgba(0,0,0,.55));width:min(300px,68vw);')} />
              </div>
            </div>
            <div style={css('width:50%;display:flex;flex-direction:column;')}>
              <div data-book-text style={css('border-radius:4px;padding:40px 0;background:transparent;color:#fff;display:flex;flex-direction:column;gap:16px;height:600px;justify-content:center;')}>
                {bookParas.map((p, i) => (
                  <p key={i} style={css('font-size:clamp(16px,1.7vw,20px);padding:0 clamp(20px,4vw,40px);margin:0;')}>{p}</p>
                ))}
                <div style={css('display:flex;align-items:center;justify-content:center;')}>
                  <a href={BOOKBABY} data-book-modal data-inv-cta style={css("background:#fff;color:#0A278D;font-family:'Roboto Condensed',sans-serif;font-weight:700;margin-top:16px;font-size:18px;padding:8px 32px;border-radius:8px;text-decoration:none;border:2px solid #fff;transition:all .25s;-webkit-tap-highlight-color:transparent;")}>GET A COPY</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CURRENT CAPITAL */}
      <div data-cc-band style={css("display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 0;background:#0A278D;background-image:linear-gradient(rgba(10,39,141,.72),rgba(10,39,141,.72)),url('/images/todds_building.webp');background-size:cover;background-position:center 30%;")}>
        <div data-grid2 data-cc-grid style={css('margin:0 auto;max-width:1152px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding:24px 20px 0;gap:0;width:100%;')}>
          <div style={css('border-radius:4px 0 0 4px;background:rgba(0,0,0,.6);display:grid;align-content:center;justify-items:center;')}>
            <div style={css('display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;padding:48px clamp(24px,3vw,40px);')}>
              {/* Was alt="Headquarters Image", which describes neither the image
                  nor its purpose — it is the Current Capital logo mark, and the
                  two lines directly below already read out the company name, so
                  the mark is decorative here. */}
              <img src="/images/CCREG.png" alt="" width={256} height={256} style={css('object-fit:contain;width:min(224px,55vw);')} />
              <div style={css('display:flex;flex-direction:column;align-items:center;gap:6px;')}>
                <p style={css("font-family:'Copperplate','Copperplate Gothic Light',serif;color:#fff;font-size:clamp(18px,2.2vw,23px);letter-spacing:.06em;line-height:1.15;margin:0;text-align:center;")}>CURRENT CAPITAL</p>
                <p style={css("font-family:'Copperplate','Copperplate Gothic Light',serif;color:#d1d5db;font-size:clamp(18px,2.2vw,23px);letter-spacing:.06em;line-height:1.15;margin:0;text-align:center;")}>REAL ESTATE GROUP</p>
              </div>
            </div>
          </div>
          <div style={css('border-radius:0 4px 4px 0;background:rgba(0,0,0,.6);display:flex;flex-direction:column;justify-content:center;gap:20px;padding:48px 0;')}>
            <p style={css('padding:0 clamp(24px,3.5vw,44px);color:#fff;margin:0;text-align:left;line-height:1.6;font-size:clamp(16px,1.7vw,20px);')}>With a primary focus on the management and ownership of retail and industrial properties across the state of Florida, Current Capital distinguishes itself through its boutique-style, best-in-class service. The company&apos;s commitment to excellence is underscored by its consistent ranking as one of the top real estate firms in the region. They offer a personalized and client-centric approach, ensuring that their services meet the unique needs of their diverse portfolio of properties.</p>
            <p style={css('padding:0 clamp(24px,3.5vw,44px);color:#fff;margin:0;text-align:left;line-height:1.6;font-size:clamp(16px,1.7vw,20px);')}>With over two decades of experience, Current Capital Real Estate Group is a trusted partner in the South Florida real estate landscape, known for its expertise, integrity, and ability to deliver exceptional results in property management, development, leasing, other related real estate ventures.</p>
            <div style={css('display:flex;align-items:center;margin:8px 0 0;justify-content:center;')}>
              <a href="http://www.currentcapitalgroup.com/" data-inv-cta style={css("background:#fff;font-size:18px;font-family:'Roboto Condensed',sans-serif;font-weight:700;padding:8px 32px;text-align:center;border-radius:8px;text-decoration:none;color:#000;border:2px solid #fff;transition:all .25s;-webkit-tap-highlight-color:transparent;")}>VISIT THE WEBSITE</a>
            </div>
          </div>
        </div>
      </div>

      {/* INDUSTRY RECOGNITION */}
      <div style={css('display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 0;background:linear-gradient(135deg,#2E74E0 0%,#1B57CC 22%,#0A278D 50%,#0A278D 100%);')}>
        <h2 style={css("text-align:center;text-transform:uppercase;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#fff;margin:8px 0 40px;font-size:clamp(30px,5vw,48px);padding:0 20px;")}>Industry Recognition</h2>
        <div data-grid2 style={css('margin:0 auto;max-width:1152px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;align-items:center;padding:0 20px;')}>
          <div style={css('display:flex;justify-content:center;')}>
            <img src="/images/costar-power-broker-2025.webp" alt="CoStar Power Broker 2025 Top Broker Winner" width={280} height={280} style={css('width:min(280px,62vw);')} />
          </div>
          <div style={css('display:flex;flex-direction:column;gap:16px;')}>
            <h3 style={css("color:#fff;font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:clamp(22px,3vw,30px);margin:0;")}>CoStar Power Broker Award</h3>
            <p style={css('color:#d1d5db;font-size:clamp(16px,1.7vw,20px);margin:0;')}>Todd Nepola has been recognized as a multiple-time winner of CoStar&apos;s prestigious Power Broker Award, most recently at CCM in 2025. This annual honor is awarded to the top commercial real estate brokers and firms who closed the highest transaction volumes in their markets.</p>
            <p style={css('color:#d1d5db;font-size:clamp(16px,1.7vw,20px);margin:0;')}>The recognition is a testament to Current Capital&apos;s consistent performance and Todd&apos;s dedication to delivering exceptional results in commercial real estate across South Florida.</p>
          </div>
        </div>
      </div>

      {/* ABOUT TODD */}
      <section style={css('padding-bottom:64px;')}>
        <div style={css('display:flex;flex-direction:column;align-items:center;justify-content:center;margin:64px 0;padding:0 20px;')}>
          {/* "About" is an eyebrow, not a heading level, and "Todd Nepola" is a
              section heading — the page's <h1> is the hero. Demoting both keeps
              one h1 per page and removes the h2-then-h1 inversion. */}
          <p style={css("text-align:center;font-family:'Roboto Condensed',sans-serif;font-weight:700;margin:8px 0;font-size:clamp(22px,3vw,30px);color:#0A278D;text-transform:uppercase;")}>About</p>
          <h2 style={css("text-align:center;text-transform:uppercase;color:#0A278D;font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:clamp(44px,11vw,128px);margin:0;line-height:1;")}>Todd Nepola</h2>
        </div>
        {bio.map((b, i) => (
          <div key={i} style={css('max-width:1152px;padding:24px 20px 0;margin:0 auto;')}>
            <div data-stack data-join {...(b.flip ? { 'data-flip': true } : {})} style={css('display:flex;flex-wrap:wrap;background:#0A278D;border-radius:4px;')}>
              <div style={css('width:40%;padding-right:24px;')}>
                <div style={css(`border-radius:4px;height:400px;background-color:#0A278D;background-image:${b.bg};background-size:cover;background-position:${b.bgPos};display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;`)}>
                  <img src={b.portrait} alt="Todd Nepola" style={css('object-fit:contain;position:absolute;z-index:10;border-radius:9999px;width:min(185px,42vw);')} />
                  <img src="/images/background-blob-3.svg" alt="" style={css(`width:min(270px,60vw);transform:rotate(${b.rotate});`)} />
                </div>
              </div>
              <div style={css('width:60%;')}>
                <div style={css('border-radius:4px;padding:40px clamp(20px,4vw,40px);display:flex;flex-direction:column;justify-content:center;gap:20px;background:#0A278D;color:#d1d5db;height:400px;')}>
                  {b.paras.map((p, j) => (
                    <p key={j} style={css('font-size:clamp(16px,1.7vw,20px);line-height:1.6;margin:0;')}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PODCASTS */}
      <div style={css('background:#0A278D;padding:80px 0;')}>
        <div style={css('margin:0 auto;max-width:80rem;padding:0 32px;')}>
          <div style={css('display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px;')}>
            <div>
              <p style={css("margin:0 0 6px;font-family:'Roboto Condensed',sans-serif;font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:#8fa6ff;")}>Listen</p>
              <h2 style={css("margin:0;text-transform:uppercase;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#fff;font-size:clamp(30px,5vw,48px);line-height:1;")}>Podcast Appearances</h2>
            </div>
            <Link href="/media/podcasts" data-inv-cta style={css("background:#fff;color:#0A278D;font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:18px;padding:8px 32px;border-radius:8px;text-decoration:none;border:2px solid #fff;transition:all .25s;white-space:nowrap;-webkit-tap-highlight-color:transparent;")}>ALL EPISODES</Link>
          </div>
          <div data-grid3 style={css('margin:40px auto 0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;')}>
            {podcasts.map((p) => (
              <a key={p.href} href={p.href} data-lift style={css('display:flex;flex-direction:column;gap:16px;text-decoration:none;')}>
                <div style={css('position:relative;width:100%;aspect-ratio:16/9;border-radius:6px;overflow:hidden;background:#0a1638;box-shadow:0 30px 60px rgba(0,0,0,.45);')}>
                  <img src={p.img} alt="" style={css('width:100%;height:100%;object-fit:cover;display:block;')} />
                  <div style={css('position:absolute;inset:0;background:linear-gradient(to top,rgba(5,16,43,.75) 0%,rgba(5,16,43,.2) 50%,rgba(5,16,43,0) 100%);')} />
                  <div style={css('position:absolute;left:18px;bottom:18px;display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:9999px;background:rgba(5,16,43,.55);border:2px solid #fff;')}>
                    <div style={css('width:0;height:0;margin-left:4px;border-top:9px solid transparent;border-bottom:9px solid transparent;border-left:14px solid #fff;')} />
                  </div>
                </div>
                <div>
                  <div style={css("display:flex;flex-wrap:nowrap;align-items:center;gap:10px;min-width:0;font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#8fa6ff;margin-bottom:8px;")}>
                    <span style={css('min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;')}>{p.show}</span>
                  </div>
                  <h3 data-clamp2 style={css(cardTitle + 'color:#fff;')}><span data-clamp2>{p.title}</span></h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* POPULAR ARTICLES */}
      <div style={css('background:#fff;padding:80px 0;')}>
        <div style={css('margin:0 auto;max-width:80rem;padding:0 32px;')}>
          <div style={css('display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px;')}>
            <div>
              <p style={css("margin:0 0 6px;font-family:'Roboto Condensed',sans-serif;font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:#1B57CC;")}>Read</p>
              <h2 style={css("margin:0;text-transform:uppercase;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#0A278D;font-size:clamp(30px,5vw,48px);line-height:1;")}>Popular Articles</h2>
            </div>
            <Link href="/media/news" data-inv-cta-alt style={css("background:#0A278D;color:#fff;font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:18px;padding:8px 32px;border-radius:8px;text-decoration:none;border:2px solid #0A278D;transition:all .25s;white-space:nowrap;-webkit-tap-highlight-color:transparent;")}>ALL ARTICLES</Link>
          </div>
          <div data-grid3 style={css('margin:40px auto 0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;')}>
            {articles.map((a) => (
              <a key={a.href} href={a.href} data-lift style={css('display:flex;flex-direction:column;gap:16px;text-decoration:none;')}>
                <div style={css('position:relative;width:100%;aspect-ratio:3/2;border-radius:6px;overflow:hidden;background:#0a1638;box-shadow:0 18px 34px rgba(5,16,43,.2);')}>
                  <img src={a.img} alt="" style={css('width:100%;height:100%;object-fit:cover;display:block;')} />
                  <div style={css('position:absolute;inset:0;background:linear-gradient(to top,rgba(5,16,43,.6) 0%,rgba(5,16,43,.15) 45%,rgba(5,16,43,0) 100%);')} />
                </div>
                <div>
                  <div style={css("display:flex;flex-wrap:nowrap;align-items:center;gap:10px;min-width:0;font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;margin-bottom:8px;")}>
                    <time style={css('flex:none;')}>{a.date}</time>
                    <span style={css('color:#6b7280;flex:none;')} aria-hidden="true">/</span>
                    <span style={css('min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;')}>{a.author}</span>
                  </div>
                  <h3 data-clamp2 style={css(cardTitle + 'color:#0A278D;')}><span data-clamp2>{a.title}</span></h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}

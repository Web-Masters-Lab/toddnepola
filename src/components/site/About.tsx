/* About.tsx — About Todd (alternating panels) + Popular Articles
   (from the design bundle's about.jsx). ABOUT_ROWS / PRESS are reused by the
   dedicated About page. */
import { A, Eyebrow } from './atoms'

export type AboutRow = {
  tag: string
  title: string
  photo: string
  pf: string
  pfPos?: string
  body: string
  flip: boolean
}

export const ABOUT_ROWS: AboutRow[] = [
  {
    tag: 'Investor & Developer',
    title: 'A Distinguished Operator',
    photo: A + 'shopping-plaza.jpg',
    pf: A + 'todd-headshot.png',
    body: 'Todd Nepola is known for his accomplishments in real estate investment, property management, and philanthropy. As the owner and founder of Current Capital Group, his strategic vision has propelled the company into a prominent player across the South Florida market.',
    flip: false,
  },
  {
    tag: 'Author & Philanthropist',
    title: 'Giving It All Back',
    photo: A + 'downtown-background.png',
    pf: A + 'todd-profile.jpg',
    pfPos: '50% 0%',
    body: 'Beyond his professional success, Todd is deeply committed to philanthropy. He wrote "Keeping It Real on Commercial Real Estate" to share his knowledge — and donates every dollar of net proceeds to charity, reflecting his dedication to giving back.',
    flip: true,
  },
  {
    tag: 'Ironman & Marathoner',
    title: 'Discipline In Motion',
    photo: A + 'skyline-background.png',
    pf: A + 'todd-ironman.jpeg',
    body: "Todd's dedication to fitness is equally impressive — a finisher of the Florida Ironman and numerous marathons and athletic events. His discipline and determination serve as an inspiration, emphasizing the importance of a healthy, active life.",
    flip: false,
  },
]

export function AboutRows({ rows }: { rows: AboutRow[] }) {
  return (
    <>
      {rows.map((r) => (
        <div className={'about-row' + (r.flip ? ' flip' : '')} key={r.title}>
          {r.flip && (
            <div className="about-text">
              <span className="tag">{r.tag}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          )}
          <div className="about-photo" style={{ backgroundImage: `url(${r.photo})` }}>
            <img className="blob" src={A + 'background-blob.svg'} alt="" />
            <img className="pf" src={r.pf} alt={r.title} style={r.pfPos ? { objectPosition: r.pfPos } : undefined} />
          </div>
          {!r.flip && (
            <div className="about-text">
              <span className="tag">{r.tag}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-head">
          <Eyebrow center>About</Eyebrow>
          <h1 className="h-display name" style={{ marginTop: 10 }}>Todd Nepola</h1>
        </div>
        <AboutRows rows={ABOUT_ROWS} />
      </div>
    </section>
  )
}

export const PRESS = [
  { date: 'Apr 13, 2022', title: 'Todd Nepola buys a pair of Palm Beach County shopping centers for $13M', src: 'The Real Deal', img: A + 'shopping-plaza.jpg' },
  { date: 'Dec 21, 2022', title: 'Todd Nepola pays $24M for Lauderdale Lakes shopping centers', src: 'The Real Deal', img: A + 'investment-property.jpg' },
  { date: 'Feb 10, 2023', title: 'South Florida commercial deals go cold as rates climb', src: 'The Real Deal', img: A + 'downtown-background.png' },
]

export function Articles() {
  return (
    <section className="section section-navy-deep" id="press">
      <div className="container">
        <div className="press-head">
          <Eyebrow dark center>In the News</Eyebrow>
          <h2 className="h-2 on-dark" style={{ marginTop: 14 }}>Popular Articles</h2>
        </div>
        <div className="press-grid">
          {PRESS.map((p) => (
            <a className="press-card" key={p.title} href="/media#news">
              <div className="pc-bg" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="meta">{p.date}</div>
              <h3>{p.title}</h3>
              <div className="src">{p.src} &rarr;</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

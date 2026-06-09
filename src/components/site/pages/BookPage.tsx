'use client'
/* BookPage.tsx — dedicated "The Book" page (from page-book.jsx) */
import Link from 'next/link'
import { A, Icon, Eyebrow, Star } from '../atoms'
import { useOrder } from '../Shell'
import { CTABand } from '../PageShell'

const QUESTIONS = [
  { t: 'Is this property actually a good deal?', s: 'How to read a deal past the broker’s pitch — cap rates, condition, and the numbers that don’t lie.' },
  { t: 'What questions should I ask before I buy?', s: 'The diligence checklist would-be investors never think to run until it’s too late.' },
  { t: 'Retail or industrial — where do I start?', s: 'How Todd thinks about asset types, tenants, and risk in the South Florida market.' },
  { t: 'How do I manage what I own?', s: 'Property management, leasing, and the operating discipline that protects a return.' },
  { t: 'When do I walk away?', s: 'Reading the cycle, knowing your number, and the deals that are better left undone.' },
  { t: 'How do I build a track record?', s: 'Turning one good decision into 25 years of them — reputation, integrity, results.' },
]

const REVIEWS = [
  { t: 'Straightforward advice', q: 'If you are just starting out or are curious about commercial real estate, this book is a great read. Todd puts it down in a plain, easy-to-follow writing style.', by: 'Glenn Soucy', role: 'March 20, 2023' },
  { t: 'The best book I ever read on real estate', q: 'Simple to understand and absorb, yet packed with insightful information. I am certain it will fuel additional success in my career — I actually wish it was longer!', by: 'Maksim T.', role: 'Feb 17, 2023' },
  { t: 'Real-life advice on how to invest', q: 'This is no get-rich-quick scheme — this is real, practical advice anyone from a novice first-time investor to a seasoned professional can benefit from.', by: 'Jace', role: 'Jan 26, 2023' },
  { t: 'Engaging, fun & informative', q: "Mr. Nepola's writing style is very engaging — like having a conversation with your questions answered just as you're thinking them. Invest in yourself, buy the book!", by: 'Shane A. Broyles', role: 'Dec 6, 2022' },
  { t: 'A must-read with insight to commercial deals', q: 'Real and personal, with insights to the pitfalls and successes from actual experience. An easy read you can finish in a weekend. Stop procrastinating and hit buy.', by: 'Jules', role: 'Oct 31, 2022' },
  { t: 'An excellent read and must-buy', q: 'Todd is an excellent writer and storyteller. He breaks down how he did it so anyone can replicate what he did to become a successful CRE investor. A real class act!', by: 'Kevin V.', role: 'Oct 27, 2022' },
]

export function BookPage() {
  const onOrder = useOrder()
  return (
    <main>
      {/* ---- hero with floating cover ---- */}
      <section className="phero">
        <div className="phero-bg" style={{ backgroundImage: `url(${A}office-building.png)` }} />
        <div className="phero-scrim" />
        <div className="container phero-inner">
          <div className="book-hero-inner">
            <div className="book-hero-cover">
              <img src={A + 'book.png'} alt="Keeping It Real on Commercial Real Estate by Todd Nepola" />
            </div>
            <div className="book-hero-copy">
              <Eyebrow dark>The Book</Eyebrow>
              <h1>Keeping It <em>Real</em> On Commercial Real Estate</h1>
              <p className="tagline">The right answers to all your real estate questions</p>
              <div className="hero-actions">
                <button className="btn btn-gold" onClick={onOrder}>Order the Book <Icon.arrow /></button>
              </div>
              <p className="by">By <b>Todd Nepola</b> · 100% of net proceeds donated to charity</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- why this book ---- */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Eyebrow center>Why This Book</Eyebrow>
            <h2 className="h-2" style={{ marginTop: 14 }}>The Questions Investors Actually Need Answered</h2>
            <p>
              Over the years people asked Todd how to get started in investing — and he realized that, many
              times, would-be investors ask the wrong questions and don&apos;t focus on what <em>should</em> be asked.
              His book contains all the questions that should be asked, and then answers them, in plain,
              easy-to-follow language from a seasoned veteran of 25+ years as an investor, manager and developer.
            </p>
          </div>
        </div>
      </section>

      {/* ---- inside the book ---- */}
      <section className="section section-tight" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <div className="sec-head">
            <Eyebrow center>Inside</Eyebrow>
            <h2 className="h-2" style={{ marginTop: 14 }}>What You&apos;ll Learn To Ask</h2>
          </div>
          <div className="q-grid">
            {QUESTIONS.map((q, i) => (
              <div className="q-item" key={q.t}>
                <div className="qn">{String(i + 1).padStart(2, '0')}</div>
                <p>{q.t}<span>{q.s}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- reviews (navy) ---- */}
      <section className="section section-navy-deep">
        <div className="container">
          <div className="sec-head">
            <Eyebrow dark center>What Readers Say</Eyebrow>
            <h2 className="h-2 on-dark" style={{ marginTop: 14 }}>Recent Reviews</h2>
          </div>
          <div className="rev-grid">
            {REVIEWS.map((r) => (
              <div className="rev-card" key={r.by}>
                <div className="rev-stars">{[0, 1, 2, 3, 4].map((n) => <Star key={n} />)}</div>
                <h4 className="rtitle">{r.t}</h4>
                <blockquote>{r.q}</blockquote>
                <div className="by"><b>{r.by}</b>{r.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- charity band ---- */}
      <section className="section">
        <div className="container">
          <div className="charity-band">
            <div className="big">100%</div>
            <div>
              <Eyebrow dark>The Promise</Eyebrow>
              <h3 style={{ marginTop: 12 }}>Every Net Dollar Goes To Charity</h3>
              <p>
                Todd wrote this book to share what he knows — not to profit from it. All net proceeds are
                donated to charity, reflecting a lifelong commitment to giving back to the community that
                made the career possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- where to buy ---- */}
      <section className="section section-tight" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <div className="sec-head">
            <Eyebrow center>Get A Copy</Eyebrow>
            <h2 className="h-2" style={{ marginTop: 14 }}>Where To Order</h2>
          </div>
          <div className="retailers">
            <a className="ret-card" href="https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate" target="_blank" rel="noreferrer">
              <div className="rn">BookBaby</div>
              <div className="rd">Print &amp; eBook</div>
              <div className="arr">Order Now &rarr;</div>
            </a>
            <button className="ret-card" onClick={onOrder} style={{ font: 'inherit', cursor: 'pointer', border: '1px solid var(--line-soft)' }}>
              <div className="rn">Amazon</div>
              <div className="rd">Paperback &amp; Kindle</div>
              <div className="arr">Order Now &rarr;</div>
            </button>
            <Link className="ret-card" href="/contact">
              <div className="rn">Free Chapter</div>
              <div className="rd">Sent to your inbox</div>
              <div className="arr">Request &rarr;</div>
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Invest In Yourself"
        title="Buy The Book. Keep It Real."
        text="The right answers to all your real estate questions — and every dollar gives back."
        bg="skyline-background.png"
        primary={{ label: 'Order the Book', order: true }}
        secondary={{ label: 'Read About Todd', href: '/about' }}
      />
    </main>
  )
}

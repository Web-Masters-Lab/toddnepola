import { css } from '../dc'
import { PageShell } from '../PageShell'

const story = [
  "As President and founder of Current Capital Group, Mr. Nepola is responsible for the company's vision and long-term strategic plans. Mr. Nepola follows three generations of real estate investors and developers of commercial real estate. His paternal great-grandfather came to Manhattan from Italy in 1899. He was a superintendent for over 40 years responsible for building the Holland tunnel and several of Manhattan's subway lines. Mr. Nepola's grandfather and father also were real estate investors and developers.",
  'Mr. Nepola graduated from the University of South Florida in 1994. While pursuing a career in Investment Banking, Mr. Nepola followed in his family’s footsteps and started acquiring investment properties and developing properties for himself. After a decade of buying, building, leasing and managing his own properties, Todd made a decision to open up his own firm. With properties throughout Florida, Mr. Nepola has opened a second office in Port St Lucie, FL in order to be even more accessible.',
  'He has been recognized as a multiple-time winner of CoStar’s "Power Broker" award — most recently winning at CCM again in 2025 — in addition to being a member of the International Council of Shopping Centers (ICSC). With over two decades of "hands-on" experience in acquisitions, development, leasing and management of commercial real estate, Mr. Nepola is proud to lead Current Capital Group. Mr. Nepola resides in Miami Fl with his wife Alexia Nepola and is the proud father of two beautiful daughters. He is active in social and philanthropic organizations within the area. In addition, he is an active triathlete and a finisher of the Ironman triathlon.',
]

const timeline = [
  { year: '1972', text: 'Born in Staten Island, New York' },
  { year: '1986', text: 'Move to Miami, FL' },
  { year: '1994', text: 'Graduated in University of South Florida' },
  { year: '1998', text: 'Purchased first commercial property' },
  { year: '1999', text: 'TN Property Management was founded' },
  { year: '2002', text: 'Rebranded to Current Capital Real Estate Group' },
  { year: '2022', text: 'Current Capital Real Estate becomes top leasing firm in Broward County' },
]

const tlYear = 'font-weight:600;font-size:20px;line-height:1.25rem;color:#1f2937;margin:0;'
const tlText = 'font-weight:400;font-size:16px;line-height:1.5;color:#4b5563;margin-top:8px;'

export function AboutPage() {
  return (
    <PageShell>
      {/* HERO */}
      <div style={css("position:relative;overflow:hidden;min-height:clamp(230px,34vw,320px);background-color:#061650;background-image:linear-gradient(rgba(6,22,80,.75),rgba(6,22,80,.75)),repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0,rgba(255,255,255,.05) 14px,transparent 14px,transparent 28px),url('https://commons.wikimedia.org/wiki/Special:FilePath/USF_Marshall_Center_Running_of_the_Bulls.JPG?width=1600');background-size:cover,auto,cover;background-position:center,center,center 40%;")}>
        <div style={css('margin:0 auto;max-width:80rem;display:flex;padding:0 clamp(16px,4vw,24px);position:relative;')}>
          <div style={css("display:grid;margin-top:clamp(36px,6vw,64px);padding-bottom:32px;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#fff;padding-left:clamp(0px,3vw,32px);line-height:1;")}>
            <span style={css('font-size:clamp(20px,5vw,36px);text-transform:uppercase;')}>About</span>
            <span style={css('font-size:clamp(30px,8vw,60px);text-transform:uppercase;')}>Todd</span>
            <span style={css('font-size:clamp(46px,12.5vw,96px);text-transform:uppercase;')}>Nepola</span>
          </div>
          <div data-about-hero-img style={css('position:absolute;top:clamp(40px,7vw,80px);right:clamp(16px,6vw,80px);width:clamp(120px,17vw,200px);')}>
            <img src="/images/todd-spotlight.png" alt="Todd Nepola" style={css('width:100%;')} />
          </div>
        </div>
      </div>

      {/* STORY + TIMELINE */}
      <div style={css('max-width:1536px;margin:0 auto;padding:clamp(32px,5vw,64px) clamp(20px,5vw,80px);')}>
        <div style={css('margin-top:clamp(24px,4vw,56px);')}>
          <div data-story-stack style={css('display:grid;grid-template-columns:minmax(0,6fr) minmax(0,4fr);column-gap:clamp(24px,4vw,64px);align-items:start;')}>
            <h2 data-story-title style={css("grid-column:1;grid-row:1;font-size:clamp(28px,5vw,36px);line-height:1.1;color:#0A278D;font-weight:700;font-family:'Roboto Condensed',sans-serif;margin:0 0 28px;")}>Todd&apos;s Story</h2>
            <div data-story-text style={css('grid-column:1;grid-row:2;padding-bottom:56px;')}>
              {story.map((p, i) => (
                <p key={i} style={css(`font-weight:400;font-size:16px;line-height:1.5;color:#4b5563;width:100%;${i === 0 ? 'margin-top:0;' : 'margin-top:24px;'}`)}>{p}</p>
              ))}
            </div>
            <div data-tl-col style={css('grid-column:2;grid-row:2;')}>
              <div data-tl-grid style={css('display:grid;grid-template-columns:minmax(0,1fr);')}>
                {timeline.map((t) => (
                  <div key={t.year} data-tl-item>
                    <div>
                      <h2 style={css(tlYear)}>{t.year}</h2>
                      <p style={css(tlText)}>{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

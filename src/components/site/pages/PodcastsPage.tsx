import { css } from '../dc'
import { PageShell } from '../PageShell'
import { SectionHeader } from '../SectionHeader'

const featured = [
  { title: "I Spent A Day with Miami's Richest Real Estate Mogul (Todd Nepola)", href: 'https://www.youtube.com/watch?v=hacKnVWLINI', imageUrl: '/images/podcasts/yt-hacKnVWLINI-crop.webp', author: 'Hard Knocks Business' },
  { title: 'How Todd Nepola Built A $500 Million Real Estate Business', href: 'https://www.youtube.com/watch?v=xer52YbAMc0', imageUrl: '/images/podcasts/yt-xer52YbAMc0-crop.webp', author: 'Ross Mandell' },
  { title: 'Making Money While You Sleep', href: 'https://rodkhleif.com/podcasts/making-money-while-you-sleep/', imageUrl: '/images/podcasts/rod-khleif.webp', author: 'Rod Khleif' },
  { title: 'Finding Retail Opportunities in Today’s Market', href: 'https://kevinbupp.com/podcast/450-finding-retail-opportunities-in-todays-market/', imageUrl: '/images/podcasts/kevin-bupp-16x9.webp', author: 'Kevin Bupp' },
  { title: 'He Turned $100k Into $25M', href: 'https://www.youtube.com/watch?v=lAOliWexJgo', imageUrl: '/images/podcasts/yt-lAOliWexJgo.webp', author: 'School of Hard Knocks' },
  { title: 'How to Start Investing in Commercial Real Estate with Todd Nepola', href: 'https://www.youtube.com/watch?v=ObKMdL-K4Cw', imageUrl: '/images/podcasts/yt-ObKMdL-K4Cw.webp', author: 'Commercial Real Estate Pro Network' },
  { title: 'Todd Nepola - Commercial Property Recommendations For Real Estate Investors', href: 'https://www.youtube.com/watch?v=1NE6zm9hDOE', imageUrl: '/images/podcasts/yt-1NE6zm9hDOE.webp', author: 'Dwan Bent-Twyford' },
  { title: 'From $0 to $100+ Million Real Estate Empire - The Story of Todd Nepola', href: 'https://www.youtube.com/watch?v=JfIfLMXz7eU', imageUrl: '/images/podcasts/yt-JfIfLMXz7eU.webp', author: 'School of Hard Knocks' },
  { title: 'Commercial Real Estate Investing With Todd Nepola | The Ideal Hour Podcast EP 11', href: 'https://www.youtube.com/watch?v=dnl9l8TNCIQ', imageUrl: '/images/podcasts/yt-dnl9l8TNCIQ.webp', author: 'The Ideal Hour Podcast' },
  { title: 'Reality TV Star & Real Estate Mogul Todd Nepola from Real Housewives of Miami Shares His Story!', href: 'https://www.youtube.com/watch?v=yrwVrAH-rfA', imageUrl: '/images/podcasts/yt-yrwVrAH-rfA.webp', author: 'Stroke of Success' },
]

const audio = [
  { title: 'He Built Billions... and Regrets One Thing — Shapiro Capital Podcast', href: 'https://www.buzzsprout.com/2532483/episodes/18806281-he-built-billions-and-regrets-one-thing-shapiro-capital-podcast-todd-nepola-full-episode', author: 'Mark Shapiro' },
  { title: 'He Got Rich Buying ONE Commercial Deal with Todd Nepola', href: 'https://creblueprint.buzzsprout.com/2375339/episodes/17358252-he-got-rich-buying-one-commercial-deal-everyone-said-he-was-crazy', author: 'Graham Storey & Jesse Durham' },
  { title: '10 Expert Tips on Breaking Into Industrial and Retail', href: 'https://www.bestevercre.com/podcast/jf2771-10-expert-tips-on-breaking-into-industrial-and-retail-ft-todd-nepola', author: 'Ash Patel · Best Ever CRE' },
  { title: 'Great Retail Centers Are as Relevant as Ever', href: 'https://www.streetsmartsuccess.com/ToddNepola/', author: 'Street Smart Success' },
]

// #1B57CC, not #2E74E0: the lighter blue is 4.48:1 on white, a hair under the
// 4.5:1 floor for text this size.
const eyebrow = "margin:0 0 6px;font-family:'Roboto Condensed',sans-serif;font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:#1B57CC;"
const heading = "margin:0;text-transform:uppercase;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#0A278D;font-size:clamp(30px,5vw,48px);line-height:1;"

export function PodcastsPage() {
  return (
    <PageShell>
      <SectionHeader title="Podcasts" />
      <div data-pod-body style={css('background:#fff;padding:96px 0;')}>
        <div data-pod-wrap style={css('margin:0 auto;max-width:80rem;padding:0 32px;')}>
          <p style={css(eyebrow)}>Watch &amp; Listen</p>
          <h2 style={css(heading)}>Featured Appearances</h2>

          <div data-pod-grid style={css('margin:32px auto 0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;')}>
            {featured.map((p) => (
              <a key={p.href} href={p.href} data-lift style={css('display:flex;flex-direction:column;gap:16px;text-decoration:none;')}>
                <div style={css('position:relative;width:100%;aspect-ratio:16/9;border-radius:6px;overflow:hidden;background:#0a1638;box-shadow:0 18px 34px rgba(5,16,43,.2);')}>
                  <img src={p.imageUrl} alt="" style={css('width:100%;height:100%;object-fit:cover;display:block;')} />
                  <div style={css('position:absolute;inset:0;background:linear-gradient(to top,rgba(5,16,43,.6) 0%,rgba(5,16,43,.15) 45%,rgba(5,16,43,0) 100%);')} />
                  <div style={css('position:absolute;left:18px;bottom:18px;display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:9999px;background:rgba(5,16,43,.55);border:2px solid #fff;')}>
                    <div style={css('width:0;height:0;margin-left:4px;border-top:9px solid transparent;border-bottom:9px solid transparent;border-left:14px solid #fff;')} />
                  </div>
                </div>
                <div>
                  <div style={css("display:flex;flex-wrap:nowrap;align-items:center;gap:10px;min-width:0;font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;margin-bottom:8px;")}>
                    <span style={css('min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;')}>{p.author}</span>
                  </div>
                  <h3 data-clamp2 style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:clamp(19px,1.7vw,23px);line-height:1.14;letter-spacing:-.2px;color:#0A278D;text-wrap:pretty;min-height:2.28em;")}><span data-clamp2>{p.title}</span></h3>
                </div>
              </a>
            ))}
          </div>

          <div style={css('margin-top:96px;')}>
            <p style={css(eyebrow)}>Listen</p>
            <h2 style={css(heading)}>Audio Appearances</h2>
            <div style={css('margin-top:28px;border-bottom:1px solid #e5e7eb;')}>
              {audio.map((p) => (
                <a key={p.href} href={p.href} data-pod-row style={css("display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:24px;padding:22px 4px;border-top:1px solid #e5e7eb;text-decoration:none;")}>
                  <div style={css('min-width:0;')}>
                    <div style={css("font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;margin-bottom:6px;")}>{p.author}</div>
                    <h3 style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:clamp(19px,1.7vw,24px);line-height:1.16;letter-spacing:-.2px;color:#0A278D;text-wrap:pretty;")}>{p.title}</h3>
                  </div>
                  <span data-pod-listen style={css("display:flex;align-items:center;gap:8px;white-space:nowrap;font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:#0A278D;")}>Listen <span style={css('font-size:17px;line-height:1;')}>→</span></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

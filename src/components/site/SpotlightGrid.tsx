import Link from 'next/link'
import { css } from './dc'

const BOOKBABY = 'https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate'

const tileWrap = 'position:relative;width:100%;aspect-ratio:3/2;min-height:200px;border-radius:6px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,.55);'
const tileImg = 'width:100%;height:100%;object-fit:cover;display:block;'
const tileScrim = 'position:absolute;inset:0;background:linear-gradient(to top,rgba(5,16,43,.9) 0%,rgba(5,16,43,.35) 45%,rgba(5,16,43,.1) 100%);'
const titleBase = "position:absolute;bottom:clamp(16px,3vw,24px);margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;line-height:.92;color:#fff;font-size:clamp(30px,5.2vw,46px);letter-spacing:-1px;max-width:calc(100% - 56px);text-shadow:0 6px 24px rgba(0,0,0,.75);"
const eyebrow = 'display:block;font-size:clamp(20px,3.4vw,30px);color:#8fa6ff;letter-spacing:.02em;'

/** Homepage spotlight — 4 tiles around a center figure. Ported from SpotlightGrid.dc.html. */
export function SpotlightGrid({ figureOpacity = 0.95 }: { figureOpacity?: number }) {
  return (
    <section style={css("position:relative;width:100%;overflow:hidden;background:#05102b;font-family:'Roboto',sans-serif;padding:120px 0;")}>
      <div style={css('position:absolute;inset:0;background:radial-gradient(120% 80% at 50% 60%, #14245e 0%, #0a1638 45%, #05102b 100%);')} />

      <div id="spotlight-figure" style={css('position:absolute;top:0;left:50%;transform:translateX(-50%);height:100%;width:min(38vw,520px);display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:1;')}>
        <img
          src="/images/todd-spotlight.webp"
          alt="Todd Nepola"
          style={{ ...css('height:76%;width:auto;max-width:none;object-fit:contain;object-position:bottom center;-webkit-mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.35) 10%,#000 34%);mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.35) 10%,#000 34%);'), opacity: figureOpacity }}
        />
      </div>

      <div style={css('position:relative;z-index:2;max-width:1360px;margin:0 auto;padding:0 clamp(20px,5vw,40px);')}>
        <div id="spotlight-grid" style={css('display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:clamp(20px,20vw,340px);row-gap:clamp(32px,6vw,64px);')}>

          <Link href="/media/podcasts" style={css('position:relative;display:flex;align-items:center;justify-content:flex-end;')}>
            <div style={css(tileWrap)}>
              <img src="/images/tile-podcast.webp" alt="" style={css(tileImg)} />
              <div style={css(tileScrim)} />
            </div>
            <h3 style={css(titleBase + 'right:clamp(18px,3vw,28px);text-align:right;')}>
              <span style={css(eyebrow)}>Listen</span>To Podcast
            </h3>
          </Link>

          <a href={BOOKBABY} data-book-modal style={css('position:relative;display:flex;align-items:center;')}>
            <div style={css(tileWrap)}>
              <img src="/images/tile-book.webp" alt="" style={css(tileImg)} />
              <div style={css(tileScrim)} />
            </div>
            <h3 style={css(titleBase + 'left:clamp(18px,3vw,28px);text-align:left;')}>
              <span style={css(eyebrow)}>Read</span>The Book
            </h3>
          </a>

          <a href="https://www.currentcapitalgroup.com/" style={css('position:relative;display:flex;align-items:center;justify-content:flex-end;')}>
            <div style={css(tileWrap)}>
              <img src="/images/tile-current-capital.webp" alt="" style={css(tileImg)} />
              <div style={css(tileScrim)} />
            </div>
            <h3 style={css(titleBase + 'right:clamp(18px,3vw,28px);text-align:right;')}>
              <span style={css(eyebrow)}>Invest</span>Current<br />Capital
            </h3>
          </a>

          <Link href="/contact" style={css('position:relative;display:flex;align-items:center;')}>
            <div style={css(tileWrap)}>
              <img src="/images/tile-contact.webp" alt="" style={css(tileImg)} />
              <div style={css(tileScrim)} />
            </div>
            <h3 style={css(titleBase + 'left:clamp(18px,3vw,28px);text-align:left;')}>
              <span style={css(eyebrow)}>Connect</span>Get In Touch
            </h3>
          </Link>

        </div>
      </div>
    </section>
  )
}

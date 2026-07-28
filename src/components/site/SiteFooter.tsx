import Link from 'next/link'
import { css } from './dc'

const BOOKBABY = 'https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate'
const linkStyle = "font-size:14px;line-height:1.5;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#000;text-decoration:none;"
const headStyle = "font-size:14px;font-family:'Roboto Condensed',sans-serif;font-weight:700;line-height:1.5;color:#0A278D;margin:0;"
const ulStyle = 'margin-top:16px;list-style:none;padding:0;display:flex;flex-direction:column;gap:16px;align-items:center;'

/** Site footer. Ported 1:1 from SiteFooter.dc.html. "Book" opens the modal. */
export function SiteFooter() {
  return (
    <footer style={css('background:linear-gradient(180deg,#ffffff 0%,#eceef1 40%,#d1d5db 72%,#bfc5ce 100%);')} aria-labelledby="footer-heading">
      <div style={css('margin:0 auto;max-width:80rem;padding:clamp(40px,6vw,64px) clamp(20px,4vw,24px);')}>
        <div data-f-grid style={css('display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:clamp(28px,4vw,32px);')}>
          <Link data-f-logo href="/" style={css('grid-column:span 2 / span 2;display:flex;align-items:flex-start;justify-content:center;text-decoration:none;')}>
            <div style={css('flex-shrink:0;')}>
              <img src="/images/logo.svg" alt="Todd Nepola Logo" width={80} height={100} style={css('width:clamp(56px,9vw,80px);')} />
            </div>
            <div style={css("display:grid;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#0A278D;padding-left:8px;line-height:1;")}>
              <span style={css('font-size:clamp(24px,4.5vw,36px);')}>TODD</span>
              <span style={css('font-size:clamp(38px,7.5vw,60px);')}>NEPOLA</span>
            </div>
          </Link>

          <div data-f-cols style={css('grid-column:span 3 / span 3;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px 24px;text-align:center;')}>
            <div>
              <h3 style={css(headStyle)}>MAIN</h3>
              <ul style={css(ulStyle)}>
                <li><Link data-f-link href="/" style={css(linkStyle)}>Home</Link></li>
                <li><Link data-f-link href="/about" style={css(linkStyle)}>About Todd</Link></li>
                <li><a data-f-link data-book-modal href={BOOKBABY} style={css(linkStyle)}>Book</a></li>
                <li><a data-f-link href="https://www.currentcapitalgroup.com/" style={css(linkStyle)}>Current Capital Group</a></li>
              </ul>
            </div>
            <div>
              <h3 style={css(headStyle)}>MEDIA</h3>
              <ul style={css(ulStyle)}>
                <li><Link data-f-link href="/media/news" style={css(linkStyle)}>News</Link></li>
                <li><Link data-f-link href="/media/podcasts" style={css(linkStyle)}>Podcasts</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={css(headStyle)}>GET IN TOUCH</h3>
              <ul style={css(ulStyle)}>
                <li><Link data-f-link href="/contact" style={css(linkStyle)}>Contact</Link></li>
                <li><a data-f-link href="https://www.instagram.com/lifeaccordingtotodd/" style={css(linkStyle)}>Instagram</a></li>
                <li><a data-f-link href="https://www.tiktok.com/@todd.nepola?_r=1&_t=ZT-96h3Rw9JrgL" style={css(linkStyle)}>TikTok</a></li>
                <li><a data-f-link href="https://www.youtube.com/channel/UCBb9T0yL77zmLOQMhg9njNw" style={css(linkStyle)}>YouTube</a></li>
                <li><a data-f-link href="https://www.linkedin.com/in/todd-nepola-52323441/" style={css(linkStyle)}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

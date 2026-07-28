import { css } from './dc'

const LINKS = [
  { href: 'https://www.tiktok.com/@todd.nepola?_r=1&_t=ZT-96h3Rw9JrgL', icon: '/images/tiktok.svg', alt: 'TikTok', handle: '@todd.nepola' },
  { href: 'https://www.instagram.com/lifeaccordingtotodd/?hl=en', icon: '/images/instagram.svg', alt: 'Instagram', handle: '@lifeaccordingtotodd' },
  { href: 'https://www.youtube.com/channel/UCBb9T0yL77zmLOQMhg9njNw', icon: '/images/youtube.svg', alt: 'YouTube', handle: '@lifeaccordingtotodd' },
  { href: 'https://www.linkedin.com/in/todd-nepola-52323441/', icon: '/images/linkedin.svg', alt: 'LinkedIn', handle: 'Todd Nepola' },
]

/** Top social bar. Ported 1:1 from Banner.dc.html. */
export function Banner() {
  return (
    <div style={css('background:#0A278D;display:flex;justify-content:center;')}>
      <ul data-b-list style={css('display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:2px;padding:10px clamp(12px,3vw,24px);margin:0;list-style:none;')}>
        {LINKS.map((l, i) => (
          <li key={l.alt} style={css('color:#fff;display:flex;align-items:center;margin:6px 0;')}>
            <a href={l.href} style={css('display:flex;align-items:center;')}>
              <img data-b-icon src={l.icon} alt={l.alt} style={css('height:clamp(20px,2.6vw,24px);width:clamp(20px,2.6vw,24px);')} />
            </a>
            <a data-b-handle href={l.href} style={css('color:#fff;text-decoration:none;font-size:clamp(13px,1.7vw,16px);padding-left:4px;')}>{l.handle}</a>
            {i < LINKS.length - 1 && <span data-b-sep style={css('color:#fff;margin:0 8px;')}>|</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

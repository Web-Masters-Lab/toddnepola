'use client'

import { useState } from 'react'
import Link from 'next/link'
import { css } from './dc'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'News Articles', href: '/media/news' },
  { label: 'Podcasts', href: '/media/podcasts' },
  { label: 'Contact', href: '/contact' },
]

const BOOKBABY = 'https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate'

/** Sticky top nav + mobile drawer. Ported 1:1 from SiteNav.dc.html. */
export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header style={css('background:#fff;position:relative;')}>
      <nav data-nav-bar style={css('display:flex;align-items:center;justify-content:space-between;padding:16px;margin:0 32px;')} aria-label="Global">
        <div style={css('display:flex;flex:1 1 0%;')}>
          <Link href="/" style={css('padding:6px;text-decoration:none;')}>
            <div style={css('display:flex;align-items:center;')}>
              <img data-nav-logo src="/images/logo.svg" height={83} width={60} alt="Todd Nepola Logo" style={css('height:clamp(52px,7vw,83px);width:auto;max-width:none;flex:none;')} />
              <div style={css("display:grid;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#0A278D;padding-left:12px;line-height:1;letter-spacing:-.01em;")}>
                <span data-nav-todd style={css('font-size:clamp(19px,2.6vw,30px);')}>TODD</span>
                <span data-nav-nepola style={css('font-size:clamp(30px,4.2vw,48px);')}>NEPOLA</span>
              </div>
            </div>
          </Link>
        </div>

        <div data-nav-links style={css('display:flex;gap:clamp(12px,2.6vw,40px);align-items:center;')}>
          {NAV.map((n) => (
            <Link key={n.href} data-nav-link href={n.href} style={css("padding:8px 16px;text-align:center;text-transform:uppercase;font-size:18px;font-family:'Roboto Condensed',sans-serif;font-weight:700;border-radius:6px;color:#0A278D;text-decoration:none;white-space:nowrap;transition:all .15s;")}>{n.label}</Link>
          ))}
        </div>

        <div data-nav-cta style={css('display:flex;flex:1 1 0%;justify-content:flex-end;')}>
          <a href={BOOKBABY} data-book-modal data-book-cta style={css("font-size:18px;background:#0A278D;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;white-space:nowrap;color:#f3f4f6;border-radius:4px;padding:8px 16px;line-height:1.5;box-shadow:0 1px 2px rgba(0,0,0,.05);text-decoration:none;border:2px solid #0A278D;transition:all .25s;-webkit-tap-highlight-color:transparent;")}>Order The Book</a>
        </div>

        <button data-nav-toggle type="button" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open} aria-controls="nav-drawer" style={css('display:none;width:48px;height:48px;flex-direction:column;align-items:center;justify-content:center;gap:5px;background:transparent;border:0;cursor:pointer;padding:0;')}>
          <span style={css('display:block;width:30px;height:2px;background:#111;')} />
          <span style={css('display:block;width:30px;height:2px;background:#111;')} />
          <span style={css('display:block;width:30px;height:2px;background:#111;')} />
        </button>
      </nav>

      <div id="nav-drawer" data-nav-drawer data-open={open} style={css('border-top:1px solid rgba(10,39,141,.15);background:#fff;display:flex;flex-direction:column;gap:4px;')}>
        {NAV.map((n) => (
          <Link key={n.href} data-nav-dlink href={n.href} onClick={() => setOpen(false)} style={css("padding:14px 8px;text-transform:uppercase;font-size:20px;font-family:'Roboto Condensed',sans-serif;font-weight:700;color:#0A278D;text-decoration:none;border-radius:6px;")}>{n.label}</Link>
        ))}
        <a href={BOOKBABY} data-book-modal data-book-cta onClick={() => setOpen(false)} style={css("margin-top:12px;text-align:center;font-size:20px;background:#0A278D;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;color:#f3f4f6;border-radius:4px;padding:14px 16px;text-decoration:none;border:2px solid #0A278D;transition:all .25s;-webkit-tap-highlight-color:transparent;")}>Order The Book</a>
      </div>
    </header>
  )
}

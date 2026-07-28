'use client'

import { useEffect, useState } from 'react'
import { css } from './dc'

/**
 * Global "get the book" modal. Opens on any click on an element carrying
 * `data-book-modal` (the nav CTA, spotlight tile, hero/book/current-capital
 * buttons, footer "Book" link). Escape / backdrop / close-button dismiss it.
 * Ported 1:1 from BookModal.dc.html.
 */
export function BookModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const hit = target?.closest?.('[data-book-modal]')
      if (!hit) return
      e.preventDefault()
      setOpen(true)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Get the book"
      style={css('position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(5,16,43,.72);backdrop-filter:blur(4px);animation:bm-fade .2s ease both;')}
    >
      <div
        data-bm-card
        onClick={(e) => e.stopPropagation()}
        style={css('position:relative;width:100%;max-width:820px;max-height:92vh;overflow:auto;display:grid;grid-template-columns:minmax(0,0.85fr) minmax(0,1fr);background:#fff;border-radius:8px;box-shadow:0 40px 90px rgba(0,0,0,.55);animation:bm-rise .28s cubic-bezier(.2,.8,.2,1) both;')}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          data-bm-close
          style={css('position:absolute;top:12px;right:12px;z-index:2;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:0;border-radius:9999px;background:rgba(255,255,255,.9);color:#0A278D;font-size:22px;line-height:1;cursor:pointer;transition:all .25s;')}
        >
          &times;
        </button>

        <div data-bm-art style={css("display:flex;align-items:center;justify-content:center;padding:40px 28px;background:#0A278D;background-image:linear-gradient(160deg,#2E74E0 0%,#0A278D 55%,#071c66 100%);")}>
          <img
            src="/images/book.png"
            alt="Keeping It Real on Commercial Real Estate — Todd Nepola"
            style={css('width:min(230px,46vw);object-fit:contain;filter:drop-shadow(0 26px 40px rgba(0,0,0,.55));')}
          />
        </div>

        <div data-bm-body style={css('display:flex;flex-direction:column;justify-content:center;gap:14px;padding:44px 40px;')}>
          <p style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#2E74E0;")}>Todd&apos;s Book</p>
          <h2 style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;line-height:1.02;letter-spacing:-.5px;color:#0A278D;font-size:clamp(26px,3.4vw,38px);text-wrap:pretty;")}>Keeping It Real on Commercial Real Estate</h2>
          <p style={css('margin:0;font-size:16px;line-height:1.6;color:#374151;text-wrap:pretty;')}>Every question investors should be asking about commercial real estate — answered by a 25-year veteran investor, manager and developer. All net proceeds go to charity.</p>
          <div style={css('display:flex;flex-direction:column;gap:12px;margin-top:10px;')}>
            <a
              href="https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate"
              target="_blank"
              rel="noopener"
              data-bm-purchase
              style={css("display:block;text-align:center;background:#0A278D;color:#fff;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:18px;padding:14px 24px;border-radius:6px;text-decoration:none;transition:all .3s;")}
            >
              Purchase the Book
            </a>
            <a
              href="/free-chapter"
              data-bm-free
              style={css("display:block;text-align:center;background:#fff;color:#0A278D;border:1px solid #0A278D;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:18px;padding:14px 24px;border-radius:6px;text-decoration:none;transition:all .3s;")}
            >
              Download a Free Chapter
            </a>
          </div>
          <p style={css('margin:4px 0 0;font-size:13px;color:#6b7280;')}>Purchases are fulfilled by BookBaby.</p>
        </div>
      </div>
    </div>
  )
}

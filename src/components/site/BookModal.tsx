'use client'

import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { css } from './dc'

const BOOKBABY = 'https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate'
const CONVERTKIT_FORM = '6146955'
const CONVERTKIT_API_KEY = '9BgCJEvePnywSAmBE3p-1Q'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type View = 'buy' | 'chapter' | 'sent'

/**
 * Global "get the book" modal — a three-view flow driven by state.
 *   buy     (default) — Purchase → BookBaby + "Read the First Chapter Free" (in-place)
 *   chapter           — Full Name + Email form with a "← Back" link
 *   sent              — confirmation + purchase CTA
 * Opens on any click on `[data-book-modal]`; `data-book-modal="chapter"` opens
 * straight to the form. Escape / backdrop / ✕ dismiss it. Ported from BookModal.dc.html.
 */
export function BookModal() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<View>('buy')

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const hit = target?.closest?.('[data-book-modal]')
      if (!hit) return
      e.preventDefault()
      setOpen(true)
      setView(hit.getAttribute('data-book-modal') === 'chapter' ? 'chapter' : 'buy')
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

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('full_name') as HTMLInputElement)?.value.trim() ?? ''
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim() ?? ''
    if (!name || !EMAIL_RE.test(email)) return
    // Fire-and-forget subscribe to the same ConvertKit list the old page used.
    fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email, first_name: name }),
    }).catch(() => {})
    setView('sent')
  }

  if (!open) return null

  const eyebrow = "margin:0;font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#2E74E0;"
  const purchaseCta = "display:block;text-align:center;background:#0A278D;color:#fff;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:18px;padding:14px 24px;border-radius:6px;text-decoration:none;transition:all .3s;"
  const label = "display:block;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;line-height:1.5;color:#0A278D;"
  const input = "display:block;width:100%;margin-top:8px;background:#fff;border-radius:6px;border:0;outline:none;padding:10px 14px;color:#000;box-shadow:inset 0 0 0 1px #9ca3af;font-size:15px;font-family:'Roboto',sans-serif;"

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
          {view === 'buy' && (
            <div style={css('display:flex;flex-direction:column;gap:14px;')}>
              <p style={css(eyebrow)}>Todd&apos;s Book</p>
              <h2 style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;line-height:1.02;letter-spacing:-.5px;color:#0A278D;font-size:clamp(26px,3.4vw,38px);text-wrap:pretty;")}>Keeping It Real on Commercial Real Estate</h2>
              <p style={css('margin:0;font-size:16px;line-height:1.6;color:#374151;text-wrap:pretty;')}>Every question investors should be asking about commercial real estate — answered by a 25-year veteran investor, manager and developer. All net proceeds go to charity.</p>
              <div style={css('display:flex;flex-direction:column;gap:12px;margin-top:10px;')}>
                <a href={BOOKBABY} target="_blank" rel="noopener" data-bm-purchase style={css(purchaseCta)}>Purchase the Book</a>
                <button type="button" onClick={() => setView('chapter')} data-bm-free style={css("display:block;width:100%;text-align:center;background:#fff;color:#0A278D;border:1px solid #0A278D;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:18px;padding:14px 24px;border-radius:6px;cursor:pointer;transition:all .3s;")}>Read the First Chapter Free</button>
              </div>
              <p style={css('margin:4px 0 0;font-size:13px;color:#6b7280;')}>Purchases are fulfilled by BookBaby.</p>
            </div>
          )}

          {view === 'chapter' && (
            <div style={css('display:flex;flex-direction:column;gap:14px;')}>
              <button type="button" onClick={() => setView('buy')} style={css("align-self:flex-start;background:none;border:0;padding:0;font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#2E74E0;cursor:pointer;")}>&larr; Back</button>
              <h2 style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;line-height:1.02;letter-spacing:-.5px;color:#0A278D;font-size:clamp(24px,3vw,34px);text-wrap:pretty;")}>Read the First Chapter Free</h2>
              <p style={css('margin:0;font-size:16px;line-height:1.6;color:#374151;text-wrap:pretty;')}>Tell me where to send it and the first chapter lands in your inbox.</p>
              <form onSubmit={submit} name="free-chapter" style={css('display:flex;flex-direction:column;gap:16px;margin-top:6px;')}>
                <div>
                  <label style={css(label)}>Full Name</label>
                  <input type="text" name="full_name" required placeholder="John Doe" style={css(input)} />
                </div>
                <div>
                  <label style={css(label)}>Email</label>
                  <input type="email" name="email" required placeholder="johndoe@gmail.com" style={css(input)} />
                </div>
                <button type="submit" data-bm-purchase style={css("border:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;background:#0A278D;color:#fff;font-size:18px;padding:14px 24px;border-radius:6px;cursor:pointer;transition:all .3s;")}>Send Me the Chapter</button>
              </form>
            </div>
          )}

          {view === 'sent' && (
            <div style={css('display:flex;flex-direction:column;gap:14px;')}>
              <p style={css(eyebrow)}>Check Your Inbox</p>
              <h2 style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;line-height:1.02;letter-spacing:-.5px;color:#0A278D;font-size:clamp(24px,3vw,34px);text-wrap:pretty;")}>Chapter One Is On Its Way</h2>
              <p style={css('margin:0;font-size:16px;line-height:1.6;color:#374151;text-wrap:pretty;')}>Thanks — the first chapter is headed to your email. If it doesn&apos;t show up in a few minutes, check your spam folder.</p>
              <a href={BOOKBABY} target="_blank" rel="noopener" data-bm-purchase style={css('display:block;margin-top:10px;' + purchaseCta)}>Purchase the Full Book</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

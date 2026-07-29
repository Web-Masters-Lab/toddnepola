'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
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
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function BookModal() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<View>('buy')
  const cardRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  // The control that opened the dialog, so focus can go back where it was (2.4.3).
  const triggerRef = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    const trigger = triggerRef.current
    triggerRef.current = null
    if (trigger && document.contains(trigger)) trigger.focus()
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const hit = target?.closest?.('[data-book-modal]')
      if (!hit) return
      e.preventDefault()
      triggerRef.current = hit as HTMLElement
      setOpen(true)
      setView(hit.getAttribute('data-book-modal') === 'chapter' ? 'chapter' : 'buy')
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Send focus to the heading of whichever view is showing — on open and on
  // every view switch — so the dialog announces itself and keyboard users are
  // not left behind on the page underneath.
  useEffect(() => {
    if (open) titleRef.current?.focus()
  }, [open, view])

  // Escape to dismiss + Tab trapped inside the card (2.1.2 / 2.4.3). Without
  // this, Tab walks straight out of the dialog into the page behind it.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        return
      }
      if (e.key !== 'Tab') return
      const card = cardRef.current
      if (!card) return
      const items = Array.from(card.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement,
      )
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      const inside = active instanceof Node && card.contains(active)
      if (e.shiftKey) {
        if (!inside || active === first) {
          e.preventDefault()
          last.focus()
        }
      } else if (!inside || active === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

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

  // #2E74E0 is 4.48:1 on white — just under the 4.5:1 floor for this 13px text.
  // #1B57CC is the next stop on the same palette ramp and clears it at 6.40:1.
  const eyebrow = "margin:0;font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#1B57CC;"
  const purchaseCta = "display:block;text-align:center;background:#0A278D;color:#fff;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:18px;padding:14px 24px;border-radius:6px;text-decoration:none;transition:all .3s;"
  const label = "display:block;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;line-height:1.5;color:#0A278D;"
  // No `outline:none` here: it is an inline style, so it would beat the
  // :focus-visible ring in design.css and leave the field with no indicator.
  // Border darkened #9ca3af -> #6b7280 for 1.4.11 (white-on-white field, the
  // border is the only boundary; 2.54:1 -> 4.83:1 against the 3:1 minimum).
  const input = "display:block;width:100%;margin-top:8px;background:#fff;border-radius:6px;border:0;padding:10px 14px;color:#000;box-shadow:inset 0 0 0 1px #6b7280;font-size:15px;font-family:'Roboto',sans-serif;"

  return (
    <div
      onClick={close}
      style={css('position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(5,16,43,.72);backdrop-filter:blur(4px);animation:bm-fade .2s ease both;')}
    >
      {/* role="dialog" belongs on the card, not the backdrop — otherwise the
          dialog's accessible bounds include the whole overlay, and the visible
          heading can't serve as its label. */}
      <div
        ref={cardRef}
        data-bm-card
        role="dialog"
        aria-modal="true"
        aria-labelledby="bm-title"
        onClick={(e) => e.stopPropagation()}
        style={css('position:relative;width:100%;max-width:820px;max-height:92vh;overflow:auto;display:grid;grid-template-columns:minmax(0,0.85fr) minmax(0,1fr);background:#fff;border-radius:8px;box-shadow:0 40px 90px rgba(0,0,0,.55);animation:bm-rise .28s cubic-bezier(.2,.8,.2,1) both;')}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          data-bm-close
          style={css('position:absolute;top:12px;right:12px;z-index:2;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:0;border-radius:9999px;background:rgba(255,255,255,.9);color:#0A278D;font-size:22px;line-height:1;cursor:pointer;transition:all .25s;')}
        >
          &times;
        </button>

        <div data-bm-art style={css("display:flex;align-items:center;justify-content:center;padding:40px 28px;background:#0A278D;background-image:linear-gradient(160deg,#2E74E0 0%,#0A278D 55%,#071c66 100%);")}>
          <img
            src="/images/book.webp"
            alt="Keeping It Real on Commercial Real Estate — Todd Nepola"
            style={css('width:min(230px,46vw);object-fit:contain;filter:drop-shadow(0 26px 40px rgba(0,0,0,.55));')}
          />
        </div>

        <div data-bm-body style={css('display:flex;flex-direction:column;justify-content:center;gap:14px;padding:44px 40px;')}>
          {view === 'buy' && (
            <div style={css('display:flex;flex-direction:column;gap:14px;')}>
              <p style={css(eyebrow)}>Todd&apos;s Book</p>
              <h2 id="bm-title" data-bm-title ref={titleRef} tabIndex={-1} style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;line-height:1.02;letter-spacing:-.5px;color:#0A278D;font-size:clamp(26px,3.4vw,38px);text-wrap:pretty;")}>Keeping It Real on Commercial Real Estate</h2>
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
              <button type="button" onClick={() => setView('buy')} style={css("align-self:flex-start;background:none;border:0;padding:0;font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#1B57CC;cursor:pointer;")}>&larr; Back</button>
              <h2 id="bm-title" data-bm-title ref={titleRef} tabIndex={-1} style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;line-height:1.02;letter-spacing:-.5px;color:#0A278D;font-size:clamp(24px,3vw,34px);text-wrap:pretty;")}>Read the First Chapter Free</h2>
              <p style={css('margin:0;font-size:16px;line-height:1.6;color:#374151;text-wrap:pretty;')}>Tell me where to send it and the first chapter lands in your inbox.</p>
              <form onSubmit={submit} name="free-chapter" style={css('display:flex;flex-direction:column;gap:16px;margin-top:6px;')}>
                <div>
                  <label htmlFor="bm-full-name" style={css(label)}>Full Name</label>
                  <input id="bm-full-name" type="text" name="full_name" autoComplete="name" required placeholder="John Doe" style={css(input)} />
                </div>
                <div>
                  <label htmlFor="bm-email" style={css(label)}>Email</label>
                  <input id="bm-email" type="email" name="email" autoComplete="email" required placeholder="johndoe@gmail.com" style={css(input)} />
                </div>
                <button type="submit" data-bm-purchase style={css("border:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;background:#0A278D;color:#fff;font-size:18px;padding:14px 24px;border-radius:6px;cursor:pointer;transition:all .3s;")}>Send Me the Chapter</button>
              </form>
            </div>
          )}

          {view === 'sent' && (
            <div style={css('display:flex;flex-direction:column;gap:14px;')}>
              <p style={css(eyebrow)}>Check Your Inbox</p>
              <h2 id="bm-title" data-bm-title ref={titleRef} tabIndex={-1} style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;line-height:1.02;letter-spacing:-.5px;color:#0A278D;font-size:clamp(24px,3vw,34px);text-wrap:pretty;")}>Chapter One Is On Its Way</h2>
              <p style={css('margin:0;font-size:16px;line-height:1.6;color:#374151;text-wrap:pretty;')}>Thanks — the first chapter is headed to your email. If it doesn&apos;t show up in a few minutes, check your spam folder.</p>
              <a href={BOOKBABY} target="_blank" rel="noopener" data-bm-purchase style={css('display:block;margin-top:10px;' + purchaseCta)}>Purchase the Full Book</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

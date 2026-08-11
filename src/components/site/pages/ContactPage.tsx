'use client'

import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { css } from '../dc'
import { PageShell } from '../PageShell'

const labelStyle = "display:block;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;line-height:1.5;color:#fff;"
const inputStyle = 'display:block;width:100%;background:#f3f4f6;border-radius:6px;border:0;padding:8px 14px;color:#000;box-shadow:inset 0 0 0 1px #d1d5db;font-size:14px;'
const noteStyle = "color:#fff;font-family:'Roboto Condensed',sans-serif;font-weight:700;margin:0;"

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const sentRef = useRef<HTMLDivElement | null>(null)

  // Submitting unmounts the form, which drops focus to <body> and leaves
  // keyboard/SR users with no idea the send succeeded. Move focus to the
  // confirmation (it also carries role="status" for 4.1.3).
  useEffect(() => {
    if (sent) sentRef.current?.focus()
  }, [sent])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    try {
      const formData = new FormData(form)
      await fetch('/forms/__contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
    } catch (e) {
      console.log('Error: ', e)
    }
    setSent(true)
  }

  return (
    <PageShell>
      <section>
        <div style={css('position:relative;background:linear-gradient(135deg,#0A278D 0%,#0A278D 40%,#1B57CC 72%,#2E74E0 100%);')}>
          <div data-c-imgwrap style={css('position:absolute;inset:0;left:50%;')}>
            <img data-c-img src="/images/contact-desktop.webp" alt="" style={css('position:absolute;height:100%;width:auto;min-width:100%;object-fit:cover;background:#f9fafb;')} />
          </div>
          <div data-c-grid style={css('padding:128px 0 128px;margin:0 auto;max-width:80rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));')}>
            <div data-c-col style={css('padding:0 32px;position:relative;z-index:1;')}>
              <div style={css('margin:0 auto;max-width:32rem;')}>
                <h1 style={css("font-size:clamp(40px,7vw,86px);text-align:center;font-weight:700;letter-spacing:-.025em;text-transform:uppercase;text-wrap:balance;font-family:'Roboto Condensed',sans-serif;color:#fff;margin:0;")}>Get in Touch</h1>

                {sent ? (
                  <div ref={sentRef} tabIndex={-1} role="status" style={css('margin-top:56px;text-align:center;color:#fff;outline:none;')}>
                    <p style={css("font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:24px;margin:0 0 8px;")}>Thanks — message sent.</p>
                    <p style={css('margin:0;color:#e6ecff;font-size:16px;')}>Todd&apos;s team will be in touch shortly.</p>
                  </div>
                ) : (
                  <form data-c-form method="POST" name="contact" onSubmit={handleSubmit} style={css('margin-top:64px;')}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p style={{ display: 'none' }}>
                      <label>Don’t fill this out: <input name="bot-field" /></label>
                    </p>
                    <div data-c-fields style={css('display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 32px;')}>
                      <div>
                        <label htmlFor="c-first-name" style={css(labelStyle)}>First name</label>
                        <div style={css('margin-top:10px;')}><input id="c-first-name" type="text" name="first-name" autoComplete="given-name" required style={css(inputStyle)} /></div>
                      </div>
                      <div>
                        <label htmlFor="c-last-name" style={css(labelStyle)}>Last name</label>
                        <div style={css('margin-top:10px;')}><input id="c-last-name" type="text" name="last-name" autoComplete="family-name" style={css(inputStyle)} /></div>
                      </div>
                      <div style={css('grid-column:span 2 / span 2;')}>
                        <label htmlFor="c-email" style={css(labelStyle)}>Email</label>
                        <div style={css('margin-top:10px;')}><input id="c-email" type="email" name="email" autoComplete="email" required style={css(inputStyle)} /></div>
                      </div>
                      <div style={css('grid-column:span 2 / span 2;')}>
                        <div style={css('display:flex;justify-content:space-between;font-size:14px;line-height:1.5;')}>
                          <label htmlFor="c-phone" style={css(labelStyle)}>Phone</label>
                          <p id="c-phone-note" style={css(noteStyle)}>Optional</p>
                        </div>
                        <div style={css('margin-top:10px;')}><input id="c-phone" aria-describedby="c-phone-note" type="tel" name="phone" autoComplete="tel" style={css(inputStyle)} /></div>
                      </div>
                      <div style={css('grid-column:span 2 / span 2;')}>
                        <div style={css('display:flex;justify-content:space-between;font-size:14px;line-height:1.5;')}>
                          <label htmlFor="c-message" style={css(labelStyle)}>Message</label>
                          <p id="c-message-note" style={css(noteStyle)}>Max 500 characters</p>
                        </div>
                        <div style={css('margin-top:10px;')}><textarea id="c-message" aria-describedby="c-message-note" name="message" rows={4} maxLength={500} style={css("display:block;width:100%;border-radius:6px;border:0;padding:8px 14px;background:#f3f4f6;color:#000;box-shadow:inset 0 0 0 1px #d1d5db;font-size:14px;font-family:'Roboto',sans-serif;")} /></div>
                      </div>
                    </div>
                    <div data-c-actions style={css('margin-top:40px;display:flex;justify-content:flex-end;border-top:1px solid rgba(17,24,39,.1);padding-top:32px;')}>
                      <button data-c-submit type="submit" style={css("border-radius:6px;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;background:#fff;padding:10px 14px;text-align:center;font-size:14px;color:#0A278D;box-shadow:0 1px 2px rgba(0,0,0,.05);border:0;cursor:pointer;transition:all .2s;")}>Send message</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

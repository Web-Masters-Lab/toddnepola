'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { css } from '../dc'

const CONVERTKIT_FORM = '6146955'
const CONVERTKIT_API_KEY = '9BgCJEvePnywSAmBE3p-1Q'

const inputStyle = 'display:block;width:100%;background:#fff;border-radius:6px;border:0;outline:none;padding:8px 14px;color:#000;box-shadow:inset 0 0 0 1px #9ca3af;font-size:14px;'
const labelStyle = "display:block;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;line-height:1.5;color:#0A278D;"

export function FreeChapterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Fire-and-forget subscribe to ConvertKit (mirrors the prior implementation).
    fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email, first_name: fullName }),
    }).catch(() => {})
    setSent(true)
  }

  return (
    <div style={css("font-family:'Roboto',sans-serif;color:#000;background:#fff;")}>
      <section style={css('max-width:1152px;margin:0 auto;padding:112px 16px;')}>
        <div data-fc-grid style={css('display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:32px;')}>
          <div data-fc-text style={css('display:flex;flex-direction:column;justify-content:center;grid-column:span 3 / span 3;')}>
            <h3 style={css("font-size:36px;color:#0A278D;text-align:center;font-family:'Roboto Condensed',sans-serif;font-weight:700;margin:0 0 16px;")}>Read The First Chapter For Free!</h3>
            <p data-fc-pad style={css('margin:24px 0;padding:0 96px;font-size:24px;text-align:left;')}>
              Sign up to get the first chapter of my book, <em style={css('font-weight:700;color:#1e40af;')}>Keeping it Real on Commercial Real Estate </em> .
            </p>

            {sent ? (
              <div data-fc-pad style={css('padding:0 96px;text-align:center;')}>
                <p style={css("font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:24px;color:#0A278D;margin:8px 0;")}>You&apos;re in — check your inbox!</p>
                <p style={css('margin:0;font-size:18px;color:#374151;')}>The first chapter is on its way to {email || 'your email'}.</p>
              </div>
            ) : (
              <form method="POST" name="free-chapter" onSubmit={handleSubmit} data-fc-pad style={css('margin-top:16px;padding:0 96px;')}>
                <div style={css('display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 32px;')}>
                  <div style={css('grid-column:span 2 / span 2;')}>
                    <label style={css(labelStyle)}>Full Name</label>
                    <div style={css('margin-top:10px;')}>
                      <input type="text" name="full_name" autoComplete="name" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} style={css(inputStyle)} />
                    </div>
                  </div>
                  <div style={css('grid-column:span 2 / span 2;')}>
                    <label style={css(labelStyle)}>Email</label>
                    <div style={css('margin-top:10px;')}>
                      <input type="email" name="email" autoComplete="email" required placeholder="johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} style={css(inputStyle)} />
                    </div>
                  </div>
                </div>
                <div style={css('display:flex;justify-content:center;padding-top:40px;')}>
                  <button type="submit" data-fc-submit style={css("border:1px solid #000;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;background:#0A278D;white-space:nowrap;width:224px;color:#fff;font-size:18px;padding:12px 0;text-align:center;border-radius:4px;cursor:pointer;transition:all .4s;")}>Sign Up</button>
                </div>
              </form>
            )}
          </div>
          <div data-fc-img style={css('grid-column:span 2 / span 2;display:flex;justify-content:center;')}>
            <img src="/images/book.png" alt="Todd Nepola Book" width={320} height={400} style={css('object-fit:contain;width:320px;')} />
          </div>
        </div>
      </section>
    </div>
  )
}

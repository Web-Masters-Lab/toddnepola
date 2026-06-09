'use client'
/* Contact.tsx — contact form, footer, and order modal (from the design bundle's contact.jsx) */
import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { A, SOCIALS, Icon, Eyebrow, Logo } from './atoms'

/* Encode a <form> as application/x-www-form-urlencoded for Netlify Forms.
   Matches the original site's submission mechanism (POST to the static stub
   in public/forms with a `form-name` Netlify detects at build time). */
function encodeForm(form: HTMLFormElement) {
  return new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString()
}
async function postNetlify(action: string, form: HTMLFormElement) {
  await fetch(action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeForm(form),
  })
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    try { await postNetlify('/forms/__contact.html', form) } catch (err) { console.error(err) }
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-grid">
        <div className="contact-form-wrap">
          <Eyebrow dark>Get In Touch</Eyebrow>
          <h2 className="h-display" style={{ color: '#fff', marginTop: 12 }}>Let&apos;s Talk</h2>
          {sent ? (
            <div className="contact-form">
              <div className="contact-success">
                <Icon.check />
                <div>
                  <strong style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.03em' }}>Message sent</strong><br />
                  Thanks for reaching out — Todd&apos;s team will be in touch shortly.
                </div>
              </div>
            </div>
          ) : (
            <form className="contact-form" name="contact" method="POST" action="/forms/__contact.html" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit}>
              <input type="hidden" name="form-name" value="contact" />
              <p hidden><input name="bot-field" /></p>
              <div className="fld"><label>First Name</label><input name="first-name" required placeholder="Todd" /></div>
              <div className="fld"><label>Last Name</label><input name="last-name" placeholder="Nepola" /></div>
              <div className="fld full"><label>Email</label><input name="email" type="email" required placeholder="you@email.com" /></div>
              <div className="fld full"><label>Phone <span className="opt">Optional</span></label><input name="phone" type="tel" placeholder="(305) 000-0000" /></div>
              <div className="fld full"><label>Message <span className="opt">Max 500 characters</span></label><textarea name="message" rows={4} maxLength={500} placeholder="Tell Todd about your project or question…" /></div>
              <div className="contact-submit"><button type="submit" className="btn btn-gold">Send Message <Icon.arrow /></button></div>
            </form>
          )}
        </div>
        <div className="contact-photo" />
      </div>
    </section>
  )
}

const FOOT: Record<string, [string, string][]> = {
  Main: [['Home', '/'], ['About Todd', '/about'], ['The Book', '/book'], ['Current Capital Group', 'https://www.currentcapitalgroup.com/']],
  Media: [['Portfolio', '/portfolio'], ['News Articles', '/media#news'], ['Podcasts', '/media#podcasts']],
}

function isExternal(href: string) {
  return /^https?:\/\//.test(href)
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo footer />
            <p className="footer-tag">South Florida commercial real estate investor, author, and Ironman — keeping it real on every deal.</p>
          </div>
          <div>
            <h4>Main</h4>
            <ul>{FOOT.Main.map(([t, h]) => <li key={t}>{isExternal(h) ? <a href={h} target="_blank" rel="noreferrer">{t}</a> : <Link href={h}>{t}</Link>}</li>)}</ul>
          </div>
          <div>
            <h4>Media</h4>
            <ul>{FOOT.Media.map(([t, h]) => <li key={t}><Link href={h}>{t}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <ul>{SOCIALS.map((s) => <li key={s.name}><a href={s.href} target="_blank" rel="noreferrer">{s.name}</a></li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Todd Nepola. All rights reserved.</span>
          <div className="footer-social">
            {SOCIALS.map((s) => <a key={s.name} href={s.href} target="_blank" rel="noreferrer"><img src={s.icon} alt={s.name} /></a>)}
          </div>
        </div>
      </div>
    </footer>
  )
}

export function OrderModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  // view: 'order' (retailers) | 'chapter' (name+email form) | 'sent' (confirmation)
  const [view, setView] = useState<'order' | 'chapter' | 'sent'>('order')
  const [name, setName] = useState('')

  const close = () => { onClose(); setTimeout(() => { setView('order'); setName('') }, 250) }
  const submitChapter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fullName = (form.elements.namedItem('full_name') as HTMLInputElement)?.value || ''
    setName(fullName.trim().split(' ')[0] || 'there')
    try { await postNetlify('/forms/__free-chapter.html', form) } catch (err) { console.error(err) }
    setView('sent')
  }

  return (
    <div className={'modal-backdrop' + (open ? ' open' : '')} onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-img"><img src={A + 'book.png'} alt="Keeping It Real on Commercial Real Estate" /></div>
        <div className="modal-body">
          <button className="close" aria-label="Close" onClick={close}><Icon.close style={{ width: 24, height: 24 }} /></button>

          {view === 'order' && (
            <>
              <Eyebrow>Order the Book</Eyebrow>
              <h3>Keeping It Real on Commercial Real Estate</h3>
              <p>The right answers to all your real estate questions. Every dollar of net proceeds goes to charity — get your copy from any of these retailers.</p>
              <div className="modal-actions">
                <a className="btn btn-primary" href="https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate" target="_blank" rel="noreferrer">BookBaby <Icon.arrow /></a>
                <a className="btn btn-invert" href="#" onClick={(e) => { e.preventDefault(); close() }}>Amazon</a>
                <a className="btn btn-ghost-light" style={{ color: 'var(--navy-700)', boxShadow: 'inset 0 0 0 1.5px var(--line)' }} href="#" onClick={(e) => { e.preventDefault(); setView('chapter') }}>Request a Free Chapter</a>
              </div>
            </>
          )}

          {view === 'chapter' && (
            <>
              <Eyebrow>Free Chapter</Eyebrow>
              <h3>Read The First Chapter On Us</h3>
              <p>Tell us where to send it. We&apos;ll email you the opening chapter of Todd&apos;s book — no strings attached.</p>
              <form className="modal-form" name="free-chapter" method="POST" action="/forms/__free-chapter.html" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submitChapter}>
                <input type="hidden" name="form-name" value="free-chapter" />
                <p hidden><input name="bot-field" /></p>
                <div className="mfld"><label htmlFor="fullname">Full Name</label><input id="fullname" name="full_name" required placeholder="Todd Nepola" /></div>
                <div className="mfld"><label htmlFor="cemail">Email</label><input id="cemail" name="email" type="email" required placeholder="you@email.com" /></div>
                <div className="modal-form-actions">
                  <button type="button" className="btn btn-ghost-light" style={{ color: 'var(--ink-500)', boxShadow: 'inset 0 0 0 1.5px var(--line)' }} onClick={() => setView('order')}>Back</button>
                  <button type="submit" className="btn btn-gold">Send My Chapter <Icon.arrow /></button>
                </div>
              </form>
            </>
          )}

          {view === 'sent' && (
            <div className="modal-sent">
              <div className="modal-sent-badge"><Icon.check /></div>
              <Eyebrow>Email Sent</Eyebrow>
              <h3>Check Your Inbox{name ? `, ${name}` : ''}</h3>
              <p>Your free chapter is on its way. It should land in your inbox within a few minutes — be sure to check spam just in case.</p>
              <div className="modal-actions">
                <button className="btn btn-primary" onClick={close}>Done</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

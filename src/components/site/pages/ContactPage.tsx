'use client'
/* ContactPage.tsx — dedicated "Contact" page (from page-contact.jsx) */
import type { SVGProps } from 'react'
import { SOCIALS, Icon, Eyebrow } from '../atoms'
import { Contact } from '../Contact'
import { PageHero, CTABand } from '../PageShell'

const CIcon = {
  pin: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" {...p}><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.6" /></svg>,
  mail: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" strokeLinejoin="round" /></svg>,
  phone: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" {...p}><path d="M5 4h3l1.6 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.6V19a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 5 4Z" strokeLinejoin="round" /></svg>,
  clock: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
}

export function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let&apos;s <em>Talk</em></>}
        sub="Questions about a deal, the book, a podcast booking, or working with Current Capital Real Estate Group? Reach out — Todd's team reads every message."
        bg="hq.jpg"
        short
      />

      {/* ---- intro + info cards ---- */}
      <section className="section">
        <div className="container">
          <div className="contact-intro">
            <div>
              <Eyebrow>How To Reach Us</Eyebrow>
              <p className="lede" style={{ marginTop: 16 }}>
                Whether you&apos;re an investor with a question, a journalist on deadline, or a reader who
                wants a free chapter — start here and we&apos;ll point you to the right place.
              </p>
              <div className="cfacts">
                <div className="cfact"><div className="k">Based In</div><div className="v">South Florida</div></div>
                <div className="cfact"><div className="k">Response</div><div className="v">1–2 Business Days</div></div>
                <div className="cfact"><div className="k">Best For</div><div className="v">CRE · Press · Book</div></div>
              </div>
            </div>
            <div className="contact-info">
              <div className="info-card">
                <div className="ico"><CIcon.pin /></div>
                <div>
                  <h4>Current Capital Group</h4>
                  <p>Retail &amp; industrial property across the South Florida market.<br /><a href="https://www.currentcapitalgroup.com/" target="_blank" rel="noreferrer">currentcapitalgroup.com &rarr;</a></p>
                </div>
              </div>
              <div className="info-card">
                <div className="ico"><CIcon.mail /></div>
                <div>
                  <h4>Email &amp; Press</h4>
                  <p>Use the form for general, book, and media inquiries — we&apos;ll route it to the right person.</p>
                </div>
              </div>
              <div className="info-card social-card">
                <div className="ico"><CIcon.phone /></div>
                <div>
                  <h4>Follow Todd</h4>
                  <p style={{ marginBottom: 16 }}>Behind the deals, the book, and life in South Florida — across every platform.</p>
                  <div className="social-links">
                    {SOCIALS.map((s) => (
                      <a className="social-link" key={s.name} href={s.href} target="_blank" rel="noreferrer">
                        <span className="sl-ico"><img src={s.icon} alt={s.name} /></span>
                        <span className="sl-text">
                          <span className="sl-name">{s.name}</span>
                          <span className="sl-handle">{s.handle}</span>
                        </span>
                        <span className="sl-go"><Icon.arrow /></span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- the form (reuses the shared Contact component) ---- */}
      <Contact />

      <CTABand
        eyebrow="While You're Here"
        title="Read The Book. Keep It Real."
        text="The right answers to all your real estate questions — every dollar gives back to charity."
        bg="skyline-background.png"
        primary={{ label: 'Order the Book', order: true }}
        secondary={{ label: 'About Todd', href: '/about' }}
      />
    </main>
  )
}

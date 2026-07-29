import Link from 'next/link'
import { css } from '@/components/site/dc'
import { PageShell } from '@/components/site/PageShell'
import { SectionHeader } from '@/components/site/SectionHeader'

export default function NotFound() {
  return (
    <PageShell>
      <SectionHeader title="Page Not Found" />
      <div style={css('display:flex;align-items:center;justify-content:center;padding:80px 20px;min-height:40vh;')}>
        <div style={css('display:flex;flex-direction:column;align-items:center;text-align:center;')}>
          <p style={css("font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;color:#0A278D;font-size:clamp(64px,14vw,128px);line-height:1;margin:0;")}>404</p>
          {/* SectionHeader above already renders the page's <h1> with this same
              text — a second h1 here would just duplicate it. */}
          <p style={css("margin:8px 0 0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:24px;color:#000;")}>Page not found</p>
          <p style={css('margin:8px 0 0;font-size:15px;color:rgba(0,0,0,.6);')}>Sorry, we couldn’t find the page you’re looking for.</p>
          <Link href="/" style={css("padding:16px;font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:18px;color:#0A278D;text-decoration:none;")}>Go to the home page</Link>
          <p style={css("font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:18px;margin:0;")}>Or</p>
          <Link href="/contact" style={css("padding:16px;font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:18px;color:#0A278D;text-decoration:none;")}>Contact Us</Link>
        </div>
      </div>
    </PageShell>
  )
}

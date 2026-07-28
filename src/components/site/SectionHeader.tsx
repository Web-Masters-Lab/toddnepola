import { css } from './dc'

/** Gradient page-title band. Ported 1:1 from SectionHeader.dc.html. */
export function SectionHeader({ title }: { title: string }) {
  return (
    <div style={css('background:linear-gradient(135deg,#0A278D 0%,#0A278D 40%,#1B57CC 72%,#2E74E0 100%);')}>
      <div style={css('padding:128px 24px;')}>
        <div style={css('margin:0 auto;max-width:42rem;text-align:center;')}>
          <h2 style={css("font-size:60px;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:-.025em;color:#fff;margin:0;")}>{title}</h2>
        </div>
      </div>
    </div>
  )
}

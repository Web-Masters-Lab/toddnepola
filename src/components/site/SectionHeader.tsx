import { css } from './dc'

/**
 * Gradient page-title band. Ported 1:1 from SectionHeader.dc.html.
 *
 * Renders the page's <h1>: this band carries the page title on every page that
 * uses it, and those pages previously had no level-one heading at all.
 */
export function SectionHeader({ title }: { title: string }) {
  return (
    <div style={css('background:linear-gradient(135deg,#0A278D 0%,#0A278D 40%,#1B57CC 72%,#2E74E0 100%);')}>
      <div style={css('padding:128px 24px;')}>
        <div style={css('margin:0 auto;max-width:42rem;text-align:center;')}>
          <h1 style={css("font-size:60px;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:-.025em;color:#fff;margin:0;")}>{title}</h1>
        </div>
      </div>
    </div>
  )
}

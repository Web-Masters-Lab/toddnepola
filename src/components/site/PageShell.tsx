import type { ReactNode } from 'react'
import { css } from './dc'
import { Banner } from './Banner'
import { SiteNav } from './SiteNav'
import { SiteFooter } from './SiteFooter'

/**
 * Standard page chrome: social banner + nav on top, footer at the bottom.
 *
 * Owns the landmark structure for every page — the skip link (WCAG 2.4.1, the
 * banner + nav run ~15 links deep before content) and the <main> the link
 * targets. Keep <main> a sibling of the header/footer so those keep their
 * banner/contentinfo roles.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div style={css("font-family:'Roboto',sans-serif;color:#000;background:#fff;")}>
      <a href="#main-content" data-skip-link>Skip to main content</a>
      <Banner />
      <SiteNav />
      <main id="main-content" tabIndex={-1} style={css('outline:none;')}>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

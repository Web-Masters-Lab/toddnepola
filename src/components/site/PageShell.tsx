import type { ReactNode } from 'react'
import { css } from './dc'
import { Banner } from './Banner'
import { SiteNav } from './SiteNav'
import { SiteFooter } from './SiteFooter'

/** Standard page chrome: social banner + nav on top, footer at the bottom. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div style={css("font-family:'Roboto',sans-serif;color:#000;background:#fff;")}>
      <Banner />
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  )
}

'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { BookModal } from './BookModal'

/**
 * Root client wrapper: remounts page content on route change (so scroll/state
 * reset cleanly) and renders the global BookModal once for the whole app.
 *
 * Deliberately *not* a <main>: PageShell owns the landmark structure, and a
 * <main> here would swallow the site header/nav/footer as descendants, which
 * strips their banner/contentinfo roles and makes a skip link point at markup
 * that still contains the nav.
 */
export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <div key={pathname} className="w-full flex-auto bg-white text-black">
        {children}
      </div>
      <BookModal />
    </div>
  )
}

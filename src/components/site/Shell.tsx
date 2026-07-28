'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { BookModal } from './BookModal'

/**
 * Root client wrapper: remounts page content on route change (so scroll/state
 * reset cleanly) and renders the global BookModal once for the whole app.
 */
export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <main key={pathname} className="w-full flex-auto bg-white text-black">
        {children}
      </main>
      <BookModal />
    </div>
  )
}

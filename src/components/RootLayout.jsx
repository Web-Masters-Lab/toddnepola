'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function RootLayoutInner({ children }) {
  return (
    <>
      <Header />
      <div layout="true" className="flex w-full flex-col overflow-hidden">
        <main className="w-full flex-auto bg-background text-black font-robotoRegular">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()

  return <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
}

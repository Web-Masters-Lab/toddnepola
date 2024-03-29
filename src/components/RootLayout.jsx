'use client'

import { usePathname } from 'next/navigation'


function RootLayoutInner({ children }) {
  return (
    <>
      <div layout="true" className="flex w-full flex-col overflow-hidden">
        <main className="w-full flex-auto bg-white text-black font-robotoRegular">
          {children}
        </main>
      </div>
    </>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()

  return <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
}

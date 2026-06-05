'use client'
/* HomePage.tsx — the home one-pager (from the design bundle's app.jsx) */
import { useOrder } from '../Shell'
import { Hero, Stats } from '../Hero'
import { QuickLinks, BookSection, CurrentCapital, Awards } from '../MidSections'
import { About, Articles } from '../About'
import { Contact } from '../Contact'

export function HomePage() {
  const onOrder = useOrder()
  return (
    <>
      <Hero onOrder={onOrder} />
      <Stats />
      <QuickLinks />
      <BookSection />
      <CurrentCapital />
      <Awards />
      <About />
      <Articles />
      <Contact />
    </>
  )
}

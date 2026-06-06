'use client'
/* Nav.tsx — sticky navigation + mobile drawer (from the design bundle's nav.jsx) */
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NAV, Icon, Logo } from './atoms'

function useActive() {
  const pathname = usePathname()
  return (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/'))
}

export function Nav({ onOrder }: { onOrder: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const isActive = useActive()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={'nav' + (scrolled ? ' scrolled' : '')}>
        <div className="container nav-inner">
          <Logo />
          <nav className="nav-links">
            {NAV.map((n) => <Link key={n.name} href={n.href} className={isActive(n.href) ? 'active' : ''}>{n.name}</Link>)}
          </nav>
          <div className="nav-cta">
            <button className="btn btn-primary btn-sm" onClick={onOrder}>Order the Book</button>
            <button className="nav-burger" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Icon.menu />
            </button>
          </div>
        </div>
      </header>

      <div className={'drawer-backdrop' + (open ? ' open' : '')} onClick={() => setOpen(false)} />
      <aside className={'drawer' + (open ? ' open' : '')}>
        <div className="drawer-head">
          <Logo />
          <button aria-label="Close menu" onClick={() => setOpen(false)}><Icon.close style={{ width: 26, height: 26 }} /></button>
        </div>
        {NAV.map((n) => <Link key={n.name} href={n.href} className={isActive(n.href) ? 'active' : ''} onClick={() => setOpen(false)}>{n.name}</Link>)}
        <button className="btn btn-primary" style={{ marginTop: 22 }} onClick={() => { setOpen(false); onOrder() }}>Order the Book</button>
      </aside>
    </>
  )
}

/* atoms.tsx — shared data, icons, and small components for the Todd Nepola site.
   Ported from the design bundle's ui_kits/website/atoms.jsx + pageshell.jsx.
   Assets resolve from /public/assets. */
import Link from 'next/link'
import type { ReactNode, SVGProps, HTMLAttributes } from 'react'

export const A = '/assets/'

export type Social = { name: string; handle: string; icon: string; href: string }

export const SOCIALS: Social[] = [
  { name: 'TikTok', handle: '@todd.nepola', icon: A + 'icons/tiktok.svg', href: 'https://www.tiktok.com/@todd.nepola' },
  { name: 'Instagram', handle: '@lifeaccordingtotodd', icon: A + 'icons/instagram.svg', href: 'https://www.instagram.com/lifeaccordingtotodd/' },
  { name: 'YouTube', handle: '@lifeaccordingtotodd', icon: A + 'icons/youtube.svg', href: 'https://www.youtube.com/channel/UCBb9T0yL77zmLOQMhg9njNw' },
  { name: 'LinkedIn', handle: 'Todd Nepola', icon: A + 'icons/linkedin.svg', href: 'https://www.linkedin.com/in/todd-nepola-52323441/' },
]

export type NavItem = { name: string; href: string }

export const NAV: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Media', href: '/media' },
  { name: 'Contact', href: '/contact' },
]

/* ---- inline icons ---- */
export const Icon = {
  play: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" {...p}><path d="M8 5v14l11-7z" /></svg>,
  menu: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>,
  close: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>,
  check: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6L9 17l-5-5" /></svg>,
  arrow: (p: HTMLAttributes<HTMLSpanElement>) => <span className="arr" {...p}>&rarr;</span>,
}

export function Eyebrow({ children, dark, center }: { children: ReactNode; dark?: boolean; center?: boolean }) {
  return <div className={'eyebrow' + (dark ? ' on-dark' : '') + (center ? ' center' : '')}>{children}</div>
}

export function Logo({ footer }: { footer?: boolean }) {
  return (
    <Link href="/" className="brand">
      <img src={A + (footer ? 'logo-onnavy.svg' : 'logo.svg')} alt="Todd Nepola" style={footer ? { height: 62 } : undefined} />
      <span className="bt"><span className="t1">Todd</span><span className="t2">Nepola</span></span>
    </Link>
  )
}

export function SocialBar() {
  return (
    <div className="topbar">
      <div className="topbar-grid">
        {SOCIALS.map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noreferrer">
            <img src={s.icon} alt={s.name} /> {s.handle}
          </a>
        ))}
      </div>
    </div>
  )
}

/* Star icon (solid) for reviews — Heroicons-style */
export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...p}><path d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .48.34l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38c.12.49-.42.88-.84.62l-4.73-2.88a.56.56 0 0 0-.58 0L7.2 20.18c-.43.26-.96-.13-.84-.62l1.28-5.38a.56.56 0 0 0-.18-.56l-4.2-3.6c-.38-.33-.18-.95.32-.99l5.52-.44a.56.56 0 0 0 .48-.34l2.13-5.11Z" /></svg>
)

'use client'
/* PageShell.tsx — inner-page banner (PageHero) + closing call-to-action band
   (CTABand), from the design bundle's pageshell.jsx. */
import Link from 'next/link'
import type { ReactNode } from 'react'
import { A, Icon, Eyebrow } from './atoms'
import { useOrder } from './Shell'

/* Inner-page hero banner. `bg` is an asset filename. */
export function PageHero({
  eyebrow, title, sub, bg, short, children,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  sub?: ReactNode
  bg: string
  short?: boolean
  children?: ReactNode
}) {
  return (
    <section className={'phero' + (short ? ' short' : '')}>
      <div className="phero-bg" style={{ backgroundImage: `url(${A + bg})` }} />
      <div className="phero-scrim" />
      <div className="container phero-inner">
        {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
        <h1>{title}</h1>
        {sub && <p className="phero-sub">{sub}</p>}
        {children}
      </div>
    </section>
  )
}

type CTAAction = { label: string; href?: string; order?: boolean }

/* Closing call-to-action band. `primary.order` opens the order modal. */
export function CTABand({
  eyebrow, title, text, bg = 'downtown-background.png', primary, secondary,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  text?: ReactNode
  bg?: string
  primary?: CTAAction
  secondary?: CTAAction
}) {
  const onOrder = useOrder()
  return (
    <section className="cta-band">
      <div className="cta-bg" style={{ backgroundImage: `url(${A + bg})` }} />
      <div className="cta-scrim" />
      <div className="container cta-inner">
        {eyebrow && <Eyebrow dark center>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        <div className="actions">
          {primary && (primary.order
            ? <button className="btn btn-gold" onClick={onOrder}>{primary.label} <Icon.arrow /></button>
            : <Link className="btn btn-gold" href={primary.href!}>{primary.label} <Icon.arrow /></Link>)}
          {secondary && <Link className="btn btn-ghost-light" href={secondary.href!}>{secondary.label}</Link>}
        </div>
      </div>
    </section>
  )
}

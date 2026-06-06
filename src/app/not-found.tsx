import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="h-display" style={{ fontSize: 'clamp(5rem,16vw,11rem)', color: 'var(--gold-500)', lineHeight: 0.9 }}>404</div>
        <h1 className="h-2" style={{ marginTop: 18 }}>Page Not Found</h1>
        <p className="lead muted" style={{ maxWidth: 520, margin: '16px auto 0' }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 30 }}>
          <Link className="btn btn-primary" href="/">Back to Home</Link>
          <Link className="btn btn-invert" href="/contact">Contact Us</Link>
        </div>
      </div>
    </main>
  )
}

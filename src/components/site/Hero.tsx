'use client'
/* Hero.tsx — video-style hero + stat strip (from the design bundle's hero.jsx).
   The voice player streams Todd's recorded message (public/audio/todd-intro.mp3). */
import { useState, useRef, useEffect, type SVGProps, type SyntheticEvent, type PointerEvent as ReactPointerEvent } from 'react'
import { Icon, Eyebrow } from './atoms'

/* ---- audio player icons ---- */
const PlayerIcon = {
  play: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" {...p}><path d="M8 5v14l11-7z" /></svg>,
  pause: (p: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" {...p}><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /></svg>,
  back15: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3.5 9.5A9 9 0 1 1 4 14" /><path d="M3.5 5v4.5H8" />
      <text x="12" y="15.5" fontSize="7.5" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle" fontFamily="system-ui">15</text>
    </svg>
  ),
  fwd15: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20.5 9.5A9 9 0 1 0 20 14" /><path d="M20.5 5v4.5H16" />
      <text x="12" y="15.5" fontSize="7.5" fontWeight="700" fill="currentColor" stroke="none" textAnchor="middle" fontFamily="system-ui">15</text>
    </svg>
  ),
  replay: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" />
    </svg>
  ),
}

/* Configurable audio source — a real recording, so the player uses its true duration.
   Set to null to fall back to a simulated clock (no <audio> element mounted). */
const VOICE_SRC: string | null = '/audio/todd-intro.mp3'
const VOICE_FALLBACK_DURATION = 299 // 4:59 — clip length, shown until <audio> metadata loads
const SPEEDS = [1, 1.25, 1.5, 2]

function fmtTime(s: number) {
  s = Math.max(0, Math.floor(s || 0))
  const m = Math.floor(s / 60)
  const r = s % 60
  return m + ':' + String(r).padStart(2, '0')
}

function VoicePlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const rafRef = useRef<number>(0)
  const simRef = useRef({ last: 0 })
  const [hasAudio, setHasAudio] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [dur, setDur] = useState(VOICE_FALLBACK_DURATION)
  const [speed, setSpeed] = useState(1)
  const [dragging, setDragging] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  // keep playback rate in sync with real audio
  useEffect(() => {
    if (hasAudio && audioRef.current) audioRef.current.playbackRate = speed
  }, [speed, hasAudio])

  // adopt the real audio if its metadata loaded before React attached the
  // onLoadedMetadata handler (cached/instant loads fire the event very early)
  useEffect(() => {
    const a = audioRef.current
    if (a && a.readyState >= 1 && isFinite(a.duration) && a.duration > 0) {
      setHasAudio(true)
      setDur(a.duration)
    }
  }, [])

  // simulated clock (used when no real audio file is available)
  useEffect(() => {
    if (hasAudio) return
    if (!playing) { cancelAnimationFrame(rafRef.current); return }
    simRef.current.last = performance.now()
    const tick = (now: number) => {
      const dt = (now - simRef.current.last) / 1000
      simRef.current.last = now
      setTime((t) => {
        const nt = t + dt * speed
        if (nt >= dur) { setPlaying(false); return dur }
        return nt
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [playing, speed, dur, hasAudio])

  const onLoaded = (e: SyntheticEvent<HTMLAudioElement>) => {
    const d = e.currentTarget.duration
    if (d && isFinite(d) && d > 0) { setHasAudio(true); setDur(d) }
  }

  const toggle = () => {
    const a = audioRef.current
    if (hasAudio && a) {
      if (a.paused) { a.play(); setPlaying(true) } else { a.pause(); setPlaying(false) }
    } else {
      if (time >= dur) setTime(0)
      setPlaying((p) => !p)
    }
  }

  const seekTo = (t: number) => {
    t = Math.min(dur, Math.max(0, t))
    setTime(t)
    if (hasAudio && audioRef.current) audioRef.current.currentTime = t
  }
  const skip = (delta: number) => seekTo(time + delta)
  const replay = () => { seekTo(0); if (!playing) toggle() }
  const cycleSpeed = () => setSpeed((s) => SPEEDS[(SPEEDS.indexOf(s) + 1) % SPEEDS.length])

  const posFromEvent = (clientX: number) => {
    const r = barRef.current!.getBoundingClientRect()
    return Math.min(1, Math.max(0, (clientX - r.left) / r.width)) * dur
  }
  const onBarDown = (e: ReactPointerEvent) => {
    setDragging(true)
    seekTo(posFromEvent(e.clientX))
    const move = (ev: PointerEvent) => seekTo(posFromEvent(ev.clientX))
    const up = () => { setDragging(false); document.removeEventListener('pointermove', move); document.removeEventListener('pointerup', up) }
    document.addEventListener('pointermove', move)
    document.addEventListener('pointerup', up)
  }

  const pct = dur ? (time / dur) * 100 : 0

  return (
    <div className={'vplayer' + (playing ? ' is-playing' : '')}>
      {VOICE_SRC ? (
        <audio
          ref={audioRef}
          src={VOICE_SRC}
          preload="metadata"
          onLoadedMetadata={onLoaded}
          onTimeUpdate={(e) => { if (!dragging) setTime(e.currentTarget.currentTime) }}
          onEnded={() => setPlaying(false)}
        />
      ) : null}
      <button className="vp-main" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
        <span className="vp-eq" aria-hidden="true"><i /><i /><i /><i /></span>
        {playing ? <PlayerIcon.pause /> : <PlayerIcon.play />}
      </button>

      <div className="vp-body">
        <div className="vp-head">
          <span className="vp-kicker">In Todd&apos;s Words</span>
          <span className="vp-title">Why I Wrote My Book</span>
        </div>

        <div className="vp-bar" ref={barRef} onPointerDown={onBarDown} role="slider"
          aria-label="Seek" aria-valuemin={0} aria-valuemax={Math.round(dur)} aria-valuenow={Math.round(time)}>
          <div className="vp-bar-fill" style={{ width: pct + '%' }} />
          <div className="vp-bar-knob" style={{ left: pct + '%' }} />
        </div>

        <div className="vp-controls">
          <div className="vp-time"><span>{fmtTime(time)}</span> / <span>{fmtTime(dur)}</span></div>
          <div className="vp-btns">
            <button className="vp-ic" onClick={() => skip(-15)} aria-label="Back 15 seconds"><PlayerIcon.back15 /></button>
            <button className="vp-ic" onClick={replay} aria-label="Replay from start"><PlayerIcon.replay /></button>
            <button className="vp-ic" onClick={() => skip(15)} aria-label="Forward 15 seconds"><PlayerIcon.fwd15 /></button>
          </div>
          <button className="vp-speed" onClick={cycleSpeed} aria-label="Playback speed">{speed}&times;</button>
        </div>
      </div>
    </div>
  )
}

export function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-scrim" />
      <div className="container hero-inner">
        <Eyebrow dark>South Florida · Commercial Real Estate</Eyebrow>
        <h1>Keeping It <em>Real</em><br />on Commercial<br />Real Estate</h1>
        <p className="hero-sub">
          25+ years of real deals, plain answers, and hard-won lessons from one of South Florida&apos;s
          most recognized commercial real estate investors &mdash; now in a book that gives every dollar to charity.
        </p>
        <div className="hero-actions">
          <button className="btn btn-gold" onClick={onOrder}>Order the Book <Icon.arrow /></button>
        </div>
        <VoicePlayer />
      </div>
    </section>
  )
}

const STATS = [
  { v: '25+', l: 'Years in CRE' },
  { v: '$100M+', l: 'Properties Transacted' },
  { v: 'Power Broker', l: 'CoStar Award Winner' },
  { v: '100%', l: 'Book Proceeds to Charity' },
]

export function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-inner">
          {STATS.map((s) => (
            <div className="stat" key={s.l}>
              <div className="v"><span>{s.v}</span></div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

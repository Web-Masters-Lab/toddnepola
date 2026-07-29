'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { css } from './dc'

const BOOKBABY = 'https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate'
const VIDEO_SRC = '/videos/pagehero1.mp4'

const ringStyle = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center;width:clamp(64px,7vw,88px);height:clamp(64px,7vw,88px);border-radius:9999px;background:rgba(255,255,255,.95);box-shadow:0 18px 40px rgba(0,0,0,.45);transition:transform .3s cubic-bezier(.2,.8,.2,1);'
const capStyle = 'position:absolute;left:clamp(14px,2vw,22px);bottom:clamp(14px,2vw,22px);right:clamp(14px,2vw,22px);display:flex;flex-wrap:wrap;align-items:baseline;gap:10px;text-align:left;'

/**
 * Homepage hero with the video-poster player. Ported from Home.dc.html's DCLogic:
 * poster → play → autoplaying <video> (controls on hover, pause on scroll-away /
 * tab-hide), with a pause overlay and a failure state.
 */
export function HomeHero() {
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const [failed, setFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const heroState = playing && !paused ? 'playing' : 'idle'
  const showPoster = !playing
  const showPausedOverlay = playing && paused && !failed
  const isFile = playing && !failed
  const showPlayLabel = !playing || paused

  const play = useCallback(() => {
    setPlaying(true)
    setFailed(false)
    setPaused(false)
  }, [])

  const toggle = useCallback(() => {
    if (!playing) {
      play()
      return
    }
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      const p = el.play()
      if (p && p.catch) p.catch(() => {})
    } else {
      el.pause()
    }
  }, [playing, play])

  // Pause on tab hide + kill on unload (mirrors the design's lifecycle handlers).
  useEffect(() => {
    const onVis = () => {
      const el = videoRef.current
      if (document.hidden && el && !el.paused) el.pause()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  // Autoplay + pause-when-offscreen for the active video element.
  useEffect(() => {
    const el = videoRef.current
    if (!el || !isFile) return
    const p = el.play()
    if (p && p.catch) p.catch(() => {})
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting && el && !el.paused) el.pause()
        })
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [isFile])

  const setControls = (on: boolean) => {
    if (videoRef.current) videoRef.current.controls = on
  }

  return (
    <section
      data-hero
      style={css('position:relative;overflow:hidden;background-color:#3b2b23;background-image:linear-gradient(90deg,rgba(0,0,0,.62) 0%,rgba(0,0,0,.7) 100%),url("/images/hero-books-topdown.webp");background-size:auto,cover;background-position:center,left center;background-repeat:no-repeat,no-repeat;')}
    >
      <div data-hero-inner style={css('max-width:1152px;margin:0 auto;padding:clamp(48px,6vw,84px) 20px;')}>
        <div data-hero-grid data-hero-state={heroState} style={css('display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:clamp(32px,4vw,56px);align-items:center;')}>

          <div data-hero-spacer aria-hidden="true" style={css('display:none;')} />

          <div data-hero-text style={css('display:flex;flex-direction:column;gap:20px;')}>
            <p style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-size:14px;letter-spacing:.16em;text-transform:uppercase;color:#8fa6ff;")}>In Todd&apos;s own words</p>
            <h1 style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;color:#fff;font-size:clamp(38px,5.6vw,68px);line-height:.98;letter-spacing:-.5px;text-wrap:balance;")}>Why did I write my book?</h1>
            <p style={css('margin:0;color:#cfd8f5;font-size:clamp(16px,1.7vw,20px);line-height:1.6;max-width:46ch;text-wrap:pretty;')}>After 25 years of investors asking him the same questions, Todd sat down and answered them all — and gave every dollar the book earns to charity. Here&apos;s the short version, from him.</p>
            <div style={css('display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:4px;')}>
              <button type="button" onClick={toggle} data-inv-cta style={css("display:flex;align-items:center;gap:10px;background:#fff;color:#0A278D;font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:18px;padding:10px 26px;border-radius:8px;border:2px solid #fff;cursor:pointer;transition:all .25s;-webkit-tap-highlight-color:transparent;")}>
                {showPlayLabel ? (
                  <span style={css('display:flex;align-items:center;gap:10px;')}>
                    <span style={css('width:0;height:0;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:11px solid currentColor;')} />
                    <span>WATCH THE VIDEO</span>
                  </span>
                ) : (
                  <span style={css('display:flex;align-items:center;gap:10px;')}>
                    <span style={css('display:flex;gap:3px;')}>
                      <span style={css('width:4px;height:14px;background:currentColor;display:block;')} />
                      <span style={css('width:4px;height:14px;background:currentColor;display:block;')} />
                    </span>
                    <span>PAUSE THE VIDEO</span>
                  </span>
                )}
              </button>
              <a href={BOOKBABY} data-book-modal data-inv-cta-alt style={css("background:transparent;color:#fff;font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:18px;padding:10px 26px;border-radius:8px;text-decoration:none;border:2px solid rgba(255,255,255,.55);transition:all .25s;-webkit-tap-highlight-color:transparent;")}>GET A COPY</a>
            </div>
          </div>

          <div
            data-hero-media
            onMouseEnter={() => setControls(true)}
            onMouseLeave={() => setControls(false)}
            style={css('position:relative;width:100%;max-width:400px;margin-left:auto;aspect-ratio:4/5;border-radius:8px;overflow:hidden;background:#050f2b;border:1px solid rgba(255,255,255,.16);box-shadow:0 40px 80px rgba(0,0,0,.5);')}
          >
            {showPoster && (
              <button type="button" onClick={play} aria-label="Play the video: why Todd wrote his book" data-hero-play style={css('position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;background:transparent;cursor:pointer;display:block;-webkit-tap-highlight-color:transparent;')}>
                <img src="/images/hero-video-poster.webp" alt="" style={css('position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 22%;display:block;')} />
                <span style={css('position:absolute;inset:0;background:linear-gradient(to top,rgba(5,16,43,.78) 0%,rgba(5,16,43,.22) 55%,rgba(5,16,43,.05) 100%);display:block;')} />
                <span data-hero-ring style={css(ringStyle)}>
                  <span style={css('width:0;height:0;margin-left:6px;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:22px solid #0A278D;')} />
                </span>
                <span data-hero-cap style={css(capStyle)}>
                  <span style={css("font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;color:#fff;font-size:clamp(15px,1.5vw,19px);letter-spacing:.02em;")}>Keeping it Real — the story behind the book</span>
                  <span style={css("font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#8fa6ff;")}>Watch</span>
                </span>
              </button>
            )}

            {isFile && (
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                playsInline
                preload="metadata"
                onError={() => setFailed(true)}
                onPlay={() => setPaused(false)}
                onPause={() => setPaused(true)}
                onEnded={() => setPaused(true)}
                style={css('position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#050f2b;display:block;')}
              />
            )}

            {showPausedOverlay && (
              <button type="button" onClick={toggle} aria-label="Resume the video" data-hero-play data-hero-paused style={css('position:absolute;inset:0;z-index:5;width:100%;height:100%;padding:0;border:0;cursor:pointer;background:linear-gradient(to top,rgba(5,16,43,.78) 0%,rgba(5,16,43,.3) 55%,rgba(5,16,43,.12) 100%);-webkit-tap-highlight-color:transparent;')}>
                <span data-hero-ring style={css(ringStyle)}>
                  <span style={css('width:0;height:0;margin-left:6px;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:22px solid #0A278D;')} />
                </span>
                <span data-hero-cap style={css(capStyle)}>
                  <span style={css("font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;color:#fff;font-size:clamp(15px,1.5vw,19px);")}>Keeping it Real — the story behind the book</span>
                  <span style={css("font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#8fa6ff;")}>Paused</span>
                </span>
              </button>
            )}

            {failed && (
              <div style={css('position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:24px;background:#050f2b;')}>
                <p style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;color:#fff;font-size:clamp(17px,1.8vw,21px);")}>Video coming soon</p>
                <p style={css('margin:0;color:#8fa6ff;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;line-height:1.6;')}>the video couldn&apos;t load right now</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

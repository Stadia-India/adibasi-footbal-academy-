import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Fades/slides up any [data-reveal] element inside ref; optional [data-parallax] images.
export function useReveal(ref) {
  useEffect(() => {
    if (reduced() || !ref.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el, i) =>
        gsap.from(el, { y: 36, opacity: 0, duration: 0.9, ease: 'power3.out', delay: (i % 4) * 0.05,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true } }))
      gsap.utils.toArray('[data-parallax]').forEach(el =>
        gsap.to(el, { yPercent: 14, ease: 'none', scrollTrigger: { trigger: el.closest('section'), scrub: true } }))
    }, ref)
    return () => ctx.revert()
  }, [ref])
}

export function Photo({ src, alt = '', label = 'Add academy photo', className = '', ...rest }) {
  if (src) return <span className="illw"><img className={`photo ${className}`} src={src} alt={alt} loading="lazy" decoding="async" {...rest} />{src.includes('/illustrations/') && <i className="ill-tag">Illustration</i>}</span>
  return (
    <div {...rest} className={`photo ph ${className}`} role="img" aria-label={`${label} (placeholder)`}>
      <svg viewBox="0 0 100 64" aria-hidden="true"><rect x="2" y="2" width="96" height="60" /><line x1="50" y1="2" x2="50" y2="62" /><circle cx="50" cy="32" r="9" /></svg>
      <span>{label}</span>
    </div>
  )
}

export function SectionTitle({ eyebrow, children, dark, center }) {
  return (
    <header className={`sec-title ${dark ? 'dark' : ''} ${center ? 'center' : ''}`} data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
    </header>
  )
}

export function Pitch({ dots = [], lines = [], label }) {
  return (
    <svg className="pitch" viewBox="0 0 100 64" role="img" aria-label={label}>
      <g className="pl"><rect x="2" y="2" width="96" height="60" pathLength="1" /><line x1="50" y1="2" x2="50" y2="62" pathLength="1" /><circle cx="50" cy="32" r="8" pathLength="1" /><rect x="2" y="18" width="14" height="28" pathLength="1" /><rect x="84" y="18" width="14" height="28" pathLength="1" /></g>
      {lines.map(([a, b], i) => <line key={i} className="pass" style={{ animationDelay: `${i * 0.3}s` }} x1={dots[a][0]} y1={dots[a][1]} x2={dots[b][0]} y2={dots[b][1]} />)}
      {dots.map(([x, y], i) => <circle key={i} className="dot" style={{ animationDelay: `${i * 0.2}s` }} cx={x} cy={y} r="2.4" />)}
    </svg>
  )
}

export function Marquee({ text = 'Every girl deserves a chance to play', dark }) {
  const t = Array.from({ length: 8 }, (_, i) => <span key={i}>{text} <b>⚽</b></span>)
  return <div className={`marquee ${dark ? 'dark' : ''}`} aria-hidden="true"><div className="mq-track">{t}{t}</div></div>
}

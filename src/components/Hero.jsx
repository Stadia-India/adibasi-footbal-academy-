import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowRight, Play, MapPin } from 'lucide-react'
import { academy } from '../data/academyData'
import { Photo, reduced } from './Common'
export default function Hero() {
  const root = useRef()
  useEffect(() => {
    if (reduced()) return
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('.orb', { scale: 0, opacity: 0, duration: 1.6, stagger: .2 }).from('.hero-img', { clipPath: 'inset(0 0 100% 0)', duration: 1.3 })
        .from('.hl span', { yPercent: 115, duration: 1, stagger: 0.14 }, '-=0.8')
        .from('.hero-sub, .hero-cta', { y: 24, opacity: 0, stagger: 0.12, duration: 0.8 }, '-=0.4')
        .from('.hero-card', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section className="hero" id="home" ref={root}>
      <svg className="hero-lines" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className="draw"><rect x="60" y="60" width="1080" height="580" pathLength="1" /><line x1="600" y1="60" x2="600" y2="640" pathLength="1" /><circle cx="600" cy="350" r="90" pathLength="1" /><rect x="60" y="220" width="150" height="260" pathLength="1" /><rect x="990" y="220" width="150" height="260" pathLength="1" /></g>
        <path className="draw ball-path" d="M80 620 C 360 120, 760 80, 1120 300" pathLength="1" />
      </svg>
      <div className="orb o1" aria-hidden="true" /><div className="orb o2" aria-hidden="true" /><div className="ball3d" aria-hidden="true">⚽</div>
      <div className="hero-copy">
        <Link className="live-pill" to="/contact" aria-label="Opening soon in Kolkata. Contact us"><i aria-hidden="true" />Opening soon in Kolkata</Link>
        <p className="eyebrow">Grassroots football • Shyamnagar &amp; Kolkata, West Bengal</p>
        <h1 className="hl" aria-label="The dream doesn't stop at the village.">
          <div><span>The <em>dream</em></span></div><div><span>doesn’t stop</span></div><div><span>at the village.</span></div>
        </h1>
        <p className="hero-sub">From local fields to national opportunities. We are building a future where every girl has the confidence, opportunity and freedom to play football.</p>
        <div className="hero-cta">
          <Link className="btn" to="/about">Explore our story <ArrowRight size={18} /></Link>
          <a className="btn ghost" href="#video"><Play size={18} /> Watch our journey</a>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-img"><Photo src={academy.images.hero} alt="Academy team with a coach, holding the First Runners-up cheque" label="Hero photo" /></div>
        <Link className="hero-card" to="/contact"><MapPin size={22} /><span>Our academy is opening soon in Kolkata<small>Get in touch with us →</small></span></Link>
        <div className="float-stat s2">Shyamnagar · Hooghly</div>
      </div>
      <div className="scroll-ind" aria-hidden="true"><i /></div>
    </section>
  )
}

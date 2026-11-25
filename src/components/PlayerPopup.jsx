import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { X, ArrowRight, ExternalLink } from 'lucide-react'
import { academy, featuredPlayer as f } from '../data/academyData'
export default function PlayerPopup() {
  const [open, setOpen] = useState(false), [noPhoto, setNoPhoto] = useState(!f.photo), btn = useRef()
  useEffect(() => {
    if (!f.show) return
    // Runs on every full page load/refresh (no "already seen" memory)
    const t = setTimeout(() => setOpen(true), 1700) // after the page-load curtain
    return () => clearTimeout(t)
  }, [])
  const close = () => setOpen(false)
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement, k = e => e.key === 'Escape' && close()
    document.body.style.overflow = 'hidden'; addEventListener('keydown', k); btn.current?.focus()
    return () => { document.body.style.overflow = ''; removeEventListener('keydown', k); prev?.focus?.() }
  }, [open])
  if (!open) return null
  return (
    <div className="pop" onMouseDown={e => e.target === e.currentTarget && close()}>
      <div className="pop-card" role="dialog" aria-modal="true" aria-labelledby="pop-title">
        <button ref={btn} className="pop-x" onClick={close} aria-label="Close poster"><X size={22} /></button>
        <div className="pop-media">
          {noPhoto ? <img className="pf" src={academy.logo} alt="" /> : <img className="pp" src={f.photo} alt={`${f.name} holding a Player of the Match award`} onError={() => setNoPhoto(true)} />}
          <span className="pop-u" aria-hidden="true">{f.level}</span>
          {!noPhoto && f.photoCredit && <span className="pop-credit">{f.photoCredit}</span>}
        </div>
        <div className="pop-body">
          <span className="pop-tag">{f.tag}</span>
          <h2 id="pop-title">{f.headline[0]} <em>{f.headline[1]}</em></h2>
          <p>{f.text}</p>
          <ul className="pop-list">{f.details.map(([k, v]) => <li key={k}><b>{k}</b><span>{v}</span></li>)}</ul>
          <h3 className="pop-sub">Career highlights</h3>
          <ul className="pop-hl">{f.highlights.map(([d, t, x]) => <li key={t}><span className="pop-date">{d}</span><div><strong>{t}</strong><p>{x}</p></div></li>)}</ul>
          <p className="pop-src">Sources: {f.sources.map(([n, u], i) => <span key={u}>{i > 0 && ' · '}<a href={u} target="_blank" rel="noreferrer noopener">{n} <ExternalLink size={12} /></a></span>)}</p>
          <div className="pop-cta">
            <Link className="btn" to="/about" onClick={close}>Our story <ArrowRight size={18} /></Link>
            <button className="btn ghost" onClick={close}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

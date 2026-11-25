import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { gallery } from '../data/academyData'
import { Photo } from './Common'
const cats = ['All', 'Matches', 'Team', 'Moments']
export default function Gallery() {
  const [cat, setCat] = useState('All'), [i, setI] = useState(null)
  const items = gallery.filter(g => cat === 'All' || g.category === cat)
  useEffect(() => {
    if (i === null) return
    const k = e => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') setI(v => (v + 1) % items.length); if (e.key === 'ArrowLeft') setI(v => (v - 1 + items.length) % items.length) }
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [i, items.length])
  return (
    <>
      <div className="filters" role="tablist">{cats.map(c => <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
      {items.length ? <div className="masonry">{items.map((g, n) => <button key={g.src} className="mitem" onClick={() => setI(n)}><Photo src={g.src} alt={g.alt} /></button>)}</div>
        : <p className="empty">No photos in this category yet. Add genuine academy photos in <code>src/data/academyData.js</code>.</p>}
      {i !== null && items[i] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setI(null)}>
          <button className="lb-x" aria-label="Close"><X /></button>
          <button className="lb-n l" aria-label="Previous" onClick={e => { e.stopPropagation(); setI((i - 1 + items.length) % items.length) }}><ChevronLeft /></button>
          <img src={items[i].src} alt={items[i].alt} onClick={e => e.stopPropagation()} />
          <button className="lb-n r" aria-label="Next" onClick={e => { e.stopPropagation(); setI((i + 1) % items.length) }}><ChevronRight /></button>
        </div>)}
    </>
  )
}

import { useEffect, useRef } from 'react'
// Scroll progress bar, magnetic buttons and card tilt. Pointer-based, skipped for touch/reduced motion. The normal system cursor is used.
export default function Effects() {
  const bar = useRef()
  useEffect(() => {
    const onScroll = () => { const h = document.documentElement; bar.current.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})` }
    addEventListener('scroll', onScroll, { passive: true })
    const fine = matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine) return () => removeEventListener('scroll', onScroll)
    const move = e => {
      const x = e.clientX, y = e.clientY
      const m = e.target.closest('.btn')
      if (m) { const r = m.getBoundingClientRect(); m.style.transform = `translate(${(x - r.left - r.width / 2) * .18}px,${(y - r.top - r.height / 2) * .28}px)` }
      const c = e.target.closest('.tcard,.ccard')
      if (c) { const r = c.getBoundingClientRect(); c.style.transform = `perspective(700px) rotateY(${((x - r.left) / r.width - .5) * 8}deg) rotateX(${-((y - r.top) / r.height - .5) * 8}deg) translateY(-4px)` }
    }
    const leave = e => { const t = e.target; if (t.closest) { const m = t.closest('.btn,.tcard,.ccard'); if (m && !m.contains(e.relatedTarget)) m.style.transform = '' } }
    addEventListener('mousemove', move); document.addEventListener('mouseout', leave)
    return () => { removeEventListener('scroll', onScroll); removeEventListener('mousemove', move); document.removeEventListener('mouseout', leave) }
  }, [])
  return <><div className="progress" ref={bar} /><div className="curtain" aria-hidden="true" /></>
}

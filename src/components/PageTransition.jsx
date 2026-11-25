import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
// Football rolls across, a circular mask expands, next page is revealed. Hidden on mobile / reduced motion via CSS.
export default function PageTransition() {
  const { pathname } = useLocation(), first = useRef(true), [run, setRun] = useState(false)
  useEffect(() => {
    if (first.current) { first.current = false; return }
    setRun(true); const t = setTimeout(() => setRun(false), 1100); return () => clearTimeout(t)
  }, [pathname])
  return run ? <div className="pt" aria-hidden="true"><div className="pt-ball">⚽</div><div className="pt-circle" /></div> : null
}

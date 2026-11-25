import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'
import { academy } from '../data/academyData'
import ThemeToggle from './ThemeToggle'
const links = [['Home', '/'], ['About', '/about'], ['Achievements', '/achievements'], ['Gallery', '/gallery'], ['Contact', '/contact']]
export function Emblem({ className = '' }) {
  return <span className={`emblem ${className}`}><img src={academy.logo} alt="" width="46" height="46" /></span>
}
export default function Navbar() {
  const [solid, setSolid] = useState(false), [open, setOpen] = useState(false), { pathname } = useLocation()
  useEffect(() => { const f = () => setSolid(window.scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  useEffect(() => { const k = e => e.key === 'Escape' && setOpen(false); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  return (
    <header className={`nav ${solid || open ? 'solid' : ''} ${open ? 'is-open' : ''}`}>
      <Link to="/" className="brand" aria-label={academy.name}><Emblem /><span>Shyamnagar Adibasi Unite<br />Football Academy</span></Link>
      <nav id="main-nav" className={`links ${open ? 'open' : ''}`} aria-label="Main">
        {links.map(([t, to], i) => <NavLink key={t} to={to} end style={{ '--i': i }} className={({ isActive }) => (isActive ? 'active' : '')}>{t}</NavLink>)}
        <Link to="/contact#support" className="btn small mobile-only" style={{ '--i': 6 }}><Heart size={16} /> Support Us</Link>
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <Link to="/contact#support" className="btn small desk-only"><Heart size={16} /> Support Us</Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}

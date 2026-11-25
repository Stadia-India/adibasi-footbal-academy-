import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Effects from './components/Effects'
import PlayerPopup from './components/PlayerPopup'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
const pick = k => lazy(() => import('./pages/Pages').then(m => ({ default: m[k] })))
const About = pick('About'), Achievements = pick('Achievements'), GalleryPage = pick('GalleryPage'), Contact = pick('Contact'), Legal = pick('Legal')
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => { if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 150); else window.scrollTo(0, 0) }, [pathname, hash])
  return null
}
export default function App() {
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Effects /><ScrollManager /><PageTransition /><Navbar />
    <main id="main"><Suspense fallback={<div className="loading">Loading…</div>}>
      <Routes>
        <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/players" element={<Navigate to="/" replace />} />
        <Route path="/achievements" element={<Achievements />} /><Route path="/gallery" element={<GalleryPage />} /><Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Legal kind="privacy" />} /><Route path="/terms" element={<Legal kind="terms" />} />
        <Route path="*" element={<Home />} />
      </Routes></Suspense></main>
    <Footer /><PlayerPopup />
  </>)
}

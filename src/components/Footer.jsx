import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Twitter, MapPin, Mail, Phone } from 'lucide-react'
import { academy } from '../data/academyData'
import { Emblem } from './Navbar'
const icons = { facebook: Facebook, instagram: Instagram, youtube: Youtube, x: Twitter }
export default function Footer() {
  const { social, contact } = academy
  return (
    <footer className="footer">
      <p className="foot-big">Every girl deserves the chance to play.</p>
      <div className="foot-grid">
        <div><div className="brand foot-brand"><Emblem /><strong>{academy.name}</strong></div>
          <p className="muted-l">Creating opportunities for girls through football: training, confidence, discipline and teamwork.</p>
          <p className="muted-l"><MapPin size={15} /> {academy.location}</p></div>
        <nav aria-label="Footer"><h3>Explore</h3>{[['Home', '/'], ['About', '/about'], ['Achievements', '/achievements'], ['Gallery', '/gallery'], ['Contact', '/contact']].map(([t, to]) => <Link key={t} to={to}>{t}</Link>)}</nav>
        <div><h3>Contact</h3>
          {contact.email && <a href={`mailto:${contact.email}`}><Mail size={15} /> {contact.email}</a>}
          {contact.phone && <a href={`tel:${contact.phone}`}><Phone size={15} /> {contact.phone}</a>}
          {!contact.email && !contact.phone && <Link to="/contact">Send us a message</Link>}
          <div className="social">{Object.entries(social).filter(([, u]) => u).map(([k, u]) => { const I = icons[k]; return <a key={k} href={u} aria-label={k} target="_blank" rel="noreferrer"><I size={18} /></a> })}</div></div>
      </div>
      <div className="foot-bottom"><span>© {new Date().getFullYear()} {academy.name}</span><span><Link to="/privacy">Privacy Policy</Link> <Link to="/terms">Terms</Link></span></div>
    </footer>
  )
}

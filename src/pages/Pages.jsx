import { useEffect } from 'react'
import { VideoGrid, Founder, SeeJourney, Intro, Story, Mission, Spotlight, Competitions, Support } from '../components/Sections'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import { SectionTitle } from '../components/Common'
import { academy } from '../data/academyData'
import { MapPin } from 'lucide-react'
export function usePage(title, desc) {
  useEffect(() => {
    document.title = `${title} | Shyamnagar Adibasi Unite Football Academy`
    document.querySelector('meta[name="description"]')?.setAttribute('content', desc)
  }, [title, desc])
}
const Head = ({ t, children }) => <div className="page-head"><h1>{t}</h1>{children && <p>{children}</p>}</div>
export function About() { usePage('About', 'The story, mission and vision of Shyamnagar Adibasi Unite Football Academy, a girls grassroots football academy in Hooghly, West Bengal.'); return <><Head t="About the academy">Girls’ grassroots football in Shyamnagar, Hooghly.</Head><Intro /><Founder /><Story /><SeeJourney /><Mission /></> }
export function Achievements() { usePage('Achievements', 'India U-19 representation and competitions of Shyamnagar Adibasi Unite Football Academy.'); return <><Head t="Achievements" /><Spotlight /><Competitions /></> }
export function GalleryPage() { usePage('Gallery', 'Photos from training, matches and community moments at Shyamnagar Adibasi Unite Football Academy.'); return <><Head t="Gallery" /><section className="sec"><Gallery /></section><section className="sec video"><SectionTitle eyebrow="Videos" dark>Watch the academy in action.</SectionTitle><VideoGrid /></section></> }
export function Contact() {
  usePage('Contact', 'Contact Shyamnagar Adibasi Unite Football Academy in Shyamnagar, Hooghly, West Bengal.')
  return <><Head t="Contact"><MapPin size={16} /> {academy.location}</Head>
    <section className="sec split"><div><SectionTitle>Write to us.</SectionTitle><p className="lead">Questions, partnerships, equipment or volunteering — send a message and we will reply.</p></div><ContactForm /></section>
    <Support /></>
}
export function Legal({ kind }) {
  const privacy = kind === 'privacy'
  usePage(privacy ? 'Privacy Policy' : 'Terms & Conditions', privacy ? 'Privacy policy.' : 'Terms and conditions.')
  return <><Head t={privacy ? 'Privacy Policy' : 'Terms & Conditions'} /><section className="sec legal">
    {privacy ? <>
      <p>This is a starter policy. Have it reviewed and complete the details before publishing.</p>
      <h2>Information we collect</h2><p>When you use the contact form we receive the name, email, optional phone number and message you submit. We use it only to reply to you.</p>
      <h2>Photos and player information</h2><p>We publish names, photographs and stories of players only with written permission, and with guardian consent for players under 18.</p>
      <h2>Third parties</h2><p>The documentary video is served by YouTube (privacy-enhanced mode). If advertising is enabled in future, this policy will be updated to describe cookies and ad partners.</p>
      <h2>Contact</h2><p>Use the contact page to ask about or request removal of your information.</p></> : <>
      <p>This is a starter document. Have it reviewed before publishing.</p>
      <h2>Use of this website</h2><p>The content is provided to share the academy’s story. Do not copy photos, text or video without permission.</p>
      <h2>Accuracy</h2><p>We aim to publish verified information only and may update it at any time.</p>
      <h2>External links</h2><p>We are not responsible for the content of external websites.</p></>}
  </section></>
}

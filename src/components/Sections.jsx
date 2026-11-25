import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Play, ExternalLink, Star, Handshake, Mail } from 'lucide-react'
import { academy, achievement, players, competitions, chapters, training, videos, founder, reels } from '../data/academyData'
import { Photo, SectionTitle, Pitch, useReveal } from './Common'

export function Intro() {
  const r = useRef(); useReveal(r)
  return (
    <section className="sec intro" ref={r}>
      <span className="big-num" aria-hidden="true">11</span>
      <div className="split">
        <div>
          <SectionTitle eyebrow="About the academy">More than a football academy. A movement.</SectionTitle>
          <p data-reveal className="lead">At Shyamnagar Adibasi Unite Football Academy, football is more than a game. It is a pathway to confidence, opportunity, teamwork and a future that girls have the right to choose.</p>
          <Link data-reveal className="btn dark" to="/about">Explore the academy <ArrowRight size={18} /></Link>
        </div>
        <div className="img-wrap" data-reveal>
          <Photo src={academy.images.intro} alt="Girls training" label="Add photo: girls training" />
          <div className="loc-card"><MapPin size={18} /> {academy.location}</div>
        </div>
      </div>
    </section>
  )
}

export function PhotoReel({ items, label }) {
  return (
    <div className="reel-wrap" data-reveal>
      <p className="reel-label">{label}</p>
      <ul className="reel">{items.map(it => <li key={it.src}><figure><img src={it.src} alt={it.alt} loading="lazy" decoding="async" /><figcaption>{it.cap}</figcaption></figure></li>)}</ul>
    </div>
  )
}

export function Story() {
  const r = useRef(); useReveal(r)
  return (
    <section className="sec story" id="journey" ref={r}>
      <SectionTitle eyebrow="Our story" dark>Every great journey starts somewhere.</SectionTitle>
      <ol className="chapters">
        {chapters.map(([t, d], i) => (
          <li key={t} className="chapter" data-reveal>
            <Photo src={academy.images.story[i]} alt={t} label={`Add photo for chapter ${i + 1}`} />
            <span className="ch-n">Chapter {i + 1}</span><h3>{t}</h3><p>{d}</p>
          </li>
        ))}
      </ol>
      <PhotoReel items={reels.journey} label="Moments from our journey" />
    </section>
  )
}

export function Spotlight() {
  const r = useRef(); useReveal(r)
  const a = achievement, has = a.playerName
  return (
    <section className="spot" id="achievement" ref={r}>
      <div className="spot-bg"><Photo data-parallax src={a.photo || academy.images.achievement} alt="" label="Add achievement background photo" /></div>
      <div className="spot-light" aria-hidden="true" />
      <div className="spot-in">
        <Star className="spin-badge" size={34} aria-hidden="true" />
        <h2 data-reveal>From Shyamnagar<br />to the India U-19 stage.</h2>
        <p className="tag" data-reveal>{a.achievement}</p>
        <p data-reveal className="lead light">A player associated with Shyamnagar Adibasi Unite Football Academy reached the India U-19 national team level — a powerful milestone that reflects the possibilities created through grassroots football.</p>
        {has && <div className="verified" data-reveal>
          {a.photo && <img src={a.photo} alt={a.playerName} />}
          <div><h3>{a.playerName}</h3>
            <p>{[a.position, a.year].filter(Boolean).join(' • ')}</p>
            {a.verifiedDetails && <p>{a.verifiedDetails}</p>}{a.story && <p>{a.story}</p>}</div></div>}
        <ol className="path" data-reveal aria-label="Pathway">
          {['Village field', 'Academy training', 'Competition', 'India U-19'].map(s => <li key={s}>{s}</li>)}
        </ol>
      </div>
    </section>
  )
}

export function PlayerCard({ p }) {
  return (
    <article className="pcard">
      <Photo src={p.photo} alt={p.name} label="Player photo" />
      <div className="pc-info"><h3>{p.name}</h3><p className="pos">{[p.position, p.ageCategory].filter(Boolean).join(' • ')}</p>
        <div className="pc-more"><p>{p.story}</p>{p.achievements && <p><strong>{p.achievements}</strong></p>}</div></div>
    </article>
  )
}
export function PlayersGrid() {
  const r = useRef(); useReveal(r)
  return (
    <section className="sec" ref={r}>
      <SectionTitle eyebrow="Academy players">The players behind the dream.</SectionTitle>
      {players.length ? <div className="pgrid">{players.map(p => <PlayerCard key={p.name} p={p} />)}</div>
        : <p className="empty" data-reveal>No player profiles are published yet. Add players in <code>src/data/academyData.js</code> once each player (and guardian, for minors) has given written permission.</p>}
    </section>
  )
}

export function Training() {
  const r = useRef(); useReveal(r)
  return (
    <section className="sec soft" ref={r}>
      <SectionTitle eyebrow="Training & development">How a player grows.</SectionTitle>
      <div className="tgrid">
        {training.map(([t, d, dots, lines, img, alt]) => (
          <article key={t} className="tcard" data-reveal>
            <div className="tphoto"><Photo src={img} alt={alt} /><Pitch dots={dots} lines={lines} label={`${t} pitch diagram`} /></div>
            <h3>{t}</h3><p>{d}</p></article>
        ))}
      </div>
      <PhotoReel items={reels.training} label="On the training ground" />
    </section>
  )
}

export function Competitions() {
  const r = useRef(); useReveal(r)
  return (
    <section className="sec" ref={r}>
      <SectionTitle eyebrow="Matches & tournaments">Competitions and milestones.</SectionTitle>
      <div className="cgrid">
        {competitions.map(c => (
          <article key={c.title} className="ccard" data-reveal>
            <Photo src={c.photo} alt={c.title} label="Add photo" />
            <h3>{c.title}</h3>
            {c.year || c.result || c.category ? <p className="meta">{[c.year, c.category, c.result].filter(Boolean).join(' • ')}</p> : <p className="meta soon">Verified details coming soon</p>}
            {c.description && <p>{c.description}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

export function VideoGrid() {
  return (
    <div className="vgrid">
      {videos.map(v => (
        <figure key={v.src} className={`vcard ${v.tall ? 'tall' : ''}`} data-reveal>
          <video controls playsInline preload="none" poster={v.poster} aria-label={v.title}><source src={v.src} type="video/mp4" />Your browser cannot play this video.</video>
          <figcaption><h3>{v.title}</h3><p>{v.desc}</p></figcaption>
        </figure>
      ))}
    </div>
  )
}

export function VideoSection() {
  const r = useRef(); useReveal(r)
  return (
    <section className="sec video" id="video" ref={r}>
      <SectionTitle eyebrow="Videos" dark center>See the story. Feel the journey.</SectionTitle>
      <p className="lead light center-t">Training sessions and match-day moments from {academy.name}.</p>
      <VideoGrid />
    </section>
  )
}

export function Mission() {
  const r = useRef(); useReveal(r)
  return (
    <section className="sec mv" ref={r}>
      <div data-reveal><h2>Mission</h2><p>To create opportunities for girls through football by providing training, confidence, discipline, teamwork and a supportive environment where every player can pursue her dreams.</p></div>
      <div data-reveal><h2>Vision</h2><p>To build a stronger grassroots football community and help talented girls reach higher levels of football while inspiring future generations.</p></div>
    </section>
  )
}

export function Support() {
  const r = useRef(); useReveal(r)
  return (
    <section className="sec support" id="support" ref={r}>
      <SectionTitle eyebrow="Support the academy" dark>Help the next dream take the field.</SectionTitle>
      <p className="lead light" data-reveal>Every contribution of time, resources, equipment or support can help create more opportunities for young footballers.</p>
      <div className="row" data-reveal>
        <Link className="btn" to="/contact?subject=Support">Support the academy</Link>
        <Link className="btn ghost" to="/contact?subject=Partnership"><Handshake size={18} /> Become a partner</Link>
        <Link className="btn ghost" to="/contact"><Mail size={18} /> Contact us</Link>
      </div>
      {/* Add verified donation details, sponsors, equipment needs and volunteer roles here when available. */}
    </section>
  )
}

export function Founder() {
  const r = useRef(); useReveal(r)
  return (
    <section className="sec founder" id="founder" ref={r}>
      <div className="split">
        <div data-reveal className="founder-card">
          <img src={academy.logo} alt="" width="160" height="160" />
          <h3>{founder.name}</h3>
          <p>{founder.role}</p>
          <span>with {founder.partner}</span>
        </div>
        <div>
          <SectionTitle eyebrow="Our founder">Meet Raju Oraon.</SectionTitle>
          {founder.paragraphs.map(t => <p key={t} data-reveal className="lead">{t}</p>)}
          <p data-reveal className="src">Read more: {founder.sources.map(([n, u], i) => <span key={u}>{i > 0 && ' · '}<a href={u} target="_blank" rel="noreferrer noopener">{n} <ExternalLink size={13} /></a></span>)}</p>
        </div>
      </div>
    </section>
  )
}

export function SeeJourney() {
  const r = useRef(); useReveal(r)
  const [on, setOn] = useState(false), id = academy.videoId
  return (
    <section className="sec video" id="see-our-journey" ref={r}>
      <SectionTitle eyebrow="See our journey" dark center>From the village field to the big stage.</SectionTitle>
      <p className="lead light center-t">Watch the story of {academy.name} in our own video.</p>
      <div className="frame" data-reveal>
        {on ? <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title="See our journey: academy video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          : <button className="vthumb" onClick={() => setOn(true)} aria-label="Play our journey video" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.12),rgba(255,255,255,.12)),url(https://i.ytimg.com/vi/${id}/hqdefault.jpg),url(${academy.images.story[0]})` }}>
            <span className="play"><Play size={34} fill="currentColor" /></span></button>}
      </div>
      <p className="lead light center-t" style={{ marginTop: '1rem' }}><a href={`https://youtu.be/${id}`} target="_blank" rel="noreferrer noopener" style={{ color: '#fff' }}>Open on YouTube <ExternalLink size={14} /></a></p>
    </section>
  )
}

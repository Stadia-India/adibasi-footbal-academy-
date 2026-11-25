import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { academy } from '../data/academyData'
export default function ContactForm() {
  const [q] = useSearchParams()
  const [f, setF] = useState({ name: '', email: '', phone: '', subject: q.get('subject') || '', message: '' })
  const [err, setErr] = useState({}), [state, setState] = useState('idle')
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = async e => {
    e.preventDefault()
    const v = {}
    if (f.name.trim().length < 2) v.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) v.email = 'Enter a valid email address.'
    if (f.phone && !/^[+\d\s-]{7,15}$/.test(f.phone)) v.phone = 'Enter a valid phone number or leave it blank.'
    if (!f.subject.trim()) v.subject = 'Enter a subject.'
    if (f.message.trim().length < 10) v.message = 'Write at least 10 characters.'
    setErr(v); if (Object.keys(v).length) return
    const wa = String(academy.whatsapp || '').replace(/\D/g, '')
    if (wa) {
      const text = ['*New message from website*', `Name: ${f.name.trim()}`, `Email: ${f.email.trim()}`, ...(f.phone.trim() ? [`Phone: ${f.phone.trim()}`] : []), `Subject: ${f.subject.trim()}`, '', f.message.trim()].join('\n')
      // Open synchronously inside the click handler so popup blockers allow it
      window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
      setState('success'); return
    }
    if (!academy.formEndpoint) { setState('unconfigured'); return }
    setState('loading')
    try {
      const r = await fetch(academy.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(f) })
      if (!r.ok) throw new Error(); setState('success')
    } catch { setState('error') }
  }
  const F = (k, label, type = 'text', req = true) => (
    <label className="fld">{label}{!req && ' (optional)'}
      {type === 'area' ? <textarea rows="5" value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} /> : <input type={type} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} />}
      {err[k] && <span className="ferr" role="alert">{err[k]}</span>}</label>)
  if (state === 'success') return <p className="note ok" role="status">{academy.whatsapp ? 'WhatsApp has opened with your message. Press Send there to deliver it to us.' : 'Thank you. Your message was sent and we will reply soon.'}</p>
  return (
    <form onSubmit={submit} noValidate className="form">
      {F('name', 'Name')}{F('email', 'Email', 'email')}{F('phone', 'Phone', 'tel', false)}{F('subject', 'Subject')}{F('message', 'Message', 'area')}
      <button className="btn dark" disabled={state === 'loading'}>{state === 'loading' ? 'Sending…' : 'Send message'}</button>
      {state === 'error' && <p className="note bad" role="alert">The message could not be sent. Check your connection and try again.</p>}
      {state === 'unconfigured' && <p className="note bad" role="alert">The form is not connected yet. Set <code>formEndpoint</code> in academyData.js (see README).</p>}
    </form>
  )
}

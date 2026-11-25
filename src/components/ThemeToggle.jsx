import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
const get = () => document.documentElement.getAttribute('data-theme') || 'light'
export default function ThemeToggle() {
  const [theme, setTheme] = useState(get)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#16241C' : '#F6F9EF')
    try { localStorage.setItem('theme', theme) } catch (e) { /* storage unavailable */ }
  }, [theme])
  const dark = theme === 'dark'
  return (
    <button className="theme-toggle" onClick={() => setTheme(dark ? 'light' : 'dark')} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Light mode' : 'Dark mode'}>
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

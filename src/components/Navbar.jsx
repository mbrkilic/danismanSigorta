import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Sigorta Türleri', href: '#sigortalar' },
    { label: 'Nasıl Çalışır', href: '#nasil-calisir' },
    { label: 'Neden Biz', href: '#neden-biz' },
    { label: 'SSS', href: '#sss' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#00A86B] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" fillOpacity="0.9"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-display text-lg font-normal transition-colors duration-300 ${scrolled ? 'text-[#0F4C81]' : 'text-white'}`}>
                Danışman
              </span>
              <span className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-[#00A86B]' : 'text-white/80'}`}>
                Sigorta
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#00A86B] ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A86B] text-white text-sm font-semibold hover:bg-[#008756] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0113.95 2.5 2 2 0 0116 2.29h.5a2 2 0 012 1.72 12.84 12.84 0 01.7 2.81 2 2 0 01-1.24 2.15L17 9a16 16 0 006 6l.1-.46a2 2 0 012.15-1.24c.966.18 1.9.47 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Danışmanla Görüş
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 shadow-lg' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 font-medium py-1 hover:text-[#0F4C81] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00A86B] text-white text-sm font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Danışmanla Görüş
          </a>
        </div>
      </div>
    </header>
  )
}

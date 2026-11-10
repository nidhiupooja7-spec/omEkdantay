import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogIn, Mail, MapPin, Menu, Phone, UserPlus, X, Zap } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
]

const CONTACT = {
  phone: '9890949777',
  phoneAlt: '9130500032',
  email: 'info@omekdantay.com',
  address: 'Chinchwad, Pune',
}

function Logo() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <Link to="/" className="flex items-center gap-2" aria-label="OM Ekdantay Electricals – Home">
      {!imgFailed ? (
        <img
          src="/logo.png"
          alt="OM Ekdantay Electricals"
          className="h-11 w-auto md:h-12"
          onError={() => setImgFailed(true)}
        />
      ) : (
        // Fallback jab tak public/logo.png add nahi hota
        <div className="leading-tight">
          <span className="flex items-center text-2xl font-extrabold text-navy">
            OM
            <Zap className="h-5 w-5 fill-brand-orange text-brand-orange" />
          </span>
          <span className="block text-[11px] font-semibold tracking-[0.2em] text-navy">
            EKDANTAY <span className="text-brand-orange">ELECTRICALS</span>
          </span>
        </div>
      )}
    </Link>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu khula ho to background scroll band
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative py-2 text-[15px] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-orange after:transition-all ${
      isActive
        ? 'text-brand-orange after:w-full'
        : 'text-navy hover:text-brand-orange after:w-0 hover:after:w-full'
    }`

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar – desktop only */}
      <div className="hidden bg-navy text-xs text-white/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-orange" />
            {CONTACT.address} · Electrical Turnkey Solutions Since 1998
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:+91${CONTACT.phone}`} className="flex items-center gap-2 hover:text-brand-orange">
              <Phone className="h-4 w-4 text-brand-orange" />
              +91 {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-brand-orange">
              <Mail className="h-4 w-4 text-brand-orange" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`border-b border-navy/5 bg-white transition-shadow ${
          scrolled ? 'shadow-lg shadow-navy/10' : ''
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 md:px-6">
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold text-navy transition hover:text-brand-orange sm:inline-flex"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
            <Link
              to="/signup"
              className="hidden items-center gap-1.5 rounded-md border-2 border-navy px-4 py-1.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white sm:inline-flex"
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Link>
            <Link
              to="/contact"
              className="hidden rounded-md bg-brand-orange px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-orange/30 transition hover:bg-brand-orange-dark xl:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-md p-2 text-navy hover:bg-section lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-navy/5 bg-white transition-[max-height] duration-300 lg:hidden ${
            open ? 'max-h-[calc(100vh-72px)]' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col px-4 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 font-medium ${
                      isActive ? 'bg-brand-orange/10 text-brand-orange' : 'text-navy hover:bg-section'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="space-y-3 border-t border-navy/5 px-7 py-4 text-sm text-navy/80">
            <a href={`tel:+91${CONTACT.phone}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-orange" /> +91 {CONTACT.phone} / {CONTACT.phoneAlt}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-orange" /> {CONTACT.email}
            </a>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-md border-2 border-navy py-2.5 font-semibold text-navy"
              >
                <LogIn className="h-4 w-4" /> Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-md bg-navy py-2.5 font-semibold text-white"
              >
                <UserPlus className="h-4 w-4" /> Sign Up
              </Link>
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-brand-orange py-3 text-center font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Navbar

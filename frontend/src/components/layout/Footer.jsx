import { Link } from 'react-router-dom'
import { ChevronRight, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
]

const SERVICES = [
  'LT & HT Turnkey Jobs',
  'Control Panel Manufacturing',
  'Unitised Substations',
  'Feeder Pillar Panels',
  'High Mast & Stadium Lighting',
  'Street Light Poles & LED',
]

function FooterHeading({ children }) {
  return (
    <h3 className="relative pb-2 text-base font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-brand-orange">
      {children}
    </h3>
  )
}

function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:grid-cols-2 md:px-6 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link to="/" className="inline-block rounded-md bg-white p-1.5">
            <img src="/logo.png" alt="OM Ekdantay Electricals" className="h-10 w-auto" />
          </Link>
          <p className="mt-3 text-[13px] leading-relaxed">
            One of the leading companies in Pune for all LT &amp; HT electrical turnkey jobs since
            1998. Manufacturer of all types of control panels and distributor of street light poles,
            LED lights &amp; high masts.
          </p>
          <a
            href="https://www.indiamart.com/omekdantay-electricals/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-white transition hover:border-brand-orange hover:text-brand-orange"
          >
            View our IndiaMART Catalog
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-3 space-y-1.5 text-[13px]">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="group inline-flex items-center gap-1 transition hover:text-brand-orange">
                  <ChevronRight className="h-4 w-4 text-brand-orange transition group-hover:translate-x-0.5" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <FooterHeading>Our Services</FooterHeading>
          <ul className="mt-3 space-y-1.5 text-[13px]">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link to="/services" className="group inline-flex items-center gap-1 transition hover:text-brand-orange">
                  <ChevronRight className="h-4 w-4 text-brand-orange transition group-hover:translate-x-0.5" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <FooterHeading>Contact Us</FooterHeading>
          <ul className="mt-3 space-y-2.5 text-[13px]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
              <span>
                Moray Apartment, Shop No. 2, S.No. 156, P.No. 60, Bijalinagar, Chinchwad, Pune – 411033
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
              <span className="flex flex-col">
                <a href="tel:+919890949777" className="hover:text-brand-orange">+91 98909 49777</a>
                <a href="tel:+919130500032" className="hover:text-brand-orange">+91 91305 00032</a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
              <span className="flex flex-col">
                <a href="mailto:info@omekdantay.com" className="hover:text-brand-orange">info@omekdantay.com</a>
                <a href="mailto:omekdantay@gmail.com" className="hover:text-brand-orange">omekdantay@gmail.com</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p>© {new Date().getFullYear()} OM Ekdantay Electricals. All rights reserved.</p>
          <p>
            Principal Contact: <span className="text-white">Amol Ashok Jagtap</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

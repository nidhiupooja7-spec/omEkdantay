import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Phone, ShieldCheck } from 'lucide-react'

import panelsImg from '../../assets/images/hero-panels.jpg'
import substationImg from '../../assets/images/transformer.jpg'
import stadiumMastImg from '../../assets/images/hero-stadium-mast.jpg'
import streetLightsImg from '../../assets/images/hero-street-lights.jpg'

const ESTABLISHED = 1998
const YEARS = new Date().getFullYear() - ESTABLISHED
const AUTOPLAY_MS = 6000

const SLIDES = [
  {
    image: panelsImg,
    tag: 'Control Panel Manufacturing',
    title: 'All Types of',
    highlight: 'LT & HT Control Panels',
    text: 'APFC, AMF, PCC, MCC, VFD, synchronizing and feeder pillar panels built to industrial quality standards.',
    cta: { label: 'View Products', to: '/products' },
  },
  {
    image: substationImg,
    tag: 'Electrical Turnkey Projects',
    title: 'Complete',
    highlight: 'LT & HT Turnkey Jobs',
    text: `Trusted by industries across Pune for end-to-end electrical contracting – design, supply, installation and commissioning since ${ESTABLISHED}.`,
    cta: { label: 'Our Services', to: '/services' },
  },
  {
    image: stadiumMastImg,
    tag: 'High Mast & Stadium Lighting',
    title: 'Lighting Up',
    highlight: 'Highways & Stadiums',
    text: 'Octagonal high masts, stadium flood lighting and NHAI lighting solutions with reliable installation.',
    cta: { label: 'See Projects', to: '/projects' },
  },
  {
    image: streetLightsImg,
    tag: 'Street Light Poles & LED',
    title: 'Authorised Distributor of',
    highlight: 'Street Light Poles',
    text: 'Octagonal street light poles, decorative poles and energy efficient LED street lights for roads and townships.',
    cta: { label: 'View Products', to: '/products' },
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((i) => setCurrent((i + SLIDES.length) % SLIDES.length), [])
  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])

  // Autoplay – hover par ruk jata hai, reduced-motion users ke liye band
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion) return
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, next, current])

  // Mobile swipe
  const [touchX, setTouchX] = useState(null)
  const onTouchEnd = (e) => {
    if (touchX === null) return
    const diff = e.changedTouches[0].clientX - touchX
    if (Math.abs(diff) > 50) (diff < 0 ? next : prev)()
    setTouchX(null)
  }

  const slide = SLIDES[current]

  return (
    <section
      className="relative isolate overflow-hidden bg-navy text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="OM Ekdantay Electricals highlights"
    >
      {/* Background images – crossfade */}
      {SLIDES.map((s, i) => (
        <img
          key={s.tag}
          src={s.image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-all duration-[1500ms] ${
            i === current ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-navy/70 to-transparent" />

      <div className="mx-auto flex min-h-[340px] max-w-7xl items-center px-4 pb-14 pt-10 md:min-h-[380px] md:px-20">
        {/* key se har slide par text dobara animate hota hai */}
        <div key={current} className="hero-fade-up max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/15 px-3 py-1 text-xs font-medium text-brand-orange sm:text-sm">
            <ShieldCheck className="h-4 w-4" />
            {slide.tag}
          </span>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]">
            {slide.title} <span className="text-brand-orange">{slide.highlight}</span>
          </h1>

          <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            {slide.text}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={slide.cta.to}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition hover:bg-brand-orange-dark sm:text-base"
            >
              {slide.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919890949777"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-navy sm:text-base"
            >
              <Phone className="h-4 w-4" />
              Call +91 98909 49777
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition hover:bg-brand-orange md:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition hover:bg-brand-orange md:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Bottom bar: dots + experience badge */}
      <div className="absolute inset-x-0 bottom-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.tag}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${s.tag}`}
                aria-current={i === current}
                className={`h-2.5 rounded-full transition-all ${
                  i === current ? 'w-10 bg-brand-orange' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          <p className="hidden items-center gap-3 text-sm text-white/80 sm:flex">
            <span className="text-xl font-extrabold text-brand-orange">{YEARS}+</span>
            Years of Electrical Excellence
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

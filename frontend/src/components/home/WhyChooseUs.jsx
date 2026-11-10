import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  CloudRain,
  Factory,
  Handshake,
  History,
  Leaf,
} from 'lucide-react'

import SectionTitle from '../common/SectionTitle'
import bgImg from '../../assets/images/hero-street-lights.jpg'

const ESTABLISHED = 1998
const YEARS = new Date().getFullYear() - ESTABLISHED

// Points client ke "OUR PRODUCTS.pdf" – "Why to use our company panels" se
const REASONS = [
  {
    icon: History,
    title: `${YEARS}+ Years of Experience`,
    text: `Serving industries in Pune with LT & HT electrical work since ${ESTABLISHED}.`,
  },
  {
    icon: Factory,
    title: 'In-house Manufacturing',
    text: 'All types of control panels designed and fabricated by our own team.',
  },
  {
    icon: BadgeCheck,
    title: 'Industrial Quality Standards',
    text: 'Good quality materials, latest technology and stringent quality checks.',
  },
  {
    icon: CloudRain,
    title: 'Weather-proof & Durable',
    text: 'Strong galvanized panel casing built to withstand tough site conditions.',
  },
  {
    icon: Leaf,
    title: 'Low Maintenance',
    text: 'Trouble-free operation, less maintenance and low power consumption.',
  },
  {
    icon: Handshake,
    title: 'Single-point Turnkey',
    text: 'From supply to installation and commissioning – one partner for everything.',
  },
]

const STATS = [
  { value: YEARS, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Types of Control Panels' },
  { value: 15, suffix: '+', label: 'Product Categories' },
  { value: ESTABLISHED, suffix: '', label: 'Established in Pune', noCount: true },
]

/** Number 0 se value tak count karta hai jab section screen par aata hai */
function CountUp({ value, suffix, start, noCount }) {
  const [n, setN] = useState(noCount ? value : 0)

  useEffect(() => {
    if (!start || noCount) return
    const duration = 1500
    const t0 = Date.now()
    const id = setInterval(() => {
      const p = Math.min((Date.now() - t0) / duration, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3)))) // ease-out
      if (p >= 1) clearInterval(id)
    }, 30)
    return () => clearInterval(id)
  }, [start, value, noCount])

  return (
    <>
      {n}
      {suffix}
    </>
  )
}

function WhyChooseUs() {
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-navy py-10 text-white md:py-14">
      <img
        src={bgImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy/95 to-navy-dark" />
      <div className="absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading + button ek line mein */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Built on Quality,"
            highlight="Trusted for Decades"
            light
          />
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition hover:bg-brand-orange-dark md:self-auto"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Reasons – compact, icon left */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-white/65">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl bg-brand-orange shadow-2xl shadow-brand-orange/20 md:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-4 text-center ${i % 2 === 0 ? 'border-r' : 'md:border-r'} ${
                i < 2 ? 'border-b md:border-b-0' : ''
              } border-white/20 last:border-r-0`}
            >
              <p className="text-3xl font-extrabold md:text-4xl">
                <CountUp {...s} start={statsVisible} />
              </p>
              <p className="mt-1 text-xs font-medium text-white/90 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

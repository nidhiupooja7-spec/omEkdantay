import { Link } from 'react-router-dom'
import { ArrowRight, Award, Factory, Lightbulb, Phone, ShieldCheck, Zap } from 'lucide-react'

import SectionTitle from '../common/SectionTitle'
import controlPanelImg from '../../assets/images/control-panel.jpg'
import feederPillarImg from '../../assets/images/feeder-pillar.jpeg'

const ESTABLISHED = 1998
const YEARS = new Date().getFullYear() - ESTABLISHED

const FEATURES = [
  {
    icon: Zap,
    title: 'LT & HT Turnkey Jobs',
    text: 'End-to-end electrical contracting for industries and infrastructure.',
  },
  {
    icon: Factory,
    title: 'Panel Manufacturing',
    text: 'APFC, AMF, PCC, MCC, VFD and feeder pillar panels built in-house.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Solutions',
    text: 'Distributor of street light poles, LED lights and octagonal high masts.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    text: 'Industrial-grade materials, strict quality checks and low maintenance.',
  },
]

function AboutPreview() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Right: images (order-2 → text pehle aata hai, mobile aur desktop dono par) */}
        <div className="relative order-2 mx-auto w-full max-w-md lg:max-w-none">
          {/* decorative dots */}
          <div className="absolute -right-4 -top-4 -z-0 h-28 w-28 bg-[radial-gradient(#ff7900_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40" />

          <div className="relative grid grid-cols-5 gap-4">
            <div className="col-span-3 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={controlPanelImg}
                alt="LT control panel manufactured by OM Ekdantay Electricals"
                className="h-full min-h-[320px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4 pt-12">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={feederPillarImg}
                  alt="Feeder pillar panel"
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl bg-navy p-5 text-white shadow-xl">
                <Award className="h-8 w-8 text-brand-orange" />
                <p className="mt-3 text-3xl font-extrabold">{YEARS}+</p>
                <p className="text-sm text-white/70">Years of trusted service</p>
              </div>
            </div>
          </div>

          {/* Since badge */}
          <div className="absolute -bottom-5 left-6 rounded-xl bg-brand-orange px-5 py-3 font-semibold text-white shadow-lg shadow-brand-orange/30">
            Since {ESTABLISHED} · Pune
          </div>
        </div>

        {/* Left: content */}
        <div className="order-1">
          <SectionTitle
            eyebrow="About Us"
            title="Pune's Trusted Partner for"
            highlight="Electrical Turnkey Solutions"
          />

          <p className="mt-5 leading-relaxed text-navy/70">
            <strong className="text-navy">OM Ekdantay Electricals</strong> is one of the leading
            companies in Pune for all LT &amp; HT electrical turnkey jobs since {ESTABLISHED}. We
            are a manufacturer of all types of control panels and also hold the distributorship of
            street light poles, LED lights and octagonal high masts.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/65">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-navy/10 pt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 font-semibold text-white transition hover:bg-brand-orange"
            >
              Know More About Us
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="tel:+919890949777" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Phone className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-navy/60">Talk to Amol Jagtap</span>
                <span className="font-bold text-navy">+91 98909 49777</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview

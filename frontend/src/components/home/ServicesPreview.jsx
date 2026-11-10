import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Cable, CircuitBoard, Lamp, LampFloor, Zap } from 'lucide-react'

import SectionTitle from '../common/SectionTitle'
import turnkeyImg from '../../assets/images/transformer.jpg'
import controlPanelImg from '../../assets/images/control-panel.jpg'
import substationImg from '../../assets/images/hero-panels.jpg'
import feederPillarImg from '../../assets/images/feeder-pillar.jpeg'
import highMastImg from '../../assets/images/hero-stadium-mast.jpg'
import streetLightsImg from '../../assets/images/hero-street-lights.jpg'

const SERVICES = [
  {
    icon: Zap,
    image: turnkeyImg,
    title: 'LT & HT Turnkey Jobs',
    text: 'Complete electrical contracting – design, supply, erection, testing and commissioning.',
  },
  {
    icon: CircuitBoard,
    image: controlPanelImg,
    title: 'Control Panel Manufacturing',
    text: 'APFC, AMF, PCC, MCC, VFD, synchronizing and control desk panels built to industrial standards.',
  },
  {
    icon: Building2,
    image: substationImg,
    title: 'Unitised & Compact Substations',
    text: 'Unitised substations, OLTC transformers, RMUs and HT metering kiosks for reliable power distribution.',
  },
  {
    icon: Cable,
    image: feederPillarImg,
    title: 'Feeder Pillar Panels',
    text: 'Weather-proof LT feeder pillars for townships, housing societies and street lighting networks.',
  },
  {
    icon: LampFloor,
    image: highMastImg,
    title: 'High Mast & Stadium Lighting',
    text: 'Octagonal high masts, stadium flood lighting and NHAI / toll plaza lighting with installation.',
  },
  {
    icon: Lamp,
    image: streetLightsImg,
    title: 'Street Light Poles & LED',
    text: 'Octagonal, tubular and decorative street light poles with energy efficient LED and solar lights.',
  },
]

function ServiceCard({ icon: Icon, image, title, text }) {
  return (
    <Link
      to="/services"
      className="group relative flex overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10"
    >
      {/* Left: image with icon */}
      <div className="relative w-28 shrink-0 overflow-hidden sm:w-32">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-navy/30" />
        <div className="absolute bottom-2 left-2 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange text-white shadow-md transition group-hover:bg-navy">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      {/* Right: text */}
      <div className="flex flex-1 flex-col justify-center p-4">
        <h3 className="font-bold leading-snug text-navy">{title}</h3>
        <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-navy/65">{text}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange">
          Read More
          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
        </span>
      </div>

      {/* bottom accent line */}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-orange transition-all duration-500 group-hover:w-full" />
    </Link>
  )
}

function ServicesPreview() {
  return (
    <section className="bg-section py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading + button ek line mein */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Our Services"
            title="Complete Electrical Solutions"
            highlight="Under One Roof"
          />
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition hover:bg-brand-orange-dark md:self-auto"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview

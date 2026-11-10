import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

const PHONE = '919890949777'

function ContactCTA() {
  return (
    <section className="bg-white pb-10 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative isolate overflow-hidden rounded-2xl bg-brand-orange px-6 py-8 text-white shadow-xl shadow-brand-orange/25 md:px-10">
          {/* decorative circles */}
          <div className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 right-40 -z-10 h-40 w-40 rounded-full bg-navy/10" />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                Need a Reliable Electrical Partner?
              </h2>
              <p className="mt-2 text-white/90">
                Share your requirement – we&apos;ll get back with the best solution.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:shrink-0 lg:flex-nowrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 font-semibold text-white transition hover:bg-navy-dark"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:+${PHONE}`}
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-navy transition hover:bg-white/90"
              >
                <Phone className="h-4 w-4 text-brand-orange" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hello OM Ekdantay Electricals, I have an enquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-white px-5 py-2.5 font-semibold text-white transition hover:bg-white hover:text-brand-orange"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA

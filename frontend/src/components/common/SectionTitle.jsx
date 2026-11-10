/**
 * Reusable section heading.
 * <SectionTitle eyebrow="About Us" title="..." highlight="..." subtitle="..." align="left|center" light />
 */
function SectionTitle({ eyebrow, title, highlight, subtitle, align = 'left', light = false }) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p
          className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange ${
            centered ? 'justify-center' : ''
          }`}
        >
          <span className="h-0.5 w-8 bg-brand-orange" />
          {eyebrow}
          {centered && <span className="h-0.5 w-8 bg-brand-orange" />}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title} {highlight && <span className="text-brand-orange">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 leading-relaxed ${light ? 'text-white/70' : 'text-navy/70'}`}>{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle

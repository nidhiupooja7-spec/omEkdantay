import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import SectionTitle from '../common/SectionTitle'
import substationImg from '../../assets/images/transformer.jpg'
import tollPlazaImg from '../../assets/images/project-toll-plaza.jpg'
import highMastInstallImg from '../../assets/images/project-high-mast-install.jpg'
import highwayLightingImg from '../../assets/images/project-highway-lighting.jpg'
import facadeLightingImg from '../../assets/images/project-facade-lighting.jpg'

// NOTE: Client se asli project names / locations milne par title & category update karein
const PROJECTS = [
  {
    image: substationImg,
    category: 'HT Electrical Work',
    title: 'Substation Erection & Commissioning',
    featured: true,
  },
  { image: highwayLightingImg, category: 'Street Lighting', title: 'Highway LED Street Lighting' },
  { image: tollPlazaImg, category: 'NHAI Lighting', title: 'Toll Plaza Lighting' },
  { image: highMastInstallImg, category: 'High Mast', title: 'High Mast Installation' },
  { image: facadeLightingImg, category: 'Building Lighting', title: 'LED Facade Lighting' },
]

function ProjectCard({ image, category, title, featured }) {
  return (
    <Link
      to="/projects"
      className={`group relative block overflow-hidden rounded-xl ${
        featured ? 'col-span-2 h-52 sm:h-64 lg:h-auto lg:row-span-2' : 'h-36 sm:h-48'
      }`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-90 transition group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-4">
        <div>
          <span className="inline-block rounded bg-brand-orange px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
            {category}
          </span>
          <h3
            className={`mt-1.5 font-bold leading-snug text-white ${
              featured ? 'text-lg sm:text-2xl' : 'text-sm sm:text-base'
            }`}
          >
            {title}
          </h3>
        </div>
        <span className="flex h-9 w-9 shrink-0 translate-y-2 items-center justify-center rounded-full bg-white text-navy opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:bg-brand-orange group-hover:text-white group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  )
}

function ProjectsPreview() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle eyebrow="Our Projects" title="Featured" highlight="Work & Installations" />
          <Link
            to="/projects"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-md border-2 border-navy px-5 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white md:self-auto"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-[12rem_12rem]">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview

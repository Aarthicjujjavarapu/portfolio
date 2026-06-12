import SectionHeading from './SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="Experience Highlights"
        title="Where I add value"
        subtitle="Core capability areas I bring to AI/ML and GenAI teams."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experience.map(({ title, icon: Icon, description }) => (
          <div key={title} className="card p-6">
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-cyanx/20 text-accent-light">
              <Icon size={20} />
            </span>
            <h3 className="text-base font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

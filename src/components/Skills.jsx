import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I work with"
        subtitle="A practical stack spanning AI/ML, backend engineering, cloud, and data."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <div key={title} className="card p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                <Icon size={18} />
              </span>
              <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

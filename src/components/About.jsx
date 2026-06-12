import SectionHeading from './SectionHeading'
import { Cpu, GitBranch, ShieldCheck } from 'lucide-react'

const points = [
  { icon: Cpu, label: 'Production-ready GenAI & RAG systems' },
  { icon: GitBranch, label: 'MLOps, CI/CD & workflow automation' },
  { icon: ShieldCheck, label: 'Reliable, observable AI services' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About" title="Engineering AI that ships" />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <p className="text-lg leading-relaxed text-slate-300">
          I&apos;m an AI/ML Engineer focused on building production-ready GenAI applications, RAG
          systems, ML APIs, and workflow automation tools. My work combines{' '}
          <span className="font-semibold text-white">Python, FastAPI, LLMs, cloud platforms,</span>{' '}
          and <span className="font-semibold text-white">MLOps practices</span> to create reliable
          AI systems that solve real business problems.
        </p>

        <div className="grid gap-3">
          {points.map(({ icon: Icon, label }) => (
            <div key={label} className="card flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                <Icon size={20} />
              </span>
              <span className="text-sm font-medium text-slate-200">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

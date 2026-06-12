import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, description, tech, github, demo, accent } = project

  return (
    <article className="card group relative flex flex-col overflow-hidden p-6">
      {/* Subtle gradient wash on top of the card */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="rounded-lg border border-surface-border p-2 text-slate-400 transition-colors hover:border-accent/50 hover:text-white"
            >
              <Github size={16} />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="rounded-lg border border-surface-border p-2 text-slate-400 transition-colors hover:border-accent/50 hover:text-white"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      {(demo || github) && (
        <div className="relative mt-5 flex flex-wrap gap-4 border-t border-surface-border pt-4 text-sm font-semibold">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-light hover:text-white"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
            >
              View Code <Github size={14} />
            </a>
          )}
        </div>
      )}
    </article>
  )
}

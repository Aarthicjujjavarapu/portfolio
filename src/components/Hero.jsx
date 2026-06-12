import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative grid + glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(60rem 40rem at 50% 0%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(60rem 40rem at 50% 0%, black, transparent)',
        }}
      />

      <div className="section relative flex min-h-[92vh] flex-col justify-center pt-28">
        <div className="max-w-3xl animate-fade-up">
          <span className="tag mb-6 gap-2 border-accent/30 bg-accent/5 text-accent-light">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to AI/ML &amp; GenAI Engineer roles
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Hi, I&apos;m Aarthi. I build{' '}
            <span className="gradient-text">AI-powered applications</span> that turn documents,
            workflows, and data into useful intelligent systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            AI/ML Engineer with experience in Generative AI, RAG pipelines, FastAPI services,
            cloud deployments, and MLOps workflows.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href={site.resume} download className="btn-ghost">
              <Download size={18} />
              Download Resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          {/* Quick stat strip */}
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-surface-border pt-8">
            {[
              { k: 'GenAI', v: 'LLM & RAG apps' },
              { k: 'Backend', v: 'Python / FastAPI' },
              { k: 'MLOps', v: 'Cloud & CI/CD' },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-sm font-bold text-white">{s.k}</div>
                <div className="mt-1 text-xs text-slate-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

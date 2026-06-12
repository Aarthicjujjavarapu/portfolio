import { Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-surface-border p-2 text-slate-400 transition-colors hover:border-accent/50 hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg border border-surface-border p-2 text-slate-400 transition-colors hover:border-accent/50 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="rounded-lg border border-surface-border p-2 text-slate-400 transition-colors hover:border-accent/50 hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

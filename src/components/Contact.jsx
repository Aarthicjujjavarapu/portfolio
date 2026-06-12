import SectionHeading from './SectionHeading'
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'

const items = [
  {
    icon: Mail,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Aarthicjujjavarapu',
    href: site.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: site.linkedin,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: site.location,
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="card relative overflow-hidden p-8 sm:p-12">
        {/* Glow accents */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyanx/10 blur-3xl" />

        <div className="relative">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something intelligent"
            subtitle="I'm open to AI/ML and GenAI Engineer roles. The fastest way to reach me is email — I'll get back to you quickly."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-semibold text-slate-100">
                      {value}
                    </span>
                  </span>
                  {href && (
                    <ArrowUpRight
                      size={18}
                      className="ml-auto text-slate-500 transition-colors group-hover:text-accent-light"
                    />
                  )}
                </>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-surface-border bg-white/[0.02] p-4 transition-all hover:border-accent/50 hover:bg-white/[0.04]"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-surface-border bg-white/[0.02] p-4"
                >
                  {inner}
                </div>
              )
            })}
          </div>

          <div className="mt-8">
            <a href={`mailto:${site.email}`} className="btn-primary">
              <Mail size={18} />
              Say hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

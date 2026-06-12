// Shared section heading with an eyebrow label + title.
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-400">{subtitle}</p>}
    </div>
  )
}

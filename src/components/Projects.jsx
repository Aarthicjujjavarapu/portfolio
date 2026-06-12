import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've built"
        subtitle="A selection of GenAI, RAG, and full-stack projects — from observability SDKs to clinical decision-support prototypes."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

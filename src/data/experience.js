// "Experience Highlights" cards — capability areas rather than a strict timeline.
import { Sparkles, FileSearch, Rocket, Workflow, Database } from 'lucide-react'

export const experience = [
  {
    title: 'Generative AI Applications',
    icon: Sparkles,
    description:
      'Designing and shipping LLM-powered assistants and tools — prompt engineering, structured outputs, and reliable reasoning flows that solve real user problems.',
  },
  {
    title: 'RAG and Document Intelligence',
    icon: FileSearch,
    description:
      'Building retrieval-augmented pipelines over documents and domain knowledge using vector databases, FAISS, and grounded LLM responses with citations.',
  },
  {
    title: 'ML APIs and Deployment',
    icon: Rocket,
    description:
      'Wrapping models in clean FastAPI services, containerizing with Docker, and deploying scalable, well-documented inference endpoints to the cloud.',
  },
  {
    title: 'MLOps and Workflow Automation',
    icon: Workflow,
    description:
      'Automating training, evaluation, and release with MLflow, Airflow, and GitHub Actions — plus observability into latency, token usage, and cost.',
  },
  {
    title: 'Cloud and Data Pipelines',
    icon: Database,
    description:
      'Architecting data and AI workloads across AWS, Azure, and GCP with reproducible pipelines, monitoring, and production-grade reliability.',
  },
]

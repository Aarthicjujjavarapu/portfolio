// Skill groups rendered in the Skills section.
import { Brain, Server, Cloud, LayoutDashboard } from 'lucide-react'

export const skillGroups = [
  {
    title: 'AI / ML',
    icon: Brain,
    skills: [
      'LLMs',
      'RAG',
      'Prompt Engineering',
      'LangChain',
      'LangGraph',
      'FAISS',
      'Vector Databases',
      'Scikit-learn',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'SQL', 'PostgreSQL'],
  },
  {
    title: 'Cloud / MLOps',
    icon: Cloud,
    skills: [
      'AWS',
      'Azure',
      'GCP',
      'Docker',
      'Kubernetes',
      'Airflow',
      'MLflow',
      'GitHub Actions',
    ],
  },
  {
    title: 'Frontend / Data',
    icon: LayoutDashboard,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Streamlit', 'Power BI'],
  },
]

export const profile = {
  name: 'Edward Lee',
  tagline:
    'Software engineer specializing in performance optimization. Founded ProtoScore (acquired by Nurocor).',
  phone: '425-346-3389',
  email: 'edwardhlee7@gmail.com',
  linkedin: 'https://linkedin.com/in/edward-h-lee',
  github: 'https://github.com/edwardlee14',
  location: 'Seattle, WA',
}

export const experience = [
  {
    company: 'Nurocor',
    location: 'Remote',
    role: 'Software Engineer',
    period: 'Aug 2025 – Present',
    bullets: [
      'Built an ETL microservice ingesting biospecimen data via GraphQL, normalizing and storing in MongoDB, generating vector embeddings, and indexing in OpenSearch to power LLM-driven search and analytics.',
      'Architected a RAG pipeline converting HTML to Markdown with metadata tagging, embeddings, and OpenSearch indexing, improving semantic retrieval precision from 74% to 93% evaluated with RAGAS benchmarks.',
      'Developed a Java/Quarkus microservice orchestrated with Temporal workflows to convert and ingest study PDFs into a digital platform, reducing document onboarding from ~1 week of manual entry to under 3 hours.',
      'Implemented a live scoring microservice in Rust, achieving 45% faster throughput than the previous Java implementation using SSE-based streaming and LLM-driven evaluation logic.',
    ],
  },
  {
    company: 'Robert Half',
    location: 'Remote',
    role: 'Software Engineer Intern',
    period: 'Jun 2025 – Aug 2025',
    bullets: [
      'Engineered LLM function-calling pipelines for employee search using Azure AI Search and C#/.NET with a React/Redux streaming UI, reducing average query resolution time by 35% tracked via Azure Application Insights.',
      'Implemented real-time speech-to-text transcription with Azure AI Speech, cutting manual data entry time by 60% measured through Azure Monitor usage telemetry.',
      'Developed a document-generation agent using Semantic Kernel and OpenXML SDK, automating report creation workflows that previously took ~25 min down to under 2 min.',
    ],
  },
  {
    company: 'ProtoScore',
    acquired: 'Acquired by Nurocor',
    location: 'Seattle, WA',
    role: 'Founder',
    period: 'May 2024 – Jul 2025',
    bullets: [
      'Built a Python pipeline ingesting clinical trial PDFs through OCR extraction and structured parsing, applying LLM-based categorization and a scoring engine to produce automated evaluation scores.',
      'Designed an async batch-processing system consolidating LLM inference across shared document segments, reducing redundant computation and cutting API costs by ~50% in production.',
      'Built a configurable scoring engine that automated protocol evaluation, reducing manual review time by ~80%.',
      'Shipped a full-stack application with React, Firebase, and Python REST APIs featuring structured ingestion endpoints, real-time status tracking, and detailed audit logging.',
      'Validated scoring logic through iterative cycles with enterprise stakeholders including Regeneron and Tufts CSDD, incorporating domain expert feedback into evaluation criteria.',
    ],
  },
]

export const projects = [
  {
    name: 'kndi',
    location: 'Seattle, WA',
    role: 'Founding Engineer',
    tagline: 'iOS Social Commerce Platform',
    users: '300+',
    period: 'Jan 2026 – Present',
    bullets: [
      'Built the full iOS app end-to-end as sole engineer, shipping real-time messaging, event discovery, trades, and social feeds to 300+ users on the App Store.',
      'Architected a real-time messaging system on Supabase (Postgres + WebSockets) with an offline outbound queue and subscription replay, achieving 99.6% message delivery reliability measured via PostHog event funnels.',
      'Built an offline-first caching layer with SwiftData across feeds, chats, and inventory, cutting cold launch time from 3.2s to 0.8s and enabling full read functionality without connectivity, profiled with Xcode Instruments.',
      'Engineered media compression pipelines with dimension-aware tiering and prefetching, reducing average feed image payload by 68% and achieving sub-200ms image load times on LTE, benchmarked with Charles Proxy and PostHog performance events.',
    ],
  },
]

export const education = {
  school: 'University of Washington',
  location: 'Seattle, WA',
  degree: 'B.S. in Informatics: Software Development',
  gpa: 'GPA: 3.9/4.0',
}

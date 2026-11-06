// House style: no periods in any copy (decimals, emails and URLs are fine)

export const profile = {
  name: 'Edward Lee',
  intro: 'Software engineer at Pipe17 building AI agents and real-time systems, and a founder with one successful exit',
  email: 'edwardhlee7@gmail.com',
  linkedin: 'https://linkedin.com/in/edward-h-lee',
  github: 'https://github.com/edwardlee14',
  location: 'Seattle, WA',
}

// Each project has a panel on the first screen and a case study below in the same color
export const work = [
  {
    id: 'atlas',
    index: '01',
    name: 'Atlas',
    tag: 'Pipe17 · Now',
    role: 'Software Engineer, Pipe17',
    period: 'Sep 2026 – Present',
    location: 'Seattle, WA',
    blurb: 'An AI agent that supports Pipe17 engineers from the first customer meeting to final product delivery',
    stat: {
      value: '5 tools → 1',
      label: 'Notion, Google Docs, Sheets, Jira and Slack replaced by one workspace that tracks requirements and progress from kickoff to delivery',
    },
    headline: 'One place to work out what Pipe17 can build for a customer, and what to ask them',
    summary: [
      "Our engineers used to track each customer across Notion, Google Docs, Sheets, Jira and Slack; Atlas pulls it all into one workspace that follows a project from the first meeting to delivery, keeping up with changing requirements and progress along the way",
      "I own the knowledge pipeline that keeps it honest: retrieval over Pipe17's connector knowledge base, a nightly drift check that opens its own pull requests, and sandboxed connector code with a CI check that keeps customer data out of shared knowledge",
      "I also run a recurring feedback sync with the engineers using it, which is how scope came to be set from the uploaded sales quote, so Atlas never invents unpaid work",
    ],
    facts: [
      { value: '<1 month', label: 'from first commit to engineers using it on live customer projects' },
    ],
  },
  {
    id: 'kndi',
    index: '02',
    name: 'kndi',
    tag: 'iOS · Now',
    role: 'Founding Engineer',
    period: 'Jan 2026 – Present',
    location: 'Seattle, WA',
    blurb: 'Festival social app that works with no signal',
    stat: { value: '600+ users', label: 'on the App Store' },
    headline: 'Plan the trip, find your friends, trade kandi, even in a field with no signal',
    summary: [
      "I built the iOS app end to end in Swift and SwiftUI on Supabase: group chats, set schedules, festival maps, events and a kandi trading game",
      "Festivals have terrible signal, so the app is offline first: a SwiftData cache keeps everything usable, messages queue offline and send exactly once using idempotency keys and Postgres upserts, and uploads survive the app being killed",
    ],
    facts: [
      { value: '3.2s → 0.8s', label: 'cold launch, measured with Xcode Instruments' },
      { value: 'Exactly once', label: 'message delivery through reconnects and app crashes' },
    ],
    link: { href: 'https://apps.apple.com/us/app/kndi/id6762342337', label: 'View on the App Store' },
  },
  {
    id: 'askdan',
    index: '03',
    name: 'Ask Dan',
    tag: 'Nurocor · 2026',
    role: 'Software Engineer, Nurocor',
    period: 'Aug 2025 – Aug 2026',
    location: 'Remote',
    blurb: 'LLM agent that reads and safely edits clinical trial protocols',
    stat: { value: '80% → 99%+', label: 'answer accuracy, grounded in source documents' },
    headline: 'An agent that answers questions about clinical trials and proposes edits a person approves',
    summary: [
      "Ask Dan answers questions about clinical trial documents and proposes changes to protocol data, which a person approves before anything is saved",
      "I designed its tool harness in LangChain4j and the retrieval underneath it, with hybrid search, rank fusion and reranking on OpenSearch, which cut unsupported claims from 20% to under 1%",
      "I also built a real-time scoring engine in Rust that previews each edit, and a Temporal pipeline that took protocol onboarding from about three days of manual entry to under an hour",
    ],
    facts: [
      { value: '~3 days → <1 hr', label: 'to onboard a protocol document' },
      { value: '<1%', label: 'unsupported claims, measured with RAGAS faithfulness' },
    ],
  },
  {
    id: 'protoscore',
    index: '04',
    name: 'ProtoScore',
    tag: 'Founder · 2025',
    role: 'Founder',
    period: 'May 2024 – Jul 2025',
    location: 'Seattle, WA',
    blurb: 'AI protocol evaluation, my first company',
    stat: { value: 'Acquired', label: 'by Nurocor, 2025' },
    headline: 'Automating expert review of clinical trial protocols, from first prototype to acquisition',
    summary: [
      "Reviewing a clinical trial protocol was slow, manual expert work; ProtoScore automated the evaluation and cut review time by about 80%",
      "I built the product and ran customer development from the first prototype to acquisition, validating it with Regeneron and Tufts CSDD before Nurocor acquired the company in 2025",
    ],
    facts: [
      { value: '~80%', label: 'less manual expert review time' },
      { value: '2025', label: 'acquired by Nurocor' },
    ],
    link: {
      href: 'https://www.linkedin.com/posts/nurocor_nurocor-protoscore-ai-activity-7350540104987217922-j3wJ',
      label: "Read Nurocor's announcement",
    },
  },
]

export const earlier = [
  {
    org: 'Robert Half',
    role: 'Software Engineer Intern',
    period: 'Jun – Aug 2025',
    body: "Built an agentic staffing tool for Protiviti managers (Semantic Kernel, C#/.NET) that calls MCP tools over Azure AI Search, an MCP resume generator, and real-time voice input for Protiviti's internal AI assistant",
  },
  {
    org: 'King County Public Health',
    role: 'Software Engineer Intern',
    period: 'May – Aug 2024',
    body: 'Built VaxTranslate, which reads foreign-language immunization records with Google Cloud Vision OCR, translates them and overlays the translation on the original; no PHI persisted, deployed on AWS EC2',
  },
]

export const recognition = [
  {
    award: '3rd place',
    event: 'UW iStartup Lab Launch Sprint',
    date: 'May 2026',
    project: 'VisiBill',
    body: 'A billing app that makes complex contractor payments transparent, taken from idea to customer-validated MVP in the sprint with Evan Chang, Nam Le and Jamie Yue',
    links: [
      { href: 'https://visibill-web.vercel.app', label: 'Visit VisiBill' },
      { href: 'https://www.linkedin.com/posts/edward-h-lee_activity-7457703998997938176-Nq09', label: 'Announcement' },
    ],
  },
  {
    award: 'Most Un-Carrier Hack, T-Mobile',
    event: 'DubHacks',
    date: 'Oct 2023',
    project: 'DIALog',
    body: 'Reads vocal tone during live phone calls and shows the emotional state visually, built for people with hearing and neurological disorders using T-Mobile APIs, scikit-learn and Flask',
    links: [
      { href: 'https://www.linkedin.com/posts/edward-h-lee_i-am-happy-to-announce-that-our-team-was-activity-7119887610293977088-7-VU', label: 'Announcement' },
    ],
  },
]

export const education = {
  school: 'University of Washington',
  degree: 'BS Informatics, Software Development',
  gpa: '3.9 GPA',
}

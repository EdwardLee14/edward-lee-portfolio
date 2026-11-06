// House style: no periods in any copy (decimals, emails and URLs are fine)

export const profile = {
  name: 'Edward Lee',
  intro: 'Software engineer at Pipe17 building AI agents, real-time systems and the products around them',
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
    summary:
      "Our engineers used to track each customer across Notion, Google Docs, Sheets, Jira and Slack; Atlas brings it into one workspace and uses what our codebase and products actually support to flag gaps and draft the questions to ask, so every customer gets the right solution",
    facts: [
      { value: '<1 month', label: 'from first commit to engineers using it on live customer projects' },
      { value: '25+', label: 'tickets shipped in my first three weeks, as one of three engineers' },
    ],
    points: [
      {
        title: 'Grounded in what we actually support',
        body: "I own the knowledge pipeline: retrieval tools over Pipe17's connector knowledge base, so Atlas recommends what the product does today rather than what a model guesses",
      },
      {
        title: 'Stays current on its own',
        body: 'A nightly refresh and drift check compares the knowledge base to the connector platform and opens its own pull requests when they diverge, with versioned releases',
      },
      {
        title: 'Security from day one',
        body: 'Connector code runs in a sandbox, and a CI leak check keeps customer names out of shared knowledge',
      },
      {
        title: 'Built with the people using it',
        body: 'I set up a recurring sync with the engineers using Atlas and turned their feedback into tickets; scope now comes from the uploaded sales quote, so Atlas never invents unpaid work',
      },
    ],
    stack: ['TypeScript', 'LLM agents', 'Postgres', 'AWS', 'CI/CD'],
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
    summary:
      'I built the iOS app end to end in Swift and SwiftUI on Supabase: group chats, set schedules, festival maps, events and a kandi trading game, all designed to keep working offline',
    facts: [
      { value: '3.2s → 0.8s', label: 'cold launch, measured with Xcode Instruments' },
      { value: 'Exactly once', label: 'message delivery through reconnects and app crashes' },
    ],
    points: [
      {
        title: 'Messages never drop or double',
        body: 'Client-side idempotency keys and Postgres upserts, plus an offline outbound queue that replays subscriptions on reconnect',
      },
      {
        title: 'Offline first',
        body: 'A SwiftData layer keeps the whole app usable with no connection, and background queues sync once signal returns',
      },
      {
        title: 'Recovers from dropped connections',
        body: 'A shared real-time layer resumes from a cursor after a disconnect, and media uploads survive the app being killed',
      },
    ],
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'Supabase', 'Postgres', 'WebSockets'],
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
    summary:
      'I designed the tool harness behind Ask Dan and the retrieval underneath it, and built the systems it relies on to preview and import protocols',
    facts: [
      { value: '~3 days → <1 hr', label: 'to onboard a protocol document' },
      { value: '<1%', label: 'unsupported claims, measured with RAGAS faithfulness' },
    ],
    points: [
      {
        title: 'Tool harness with a human in the loop',
        body: 'Built on LangChain4j, with tools to search study documents, query and edit protocol data over GraphQL, and stage validated edits for approval',
      },
      {
        title: 'Retrieval it can trust',
        body: 'Hybrid semantic and keyword search on OpenSearch with server-side rank fusion, parent-section retrieval and cross-encoder reranking',
      },
      {
        title: 'Real-time scoring engine in Rust',
        body: 'Streams updates over SSE with a multi-key cache and durable replay to recover changes missed during an outage; Ask Dan uses it to preview an edit',
      },
      {
        title: 'Protocol import pipeline',
        body: 'A Temporal workflow in Java extracts messy protocol documents with an LLM and writes them into the trial editor over GraphQL',
      },
    ],
    stack: ['Java', 'LangChain4j', 'Rust', 'OpenSearch', 'GraphQL', 'Temporal'],
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
    summary:
      'ProtoScore scored trial protocols automatically and cut manual expert review time by about 80%; I ran customer development end to end and validated the product with Regeneron and Tufts CSDD',
    facts: [
      { value: '~80%', label: 'less manual expert review time' },
      { value: '2025', label: 'acquired by Nurocor' },
    ],
    stack: ['Python', 'LLMs', 'React', 'Firebase'],
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

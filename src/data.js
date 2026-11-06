export const profile = {
  name: 'Edward Lee',
  role: 'Software Engineer at Pipe17',
  intro:
    'I build AI agents that stay grounded in real data, real-time systems that survive bad networks, and the products around them. I founded ProtoScore, which Nurocor acquired in 2025.',
  phone: '425-346-3389',
  email: 'edwardhlee7@gmail.com',
  linkedin: 'https://linkedin.com/in/edward-h-lee',
  github: 'https://github.com/edwardlee14',
  location: 'Seattle, WA',
}

export const now = [
  { label: 'Building', value: 'Atlas at Pipe17' },
  { label: 'Shipping', value: 'kndi on iOS' },
  { label: 'Based in', value: 'Seattle, WA' },
]

// Four case studies, newest first. Each has its own visual in Work.jsx keyed by `id`.
export const work = [
  {
    id: 'atlas',
    index: '01',
    name: 'Atlas',
    org: 'Pipe17',
    role: 'Software Engineer',
    period: 'Sep 2026 – Present',
    location: 'Seattle, WA',
    headline: 'An AI onboarding tool that turns scattered customer context into an implementation plan.',
    summary:
      "Solutions Architects at Pipe17 used to piece together each customer's setup from contracts, sales calls and product docs. Atlas reads all of it and drafts a blueprint of requirements, gaps and follow-up questions. I'm one of three engineers on it, and I own the knowledge pipeline end to end.",
    facts: [
      { value: '~90', label: 'commits in my first three weeks' },
      { value: '25+', label: 'tickets shipped' },
      { value: '<1 mo', label: 'from new repo to SAs using it on live customers' },
    ],
    points: [
      {
        title: 'Grounding the agent',
        body: "Retrieval tools over the connector knowledge base, so Atlas recommends what Pipe17's connectors support today, not what a model guesses.",
      },
      {
        title: 'Keeping it current with no upkeep',
        body: 'A nightly refresh and drift check on EC2 compares the knowledge base to the connector platform and opens its own pull requests when they diverge. Releases are versioned.',
      },
      {
        title: 'Security from day one',
        body: 'Connector code runs in a sandbox, and a CI leak check keeps customer names out of shared knowledge, because this automation runs untrusted code with real credentials.',
      },
      {
        title: 'Building with the users',
        body: 'I started a recurring sync with the SA team and turned their feedback into tickets. Requirements now follow how SAs actually run discovery, and scope comes from the uploaded sales quote, so Atlas never invents unpaid work.',
      },
      {
        title: 'Choosing the model',
        body: 'I ran the model evaluation on a real customer case, scoring accuracy against an answer key alongside cost with cached-token pricing. That data drove the production model choice.',
      },
    ],
    stack: ['TypeScript', 'LLM agents', 'Postgres', 'AWS EC2', 'CI/CD'],
  },
  {
    id: 'kndi',
    index: '02',
    name: 'kndi',
    org: 'kndi',
    role: 'Founding Engineer',
    period: 'Jan 2026 – Present',
    location: 'Seattle, WA',
    headline: 'A social app for festival-goers: plan the trip, find your friends, trade kandi.',
    summary:
      'I built the iOS app end to end in Swift and SwiftUI on Supabase. Group chats, set schedules, festival maps, events and a kandi trading game all have to work in a field with no signal, so the app is designed around being offline.',
    facts: [
      { value: '450+', label: 'App Store downloads' },
      { value: '3.2s → 0.8s', label: 'cold launch (Xcode Instruments)' },
      { value: 'Exactly once', label: 'message delivery through reconnects and crashes' },
    ],
    points: [
      {
        title: 'Messaging that never drops or doubles',
        body: 'Client-side idempotency keys plus Postgres upserts, an offline outbound queue, and subscription replay on reconnect.',
      },
      {
        title: 'Offline-first by default',
        body: 'A SwiftData layer keeps the app fully usable with no connection. Background queues sync when signal returns.',
      },
      {
        title: 'Recovering from dropped connections',
        body: 'A shared real-time layer resumes from a cursor after a disconnect, and media uploads keep going even if the app is killed.',
      },
    ],
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'Supabase', 'Postgres', 'WebSockets'],
    link: { href: 'https://apps.apple.com/us/app/kndi/id6762342337', label: 'View on the App Store' },
    shots: [
      { src: '/work/kndi-01.jpg', alt: 'kndi home screen: your festival groups and upcoming schedules' },
      { src: '/work/kndi-02.jpg', alt: 'Festival page for Lost Lands with dates, location and map' },
      { src: '/work/kndi-03.jpg', alt: "Set schedule grid showing which friends are going to each artist's set" },
      { src: '/work/kndi-04.jpg', alt: 'Group trip page with photo, date, venue and attendees' },
      { src: '/work/kndi-05.jpg', alt: 'Group chat where friends coordinate plans' },
      { src: '/work/kndi-06.jpg', alt: 'Festival map with friend meetup pins' },
      { src: '/work/kndi-07.jpg', alt: 'Kandi bracelet designer with bead and charm options' },
      { src: '/work/kndi-08.jpg', alt: 'Leaderboard ranking friends by trade points' },
      { src: '/work/kndi-09.jpg', alt: 'Search for people, festivals and artists' },
    ],
  },
  {
    id: 'askdan',
    index: '03',
    name: 'Ask Dan',
    org: 'Nurocor',
    role: 'Software Engineer',
    period: 'Aug 2025 – Aug 2026',
    location: 'Remote',
    headline: 'An LLM agent that reads, queries and safely edits clinical trial protocols.',
    summary:
      'Ask Dan answers questions about study documents and proposes changes to structured protocol data. I designed its tool harness and the retrieval underneath it, and built the systems it relies on to preview and import protocols.',
    facts: [
      { value: '20% → <1%', label: 'unsupported claims (RAGAS faithfulness)' },
      { value: '~3 days → <1 hr', label: 'to onboard a protocol document' },
    ],
    points: [
      {
        title: 'Tool harness with a human in the loop',
        body: 'Built on LangChain4j: tools to semantically search study documents, query and edit protocol data over GraphQL, and stage validated edits for the user to approve.',
      },
      {
        title: 'Retrieval it can trust',
        body: 'Hybrid semantic and keyword search on OpenSearch with server-side rank fusion, parent-section retrieval and cross-encoder reranking.',
      },
      {
        title: 'Real-time scoring engine in Rust',
        body: 'Streams score updates over SSE, with a multi-key cache and durable replay to recover changes missed during an outage. Ask Dan uses it to preview the effect of an edit.',
      },
      {
        title: 'Protocol import pipeline',
        body: 'A Temporal workflow in Java extracts messy protocol documents with an LLM and writes them to the trial editor over GraphQL.',
      },
    ],
    stack: ['Java', 'LangChain4j', 'Rust', 'OpenSearch', 'GraphQL', 'Temporal'],
  },
  {
    id: 'protoscore',
    index: '04',
    name: 'ProtoScore',
    org: 'ProtoScore',
    role: 'Founder',
    period: 'May 2024 – Jul 2025',
    location: 'Seattle, WA',
    badge: 'Acquired by Nurocor',
    headline: 'An AI platform that evaluates clinical trial protocols. It became my first company and my first exit.',
    summary:
      'Evaluating a trial protocol was slow, manual expert work. ProtoScore automated it and cut manual review time by about 80%. I ran customer development from the first prototype through to acquisition, validating the product with Regeneron and Tufts CSDD.',
    facts: [
      { value: '~80%', label: 'less manual expert review time' },
      { value: '2025', label: 'acquired by Nurocor' },
    ],
    post: {
      href: 'https://www.linkedin.com/posts/nurocor_nurocor-protoscore-ai-activity-7350540104987217922-j3wJ',
      author: 'Nurocor, Inc.',
      date: 'Jul 14, 2025',
      title: 'Welcome to the Team: Protoscore Joins Nurocor!',
      excerpt:
        'Nurocor announced its acquisition of Protoscore, an AI venture focused on clinical trials, and thanked Regeneron for connecting the two teams.',
    },
    stack: ['Python', 'LLMs', 'React', 'Firebase'],
  },
]

export const earlier = [
  {
    org: 'Robert Half',
    role: 'Software Engineer Intern',
    period: 'Jun – Aug 2025',
    body: "Built an agentic staffing tool for Protiviti project managers (Semantic Kernel, C#/.NET) that calls MCP tools over Azure AI Search to find available contractors, plus an MCP resume generator (OpenXML). Added real-time voice input to Protiviti's internal AI assistant with Azure AI Speech.",
  },
  {
    org: 'King County Public Health',
    role: 'Software Engineer Intern',
    period: 'May – Aug 2024',
    body: 'Built VaxTranslate, which translates foreign-language immunization records with Google Cloud Vision OCR and the Translate API. It exports structured CSV and overlays the translation on the original for verification. HIPAA-conscious: no persisted PHI, encryption at rest, deployed on AWS EC2.',
  },
]

export const education = {
  school: 'University of Washington',
  degree: 'B.S. Informatics, Software Development',
  gpa: '3.9 GPA',
}

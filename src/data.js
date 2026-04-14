export const profile = {
  name: 'Edward Lee',
  title: 'Software Engineer',
  phone: '425-346-3389',
  email: 'edwardhlee7@gmail.com',
  linkedin: 'https://linkedin.com/in/edward-h-lee',
  location: 'Seattle, WA',
}

export const experience = [
  {
    company: 'Nurocor',
    location: 'Remote',
    role: 'Software Engineer',
    period: 'Aug 2025 – Present',
    bullets: [
      'Built an end-to-end biospecimen ETL microservice, ingesting via GraphQL, normalizing and storing in MongoDB, generating vector embeddings, and indexing in OpenSearch to power downstream LLM-driven search and analytics.',
      'Architected an end-to-end HTML to Markdown ETL and RAG pipeline with metadata tagging, embeddings, summarization, and OpenSearch indexing, enabling API-driven semantic retrieval over arbitrary documents.',
      'Developed a Java/Quarkus service orchestrated with Temporal workflows; deployed a custom Docling Docker image to convert PDFs to HTML and automatically ingest study documents into the RAG pipeline.',
      'Implemented a real-time patient burden scoring microservice in Rust, achieving 45% faster performance than the previous Java version using SSE-based state tracking and LLM-driven inclusion criteria.',
      'Engineered a multi-agent consent form generator to parse, validate, and convert structured data into compliant natural language; delivered editable, standards-compliant forms via a Vue.js frontend.',
    ],
  },
  {
    company: 'Robert Half',
    location: 'Remote',
    role: 'Software Engineer Intern',
    period: 'Jun 2025 – Aug 2025',
    bullets: [
      'Engineered LLM function-calling pipelines for employee search using Azure AI Search and C#/.NET APIs; leveraged Model Context Protocol to query the employee database via a conversational chatbot interface.',
      'Implemented real-time transcription with Azure AI Speech and MSAL authentication, enabling secure, live voice-to-text functionality.',
      'Built a responsive conversational interface in React/Redux with TypeScript for a seamless user experience.',
      'Developed an automated resume-generation agent using Semantic Kernel, OpenXML SDK, and Azure Blob Storage, streamlining document creation and storage workflows.',
    ],
  },
  {
    company: 'King County Public Health',
    location: 'Seattle, WA',
    role: 'Software Engineer Intern',
    period: 'May 2024 – Aug 2024',
    bullets: [
      'Automated vaccination-record processing via Google Cloud Vision OCR & Translate API, achieving 15x throughput.',
      'Configured AWS EC2 deployment with Gunicorn and Nginx, delivering a secure backend for production use.',
      'Built a responsive React.js UI with Tailwind CSS and a Flask backend, enabling smooth end-to-end functionality.',
    ],
  },
  {
    company: 'Simoni Lab, UW',
    location: 'Seattle, WA',
    role: 'Undergraduate Research Assistant',
    period: 'Dec 2023 – May 2024',
    bullets: [
      'Leveraged OpenAI embeddings and MongoDB Vector Search to classify semantic traits of mental disorders.',
      'Optimized MongoDB queries for an Express API with indexes and pagination, reducing latency by 40%.',
      'Integrated Firebase Auth into a TypeScript Next.js frontend to secure API access and reduce unauthorized requests.',
      'Deployed the server on Heroku using Docker, streamlining deployment and improving scalability.',
    ],
  },
]

export const projects = [
  {
    name: 'ProtoScore',
    note: 'Acquired by Nurocor',
    description: 'Increased scoring efficiency of 50-page clinical protocols by 80% using OCR, React.js, OpenAI, and Python; integrated Firebase for secure API access; reduced API costs by half through batch processing; led stakeholder demos including Regeneron and Tufts CSDD.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7350540104987217922/',
    linkLabel: 'Read about the acquisition',
  },
  {
    name: 'DIALog',
    note: "DubHacks '23 · T-Mobile Your Number Anywhere Most Un-Carrier Hack Winner",
    description: 'Emotional tone translator for phone calls—built with React Native, Flask, sklearn, and T-Mobile YNA API to help people with disabilities engage with the emotional context of conversations in real time.',
    link: 'https://devpost.com/software/dialog-cl8fhu',
    linkLabel: 'View on Devpost',
  },
]

export const capstone = {
  title: 'SoundSeen',
  subtitle: 'A mobile accessibility app translating music into multi-sensory visuals + haptics for the Deaf and Hard-of-Hearing community.',
  status: 'In progress',
  problem:
    'How might we reimagine music experiences to be fully accessible and emotionally immersive for the Deaf and Hard-of-Hearing community, beyond text-based lyrics and captions?',
  whyItMatters: [
    'Most existing “accessible music” solutions focus on captions (what music says), not the physical and emotional arc (how music feels).',
    'Captions can’t communicate bass drops, tempo changes, build-ups, and shifts in intensity.',
    'Raw visualizers often show waveforms, not meaningful structure or emotion.',
  ],
  goals: [
    'Translate key musical features (rhythm, intensity, structure, emotion) into visuals and synchronized haptic feedback.',
    'Build an MVP optimized for iOS with responsive, real-time processing and user-controlled sensitivity.',
    'Validate usefulness and intuitiveness with Deaf/Hard-of-Hearing users early and iteratively.',
  ],
  process: {
    team: [
      'Researched existing solutions and patterns in music accessibility (captions, visualizers, haptics).',
      'Conducted interviews, including with a Deaf professor, to ground the problem in real user needs and preferences.',
      'Aligned on MVP scope: local file interpretation, audio-reactive visuals, haptic textures, structured HUD, and basic library management.',
      'Defined success criteria (latency, emotional accuracy, engagement) and updated the plan based on learnings.',
    ],
    individual: [
      'Drove development work and technical research for the chosen stack.',
      'Investigated real-time audio analysis approaches and mapping audio features into meaningful visual/haptic outputs (not just waveforms).',
      'Helped translate product goals into implementable modules (DSP/feature extraction, visualization/haptics, persistence/UI controls).',
    ],
  },
  takeaways: [
    'Accessibility isn’t just compliance—“meaningful” representation matters (structure, intensity, and emotion need clear analogs).',
    'User research reduces wasted engineering: preferences for how visuals/haptics should be displayed changed our assumptions early.',
    'Mapping sound → sensation is a design + engineering problem; the best outputs balance interpretability and expressiveness.',
  ],
  nextSteps: [
    'Specify visualization + haptic methods based on the data we can extract reliably in real time.',
    'Run more user interviews/testing to learn how users want visuals/haptics displayed (and what feels intuitive).',
    'Improve the UI/UX of the initial prototype (controls, calibration, and clarity of “what am I feeling/seeing?”).',
    'Continue technical implementation toward a TestFlight-ready build and a reusable haptic “texture” library.',
  ],
}

export const education = {
  school: 'University of Washington',
  location: 'Seattle, WA',
  degree: 'B.S. in Informatics: Software Development',
  gpa: 'GPA: 3.9/4.0',
}

export const skills = {
  languages: 'Python, JavaScript, TypeScript, Java, C#, R, HTML/CSS',
  frameworks: 'React, Vue.js, Node.js, Flask, Redux, Tailwind, REST APIs, Bootstrap, Selenium, OpenAI, Azure AI, Google Cloud Vision',
  databases: 'MongoDB, SQL, SQLite, MS SQL Server, Firebase, OpenSearch',
  tools: 'Git, VSCode, Visual Studio, Docker, AWS, Azure, Linux, Postman, CI/CD',
}

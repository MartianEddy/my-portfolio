export const navigation = [
  { label: 'Engineering', href: '/engineering' },
  { label: 'Research', href: '/research' },
  { label: 'Security lab', href: '/security-lab' },
  { label: 'Notes', href: '/engineering-notes' },
  { label: 'About', href: '/about' },
] as const;

export const projects = [
  {
    number: '01', name: 'Agent Zero', category: 'AI / APPLICATION SECURITY', status: 'IMPLEMENTED PROTOTYPE',
    description: 'A WhatsApp-facing misinformation and media-review workflow combining claim matching, grounded AI review and defensive media handling.',
    tags: ['Node.js', 'Twilio', 'Supabase', 'Gemini'], href: 'https://github.com/MartianEddy/agent-zero',
  },
  {
    number: '02', name: 'Sentinel', category: 'AGENT SECURITY', status: 'MVP · HARDENING',
    description: 'A local-first security lab exploring prompt-injection signals, default-deny tool authorization and tamper-evident audit records.',
    tags: ['FastAPI', 'Policy enforcement', 'Audit integrity'], href: '/security-lab',
  },
  {
    number: '03', name: 'Arc-x402 Gateway', category: 'AGENT INFRASTRUCTURE', status: 'DESIGN / IMPLEMENTATION EVIDENCE PENDING',
    description: 'An agent-payment gateway concept using cryptographic HTTP 402 challenges and replay-resistant request handling.',
    tags: ['HTTP 402', 'USDC', 'Idempotency'], href: 'https://github.com/MartianEddy/Arc-x402-Gateway',
  },
  {
    number: '04', name: 'GhostLink Protocol', category: 'WEB3 / PRIVACY', status: 'PROJECT PROTOTYPE',
    description: 'Privacy-oriented Solana project work exploring zero-knowledge state compression and scoped auditor visibility.',
    tags: ['Solana', 'Zero knowledge', 'Privacy'], href: 'https://github.com/MartianEddy',
  },
] as const;

export const researchTopics = [
  { id: 'R-01', title: 'Indirect prompt injection and agent tool misuse', description: 'How untrusted content crosses instruction boundaries, and how to evaluate containment.' },
  { id: 'R-02', title: 'Runtime authorization for autonomous agents', description: 'Policy enforcement, least privilege, scoped capabilities and safe failure behavior.' },
  { id: 'R-03', title: 'Verifiable execution and audit integrity', description: 'Evidence trails, reproducibility, integrity checks and the limits of append-only records.' },
  { id: 'R-04', title: 'Post-quantum and applied cryptographic security', description: 'Practical implications of cryptographic agility and migration to quantum-resistant primitives.' },
  { id: 'R-05', title: 'AI misinformation and media provenance', description: 'Evaluation methods for claims, synthetic media, provenance and uncertainty communication.' },
  { id: 'R-06', title: 'AI agents in regulated environments', description: 'Trust boundaries, oversight, traceability and operational controls for consequential workflows.' },
] as const;

export const principles = [
  { id: '01', title: 'Evidence over claims', body: 'Capabilities are tied to code, tests, measurements or clearly labelled research.' },
  { id: '02', title: 'Security by design', body: 'Threat models, trust boundaries, permissions and failure modes are first-class concerns.' },
  { id: '03', title: 'Reproducible work', body: 'Environments, evaluation criteria and known limitations are documented for inspection.' },
  { id: '04', title: 'Useful engineering', body: 'Systems are shaped around concrete problems and explicit acceptance criteria.' },
] as const;

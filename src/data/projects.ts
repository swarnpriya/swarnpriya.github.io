export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  status: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: 'beepl',
    title: 'BeePL',
    eyebrow: 'Verified eBPF systems',
    summary: 'Developing a verification-friendly programming language and formally verified compilation framework that preserves the semantics and safety guarantees of Linux eBPF programs through compilation to eBPF bytecode.',
    status: 'Active',
    tags: ['Rocq/Coq', 'CompCert', 'eBPF', 'Type systems'],
  },
  {
    slug: 'verified-linker',
    title: 'Formally Verified Linkers and Loaders',
    eyebrow: 'Extending the trusted compilation chain',
    summary: 'Developing formally verified linkers and loaders that preserve the semantics and security properties of compiled programs, enabling end-to-end assurance from source code to executable binaries.',
    status: 'Research direction',
    tags: ['Linkers', 'CompCert', 'Relocation', 'Rocq/Coq'],
  },
  {
    slug: 'verified-prompt-compilation',
    title: 'Verified Prompt Compilation',
    eyebrow: 'Formal methods for LLM interfaces',
    summary: 'Developing compiler-inspired frameworks that transform natural language prompts into structured representations for formal reasoning and systematic improvement.',
    status: 'New direction',
    tags: ['LLMs', 'Prompt IR', 'Formal semantics', 'Verified compilation'],
  },
  {
    slug: 'llvm-sslh',
    title: 'Selective Compiler-Based Spectre Defenses',
    eyebrow: 'LLVM selective speculative load hardening',
    summary: 'Developing a formally grounded LLVM compilation framework for C that selectively applies Spectre mitigations, reducing the overhead of protecting every operation while preserving security guarantees.',
    status: 'Research direction',
    tags: ['LLVM', 'Spectre', 'Constant time', 'Secure compilation'],
  },
  {
    slug: 'cheri-equivalence',
    title: 'x86–CHERI Equivalence',
    eyebrow: 'Verified architecture migration',
    summary: 'A formally grounded equivalence checker for validating translations from legacy x86 software to CHERI-enabled architectures.',
    status: 'Active',
    tags: ['CHERI', 'x86', 'Abstract interpretation', 'Binary analysis'],
  },
  {
    slug: 'agentflow',
    title: 'AgentFlow',
    eyebrow: 'Authorization for LLM agents',
    summary: 'A policy framework for controlling information flow, delegation, and path-sensitive actions in tool-using AI agents.',
    status: 'Research direction',
    tags: ['AI agents', 'Authorization', 'Information flow', 'SMT'],
  }
];

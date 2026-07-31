export type Publication = {
  year: number;
  title: string;
  authors: string;
  merit?: string;
  venue: string;
  award?: string;
  href?: string;
  doi?: string;
};

export const publications: Publication[] = [
  {
    year: 2025,
    title: 'BeePL: Correct-by-compilation kernel extensions',
    authors: 'Swarn Priya, Frédéric Besson, Connor Sughrue, Tim Steenvoorden, Jamie Fulford, Freek Verbeek, and Binoy Ravindran',
    venue: 'arXiv',
    href: 'https://arxiv.org/search/?query=BeePL%3A+Correct-by-compilation+kernel+extensions&searchtype=all'
  },
  {
    year: 2025,
    title: 'BeePL: Correct-by-compilation kernel extensions',
    authors: 'Swarn Priya, Tim Steenvoorden, Connor Sughrue, Frédéric Besson, and Freek Verbeek',
    venue: 'Workshop on Principles of Secure Compilation (PriSC)',
    href: 'https://popl25.sigplan.org/home/prisc-2025'
  },
  {
    year: 2023,
    title: 'Formally computer-verified protections against timing-based side-channel attacks',
    authors: 'Swarn Priya',
    venue: 'Ph.D. thesis, Inria and Université Côte d’Azur',
    href: 'https://hal.science/tel-04331805v1/file/swarn_thesis.pdf'
  },
  {
    year: 2023,
    title: 'Typing High-Speed Cryptography against Spectre v1',
    authors: 'Basavesh A. Shivakumar, Gilles Barthe, Benjamin Grégoire, Vincent Laporte, Tiago Oliveira, Swarn Priya, Peter Schwabe, and Lucas Tabary-Maujean',
    merit: 'Alphabetical authorship',
    venue: 'IEEE Symposium on Security and Privacy (S\&P)',
    award: 'Distinguished Paper Award',
    href: 'https://eprint.iacr.org/2022/1270',
  },
  {
    year: 2022,
    title: 'Enforcing fine-grained constant-time policies',
    authors: 'Basavesh A. Shivakumar, Gilles Barthe, Benjamin Grégoire, Vincent Laporte, and Swarn Priya',
    merit: 'Alphabetical authorship',
    venue: 'ACM Conference on Computer and Communications Security (CCS)',
    href: 'https://eprint.iacr.org/2022/630'
  },
  {
    year: 2021,
    title: 'Structured Leakage and Applications to Cryptographic Constant-Time and Cost',
    authors: 'Gilles Barthe, Benjamin Grégoire, Vincent Laporte, and Swarn Priya',
    merit: 'Alphabetical authorship',
    venue: 'ACM Conference on Computer and Communications Security (CCS)',
    href: 'https://dl.acm.org/doi/abs/10.1145/3460120.3484761'
  },
  {
    year: 2021,
    title: 'High-Assurance Cryptography in the Spectre Era',
    authors: 'Gilles Barthe, Sunjay Cauligi, Benjamin Grégoire, Adrien Koutsos, Kevin Liao, Tiago Oliveira, Swarn Priya, Tamara Rezk, and Peter Schwabe',
    merit: 'Alphabetical authorship',
    venue: 'IEEE Symposium on Security and Privacy (S\&P)',
    href: 'https://hal.inria.fr/'
  },
  {
    year: 2019,
    title: 'Mergeable replicated data types',
    authors: 'Gowtham Kaki, Swarn Priya, KC Sivaramakrishnan, and Suresh Jagannathan',
    venue: 'Proceedings of the ACM on Programming Languages (OOPSLA)',
    href: 'https://dl.acm.org/doi/10.1145/3360580'
  },
  {
    year: 2017,
    title: 'λir: A Language with Intensional Receive',
    authors: 'Swarn Priya',
    venue: 'M.S. thesis, Iowa State University',
    href: 'https://www.proquest.com/'
  }
];

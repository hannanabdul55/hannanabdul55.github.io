// Everything the site says lives here, so copy edits never touch layout.
// Public-safe by design: no revenue figures, no job-search language, and
// nothing from side projects that are not cleared for publication.

export const person = {
  name: 'Abdul Hannan Kanji',
  role: 'Software Engineer III (ML), Google',
  location: 'San Francisco',
  email: 'kanji@abdulhannan.in',
  portrait: {
    src: '/images/portrait.jpg',
    alt: 'Abdul smiling, with curly black hair and a beard, in a blue T-shirt against a plain wall',
  },
};

export const links = {
  resume: '/resume.pdf',
  github: 'https://github.com/hannanabdul55',
  linkedin: 'https://www.linkedin.com/in/hannanabdul55',
  scholar: 'https://scholar.google.com/citations?user=mFF9fhAAAAAJ&hl=en',
};

export const googleAnalyticsId = 'G-6C1CWC3HQW';

export const intro = {
  headline: 'I build machine learning models for ads at Google.',
  lede:
    'Before that: reinforcement learning and ML-safety research at UMass Amherst, open source with Microsoft’s Fairlearn, and four years of full stack & mobile work at Intuit.',
};

export const google = {
  since: '2022',
  title: 'Software Engineer III (ML) · Ads',
  // Deliberately general: specific systems, launches, and numbers stay on
  // the resume, not on the public site.
  body: [
    'I work on the machine learning behind ads on Google, taking ideas from early analysis and design through to production, together with modeling, serving, and product teams.',
    'Along the way I mentor engineers, review designs, and share what we learn at internal Ads summits.',
  ],
};

export const earlier = [
  {
    place: 'SwayAI',
    role: 'Applied Data Scientist',
    when: '2021–22',
    body:
      'Enterprise ML on AWS SageMaker: visual anomaly detection for an aeronautics client, object-detection serving for radiology, and call sentiment analysis, rebuilt as parts of a no-code ML platform.',
  },
  {
    place: 'Reich Lab, UMass Amherst',
    role: 'Research Engineer',
    when: '2020–21',
    href: 'https://covid19forecasthub.org',
    body:
      'Kept the COVID-19 Forecast Hub’s data pipeline running, the official data source for the CDC’s forecasting page, and cut submission validation from about 20 minutes to under one for 50+ research teams.',
  },
  {
    place: 'Intuit',
    role: 'Software Development Engineer 2',
    when: '2015–19',
    body:
      'Built the Android app shell that QuickBooks, TurboTax, and Mint mobile shared for auth and logging; shipped QuickBooks transactions features and on-device ML receipt validation.',
  },
];

export const research = [
  {
    name: 'Seldonian safety',
    context: 'with Prof. Philip Thomas, UMass Amherst · 2020–21',
    body:
      'Training models that come with a high-confidence safety guarantee (Thomas et al., Science 2019). I added stratified sampling, which raised the chance of returning a safe solution by about 60% in worst-case classification settings, and built safe policy improvement for RL on per-decision importance sampling.',
    links: [
      { label: 'Docs', href: 'https://seldonian-fairml.readthedocs.io/' },
      { label: 'Code', href: 'https://github.com/hannanabdul55/seldonian-fairness' },
    ],
  },
  {
    name: 'Fairlearn',
    context: 'with Microsoft’s Responsible AI team · 2020',
    body:
      'Implemented the Equality of Opportunity fairness constraint and made ExponentiatedGradient’s per-iteration estimator copying cheaper. Both merged.',
    links: [
      { label: 'Equality of Opportunity', href: 'https://github.com/fairlearn/fairlearn/pull/362' },
      { label: 'ExponentiatedGradient', href: 'https://github.com/fairlearn/fairlearn/pull/526' },
    ],
  },
];

export const education = [
  { school: 'UMass Amherst', degree: 'M.S. Computer Science', when: '2019–21' },
  { school: 'PES Institute of Technology', degree: 'B.E. Computer Science', when: '2011–15' },
];

// Photos for "Off the clock". Drop new files into public/images and add
// entries here; the strip lays out one to four photos and is hidden when
// the list is empty.
export const offTheClock: {
  body: string;
  photos: { src: string; alt: string; caption: string }[];
} = {
  body: 'Outside work I hike, run, and play the drums.',
  photos: [],
};

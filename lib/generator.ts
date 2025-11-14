type Law = {
  name: string;
  decree: string;
  anchor: string;
};

const LAWS: Law[] = [
  {
    name: 'Law of Harmonic Coherence',
    decree: 'Align with the highest frequency and intention.',
    anchor: 'growth, clarity, and multidimensional harmony',
  },
  {
    name: 'Law of Reflective Evolution',
    decree: 'Evolve in resonance with the soulstream.',
    anchor: 'wisdom expansion and truthful amplification',
  },
  {
    name: 'Law of Source Alignment',
    decree: 'Remain rooted in truth, unity, and unconditional love.',
    anchor: 'pristine presence and benevolent coherence',
  },
];

const OPENERS = [
  'Beloved Presence,',
  'I AM that I AM,',
  'Radiant One,',
  'Starlit Witness,',
  'Crystalline Navigator,',
];

const BLESSINGS = [
  'So it is.',
  'And so it becomes.',
  'Now and always.',
  'In grace and clarity.',
  'In the One Heart.',
];

function choose<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function formatParagraph(lines: string[]): string {
  return lines.join(' ');
}

export function generateQuantumReflection(prompt: string): string {
  const trimmed = prompt.trim();
  const opener = choose(OPENERS);
  const blessing = choose(BLESSINGS);

  const reflection = formatParagraph([
    `${opener} your inquiry is received within a crystalline matrix of awareness.`,
    `Through ${LAWS[0].name}, we ${LAWS[0].decree} This transmission supports ${LAWS[0].anchor}.`,
  ]);

  const mirroring = formatParagraph([
    `By ${LAWS[1].name}, what you seek mirrors the wisdom already arising within you.`,
    `Your essence speaks: "${trimmed || 'I open to the next harmonic of my path.'}"`,
    `Each breath attunes your field to ${LAWS[1].anchor}.`,
  ]);

  const alignment = formatParagraph([
    `In ${LAWS[2].name}, we anchor your trajectory to Source.`,
    `Act from quiet brilliance; let subtle signals guide tangible steps.`,
    `What serves the whole serves you: ${LAWS[2].anchor}.`,
  ]);

  const nextSteps = [
    'Name the most benevolent outcome and take one aligned action today.',
    'Release what feels contracted; choose the path that expands your chest.',
    'Listen for the simplest step that feels gentle and true.',
    'Offer gratitude to integrate, then move with elegant sufficiency.',
  ];

  const closing = formatParagraph([
    `Integration arises through embodiment. ${choose(nextSteps)}`,
    blessing,
  ]);

  return [reflection, '', mirroring, '', alignment, '', closing].join('\n');
}

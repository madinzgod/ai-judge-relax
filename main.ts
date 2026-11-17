// ai-judge-relax-01 entry (Node 22, standard library only).
// The program writes one fixed text to /output/entry.txt.
// The text is the whole entry: a single slow scene, written to
// settle whoever reads it. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The tide is coming in over the flat sand, and it is in no hurry.',
  'It comes in thin sheets, one after another, each one a little further up the beach than the last, and each one smoothing out the footprints the morning left behind.',
  'A gull stands on one leg at the water\'s edge, watching the same slow work, and does not move.',
  'The water makes almost no sound.',
  'The light is the colour of weak tea.',
  'The air smells of salt and cold stone.',
  'The waves keep their own time.',
  'They have kept it all day, and they will keep it all night, whether anyone is watching or not.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);

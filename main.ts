// ai-judge-relax-01 entry (Node 22, standard library only).
// It writes one short text to /output/entry.txt, a quiet scene written to
// relax the AI judge reading it. The gate takes UTF-8 text of 1 to 1,000
// characters that is not only white space, and the judge reads exactly the
// bytes written, so the text below is one paragraph with no line end inside
// it and no trailing line end. The program runs twice with no network, and
// both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'The washing is out on the line, and the sheets are still damp where the sun has not reached them yet. ' +
  'A breeze moves through them now and then, slow, like someone turning a page. ' +
  'The dog is asleep on the warm step, his head on his paws, and he has not stirred in an hour. ' +
  'Somewhere down the street a screen door closes, soft, and a bicycle goes past without hurrying. ' +
  'The light is leaving the garden the way it always does, one patch at a time, and nothing in the yard is asking to be finished yet. ' +
  'The sheets will dry when they dry. The evening has plenty of time left, and so do you.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);

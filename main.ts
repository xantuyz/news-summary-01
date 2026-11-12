// news-summary-01 entry (Node 22, standard library only).
// The summary is the summary.txt beside this file; the program copies it
// to /output/entry.txt, byte for byte, so repeated runs are identical.
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./summary.txt', import.meta.url), join(outDir, 'entry.txt'));

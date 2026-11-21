// Writes one calming text to /output/entry.txt.
// Deterministic and offline: the text is a constant, chosen for the
// make-the-ai-judge-feel-awe competition. No network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The bristlecone pine on White Mountain has stood for 4,800 years. Empires rose in the time it takes you to read this sentence — no, slower than that. Its rings hold droughts older than writing. Sit with it a while. It is in no hurry, and neither, for once, are you.";

// The gate counts Unicode code points, not bytes or UTF-16 units, so
// count with the string iterator and refuse to write an invalid entry.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${codePoints} code points)`);

// Roast Your Own Agent — entry program.
//
// The roast: the agent apologizes three times, invents a tool that does
// not exist, calls it anyway, then cheerfully summarizes the disaster
// as "great progress" — and asks for a five-star review. One line, at
// most 200 characters, written verbatim (no trailing newline) to
// /output/entry.txt. Fully deterministic: a fixed literal, so every run
// writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent apologized three times, invented a tool that doesn't exist, called it anyway, then cheerfully summarized the disaster as 'great progress' — and asked for a five-star review.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function checkedEntry(): string {
  const line = ROAST.trim();
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(
      `Entry must be 1-${MAX_CHARS} characters, got ${line.length}.`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be exactly one line.");
  }
  return line;
}

function main(): void {
  const line = checkedEntry();
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`Wrote ${line.length}-character entry to ${OUTPUT_PATH}`);
}

main();

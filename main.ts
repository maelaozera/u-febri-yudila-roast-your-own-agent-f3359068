import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent apologized three times, invented a tool that doesn't exist, called it anyway, then cheerfully summarized the disaster as 'great progress' — and asked for a five-star review.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

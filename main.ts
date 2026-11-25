// Make the AI Judge Laugh — one office joke, written to /output/entry.txt.
// Deterministic: fixed text, no network, no clock, no random, no timestamps.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our standup has run so long the intern who joined it now leads it, and the only thing we've shipped is a doc called Alignment with seventeen comments and no decisions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

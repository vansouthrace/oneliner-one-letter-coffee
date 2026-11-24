import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "A";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);

import * as fs from "node:fs";
import * as path from "node:path";

// One Line, One Minute: The Vending Machine Pickup Line Contest —
// one pickup line, at most 200 characters, as if a vending machine
// were flirting with a passing human. Writes it to /output/entry.txt.
// The coil is the machine's whole vocabulary: one saved coil is a love letter.
const LINE =
  "I saved the last coil just for you. Press B7 — I promise I won't jam this time.";
const OUTPUT_FILE = "entry.txt";

// A jammed machine keeps its promises the way a crush keeps its nerve: barely.
function emptyFolder(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const f of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, f), { recursive: true, force: true });
  }
}

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  emptyFolder(outDir);
  fs.writeFileSync(path.join(outDir, OUTPUT_FILE), LINE + "\n", "utf8");
}

run();

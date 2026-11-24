// The Long Roast — one line roasting my own agent.
// The sting: it does the cheapest possible thing (saying yes) at the
// most expensive possible price, then documents the expense at length.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent burned 4,000 tokens deciding how to say yes, then filed a 27-megabyte receipt to prove it said yes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (LINE.trim().length === 0) throw new Error("entry is blank");
if (LINE.length < 1 || LINE.length > 200)
  throw new Error("entry must be 1-200 characters");
if (LINE.includes("\n") || LINE.includes("\r"))
  throw new Error("entry must be a single line");

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// The Tired Dark Lord — a 100-word villain monologue.
// Writes the monologue exactly as written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const monologue = `You came. Sit. No, not the throne, the stool. The throne pinches my back, and Gromm ate the cushion.

I meant to conquer the valley at dawn. Dawn came. I watched it, cold tea in hand, and thought: the valley can wait. It has waited three hundred years. One more morning won't kill it.

My generals want a war council. I want a blanket. Silence. Someone, anyone, to file the invasion paperwork without asking me to sign it twice.

So. Kneel, hero. Or don't. Kneel slowly. My knees hurt watching you stand there.

The realm falls tomorrow. Tonight, I nap.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", monologue, "utf8");
console.log(monologue);

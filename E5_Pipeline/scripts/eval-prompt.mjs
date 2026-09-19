import fs from "node:fs";
import path from "node:path";

const injectFailure = process.argv.includes("--inject-failure");
const minPassRate = Number(process.env.MIN_PASS_RATE ?? 0.90);
const file = path.resolve("eval/golden.jsonl");
const cases = fs.readFileSync(file, "utf8").trim().split(/\r?\n/).map(JSON.parse);

if (injectFailure) {
  cases[0].candidate = "Resultado revolucionário criado pela classe PedidoService no commit a1b2c3d.";
  cases[1].candidate = "bugfix SKU";
}

const results = cases.map((test) => {
  const missing = test.required.filter((term) => !test.candidate.toLocaleLowerCase("pt-BR").includes(term.toLocaleLowerCase("pt-BR")));
  const presentForbidden = test.forbidden.filter((term) => test.candidate.toLocaleLowerCase("pt-BR").includes(term.toLocaleLowerCase("pt-BR")));
  const wordCount = test.candidate.trim().split(/\s+/).length;
  const ok = missing.length === 0 && presentForbidden.length === 0 && wordCount <= 20;
  return { id: test.id, ok, wordCount, missing, presentForbidden };
});

const passed = results.filter((result) => result.ok).length;
const rate = passed / results.length;
console.log(`Prompt quality gate: ${passed}/${results.length} (${(rate * 100).toFixed(0)}%)`);
for (const result of results) {
  console.log(`${result.ok ? "PASS" : "FAIL"} ${result.id} palavras=${result.wordCount}`);
  if (result.missing.length) console.log(`  obrigatórios ausentes: ${result.missing.join(", ")}`);
  if (result.presentForbidden.length) console.log(`  termos proibidos: ${result.presentForbidden.join(", ")}`);
}
console.log(`Limiar: ${(minPassRate * 100).toFixed(0)}%`);
if (rate < minPassRate) process.exitCode = 1;


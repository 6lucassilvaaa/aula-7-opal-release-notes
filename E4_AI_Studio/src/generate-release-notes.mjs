import fs from "node:fs/promises";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash:generateContent";

async function loadPrompt() {
  return fs.readFile(new URL("../prompts/release-notes-v1.md", import.meta.url), "utf8");
}

export async function generateReleaseNotes({ versao, data, commits, apiKey = process.env.GEMINI_API_KEY }) {
  if (!apiKey) throw new Error("GEMINI_API_KEY não configurada");
  if (!Array.isArray(commits) || commits.length === 0) throw new Error("Informe ao menos um commit");

  const systemInstruction = await loadPrompt();
  const response = await fetch(`${API_URL}?key=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemInstruction }] },
      contents: [{
        role: "user",
        parts: [{ text: `versao: ${versao}\ndata: ${data}\ncommits:\n${commits.join("\n")}` }]
      }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json"
      }
    })
  });

  if (!response.ok) throw new Error(`Gemini API retornou ${response.status}`);
  const payload = await response.json();
  const text = payload?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Resposta vazia do modelo");
  return JSON.parse(text);
}

if (import.meta.url === `file://${process.argv[1]?.replaceAll("\\", "/")}`) {
  const input = JSON.parse(await fs.readFile(process.argv[2], "utf8"));
  console.log(JSON.stringify(await generateReleaseNotes(input), null, 2));
}


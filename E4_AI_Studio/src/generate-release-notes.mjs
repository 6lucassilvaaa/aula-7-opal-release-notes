import fs from "node:fs/promises";
import { GoogleGenAI } from "@google/genai";

const MODEL = "gemini-3.1-flash-lite";

async function loadPrompt() {
  return fs.readFile(new URL("../prompts/release-notes-v1.md", import.meta.url), "utf8");
}

async function loadSchema() {
  const json = await fs.readFile(new URL("../schemas/release-notes.schema.json", import.meta.url), "utf8");
  const schema = JSON.parse(json);
  delete schema.$schema;
  delete schema.title;
  return schema;
}

export async function generateReleaseNotes({ versao, data, commits, apiKey = process.env.GEMINI_API_KEY }) {
  if (!apiKey) throw new Error("GEMINI_API_KEY não configurada");
  if (!Array.isArray(commits) || commits.length === 0) throw new Error("Informe ao menos um commit");

  const ai = new GoogleGenAI({ apiKey });
  const [systemInstruction, responseSchema] = await Promise.all([loadPrompt(), loadSchema()]);
  const input = `versao: ${versao}\ndata: ${data}\ncommits:\n${commits.join("\n")}`;

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts: [{ text: input }] }],
    config: {
      thinkingConfig: { thinkingLevel: "MINIMAL" },
      responseMimeType: "application/json",
      responseSchema,
      systemInstruction
    }
  });

  if (!response.text) throw new Error("Resposta vazia do modelo");
  return JSON.parse(response.text);
}

if (import.meta.url === `file://${process.argv[1]?.replaceAll("\\", "/")}`) {
  const input = JSON.parse(await fs.readFile(process.argv[2], "utf8"));
  console.log(JSON.stringify(await generateReleaseNotes(input), null, 2));
}

# E4 — Comparação Opal × AI Studio

| Aspecto | Opal | AI Studio / código |
|---|---|---|
| Entrada | Campo `Commits da versão` | Objeto com versão, data e array de commits |
| Classificação | Gemini Flash no primeiro Generate | `gemini-flash-lite-latest` fixado no código |
| Redação | Gemini Pro no segundo Generate | System instruction versionada |
| Formato | Tabela intermediária e texto final | JSON validável pelo schema |
| Testes | Preview e console, manual | Conjunto dourado executado pelo CI |
| Segurança | Somente dados fictícios/públicos | Chave em `GEMINI_API_KEY`, nunca no código |
| Evolução | Histórico linear no Drive | Git, pull request, CODEOWNERS e logs |

Os três casos de referência usam os mesmos filtros em ambas as implementações. O Opal valida rapidamente o valor e a experiência. A versão do AI Studio fixa o contrato JSON e permite reprovar automaticamente regressões, mudanças de vocabulário, exposição de dados e respostas fora do padrão.

O prompt foi configurado e salvo no Google AI Studio com instrução de sistema, saída estruturada e geração de código TypeScript. Os três casos foram executados com sucesso pela API oficial usando a chave gratuita somente em memória; os resultados estão em `RESULTADOS_AI_STUDIO_API.md` e `.json`. A integração adaptada mantém a chave exclusivamente em `GEMINI_API_KEY`, fora do Git.

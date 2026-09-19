# E4 — Comparação Opal × AI Studio

| Aspecto | Opal | AI Studio / código |
|---|---|---|
| Entrada | Campo `Commits da versão` | Objeto com versão, data e array de commits |
| Classificação | Gemini Flash no primeiro Generate | Gemini Flash fixado no código |
| Redação | Gemini Pro no segundo Generate | System instruction versionada |
| Formato | Tabela intermediária e texto final | JSON validável pelo schema |
| Testes | Preview e console, manual | Conjunto dourado executado pelo CI |
| Segurança | Somente dados fictícios/públicos | Chave em `GEMINI_API_KEY`, nunca no código |
| Evolução | Histórico linear no Drive | Git, pull request, CODEOWNERS e logs |

Os três casos de referência usam os mesmos filtros em ambas as implementações. O Opal valida rapidamente o valor e a experiência. A versão do AI Studio fixa o contrato JSON e permite reprovar automaticamente regressões, mudanças de vocabulário, exposição de dados e respostas fora do padrão.

> A execução real contra a Gemini API depende de uma `GEMINI_API_KEY` do aluno. Nenhuma chave foi criada ou incluída nesta entrega.


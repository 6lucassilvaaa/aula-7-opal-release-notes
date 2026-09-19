# E2 — Execução com as três entradas de referência

## Fluxo verificado

`Commits da versão` → `Classificar mudanças` (Gemini Flash) → `Redigir notas` (Gemini Pro) → `Página de notas` + `Salvar no Google Docs`.

O asset `Guia de estilo` é referenciado pelos prompts. As saídas seguem linguagem profissional em PT-BR e omitem categorias vazias.

## rel-001 — versão 4.2.0

- Reconheceu itens de Nova funcionalidade, Correção e Segurança.
- Ignorou merge, dependências, testes e documentação sem impacto para o cliente.
- Tratou refatoração sem efeito comprovado como item a revisar/omitir.
- Gerou página e documento do Google Docs.

## rel-002 — versão 4.2.1

- Manteve somente Correção e Segurança.
- Ignorou merge e alteração do pipeline Jenkins.
- Não exibiu categorias vazias.
- Gerou página e documento do Google Docs.

## rel-003 — caso de borda

- Classificou a funcionalidade do filtro por montadora.
- Descreveu o risco de segurança sem expor vetor técnico.
- Encaminhou mensagens ambíguas para `Itens para revisão do tech lead`.
- Gerou página e documento do Google Docs.

## Resultado

Os três casos foram executados no Preview. O fluxo publicou a página final, ofereceu o documento no Google Docs e preservou o rodapé obrigatório. O link público está em `LINK_OPAL.txt`.


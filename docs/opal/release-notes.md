# Ficha técnica — Release Notes Carparts

## Identificação

- **Nome:** Release Notes Carparts — Lucas Souza
- **Responsável:** Lucas Souza da Silva (RA 26179875)
- **Finalidade:** transformar commits fictícios ou públicos em notas de versão profissionais para montadoras clientes.
- **Status:** publicado.
- **Link:** https://opal.google/app/1iXJvi_5238_nN--HD07X_sGK6Mg3M5uI
- **Última revisão:** 18/09/2026
- **Próxima revisão:** 18/10/2026 ou após alteração de modelo/prompt.

## Fluxo

| Ordem | Passo | Tipo/modelo | Entrada e saída |
|---|---|---|---|
| 1 | Commits da versão | User Input | Lista de commits, um por linha |
| 2 | Guia de estilo | Asset textual | Vocabulário, categorias, filtros e rodapé |
| 3 | Classificar mudanças | Generate — Gemini Flash | Referencia `@Commits da versão` e `@Guia de estilo`; produz tabela Markdown |
| 4 | Redigir notas | Generate — Gemini Pro | Referencia `@Classificar mudanças`; produz documento PT-BR |
| 5 | Salvar no Google Docs | Output | Grava a versão final em um novo documento |
| 6 | Página de notas | Output — webpage | Exibe a versão final em layout responsivo |

## Permissões

- Qualquer pessoa com o link pode usar/visualizar.
- Acesso ao editor e remix está desativado.
- O link deve ser compartilhado somente para a finalidade acadêmica.
- O professor não recebe permissão de edição dos prompts internos.

## Dados permitidos

- Mensagens de commit fictícias.
- Commits de projetos públicos previamente revisados.
- Versão e data fictícias ou públicas.

## Dados proibidos

- Nomes de clientes, montadoras ou pessoas.
- Números de pedidos, preços, contratos e dados do ERP.
- Chaves, tokens, senhas, segredos, IPs privados ou logs internos.
- Informações pessoais ou comerciais confidenciais.

## Entradas de referência

- `rel-001`: caso normal com múltiplas categorias e itens a ignorar.
- `rel-002`: hotfix curto com categorias vazias e mudança de CI a ignorar.
- `rel-003`: entradas ambíguas, que devem ser enviadas à revisão do tech lead.

Arquivo de origem: `entradas_referencia_carparts.md`.

## Critérios de aceite

- Categorias na ordem Nova funcionalidade, Correção, Segurança e Interna.
- Categorias vazias omitidas.
- Itens com até 20 palavras e iniciados por verbo no presente.
- Nenhum hash, branch, arquivo, biblioteca ou dado proibido no texto do cliente.
- Itens ambíguos separados em `Itens para revisão do tech lead`.
- Rodapé obrigatório preservado.
- Saída revisada por pessoa antes de qualquer envio externo.

## Governança

Toda alteração em prompt, modelo ou schema exige nova execução das três entradas de referência. Para produção, o prompt é promovido ao repositório, avaliado pelo conjunto dourado e liberado somente após revisão. A restauração de versões do Opal exige uma cópia por Remix antes da ação, pois versões posteriores podem ser removidas.


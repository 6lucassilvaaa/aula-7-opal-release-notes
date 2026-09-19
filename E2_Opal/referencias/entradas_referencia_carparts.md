# Entradas de referência · Release Notes Carparts (dados fictícios)

Use sempre estas três entradas para comparar versões do mini-app (Preview + Console).

## rel-001 — versão 4.2.0 (caso normal, cobre as 4 categorias)
```
a1b2c3d feat(pedidos): permite anexar ordem de compra em PDF na abertura do pedido
9f8e7d6 fix(catalogo): corrige numero de peca duplicado na busca por aplicacao
5c4b3a2 chore(deps): bump lodash from 4.17.20 to 4.17.21
7d6e5f4 security: bloqueia upload de arquivo executavel no portal de pedidos
Merge pull request #812 from carparts/release-4.2
2e3f4a5 refactor(core): extrai servico de precificacao para modulo proprio
8b9c0d1 feat(cotacao): exibe prazo de entrega estimado por item na cotacao
3a4b5c6 fix(portal): corrige timeout ao listar pedidos com mais de 500 itens
1f2e3d4 test: adiciona testes de integracao do servico de cotacao
6e5d4c3 docs: atualiza README do modulo de catalogo
```

## rel-002 — versão 4.2.1 (hotfix curto, poucas categorias)
```
b7c8d9e fix(nota-fiscal): corrige arredondamento do valor total na segunda via
Merge branch 'hotfix/nf-arredondamento' into main
c8d9e0f security: atualiza validacao de sessao expirada no portal de pedidos
d9e0f1a chore: ajusta pipeline do Jenkins para publicar artefato assinado
```

## rel-003 — caso de borda (linhas ambíguas, deve gerar tipo "Revisar")
```
e0f1a2b wip
f1a2b3c ajustes
a2b3c4d feat(catalogo): adiciona filtro por montadora compativel no catalogo de pecas
b3c4d5e fix
c4d5e6f asdf teste local nao commitar
d5e6f7a security: remove chave de API do repositorio e move para segredo do pipeline
```

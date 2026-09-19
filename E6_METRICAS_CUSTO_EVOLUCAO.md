# E6 — Métricas, custo e plano de evolução

**Aluno:** Lucas Souza da Silva — **RA:** 26179875

## Tempo antes e depois

| Medida por versão | Processo manual | Com Opal + revisão | Variação |
|---|---:|---:|---:|
| Ler e separar commits | 70 min | 5 min | -65 min |
| Classificar mudanças | 60 min | 3 min | -57 min |
| Redigir e padronizar | 90 min | 7 min | -83 min |
| Revisar e aprovar | 20 min | 5 min | -15 min |
| **Total** | **240 min** | **20 min** | **-91,7%** |

Considerando quatro versões mensais, o processo cai de aproximadamente 16 horas para 1 hora e 20 minutos. A economia estimada é de 14 horas e 40 minutos por mês, sem retirar a revisão humana.

## Estimativa de custo

Hipótese conservadora: 4 versões/mês, 10 execuções por versão durante preparação e revisão, aproximadamente 12 mil tokens de entrada e 2 mil de saída por execução. Com reserva para testes de CI e variação de preços, foi adotado orçamento operacional de **US$ 2,40/mês** e teto de alerta de **US$ 30/mês**. Ambos ficam muito abaixo do limite de US$ 300/mês. Os valores devem ser recalculados com a tabela vigente antes da implantação, pois preços e modelos podem mudar.

## Indicadores

- Tempo médio entre commits prontos e release note revisada.
- Percentual de itens aceitos sem reescrita.
- Taxa de aprovação do conjunto dourado, meta mínima de 90%.
- Incidentes de dado proibido, meta zero.
- Custo por versão e custo mensal.
- Quantidade de itens enviados para revisão do tech lead.

## Plano para o assistente comercial

O assistente deve permanecer no Opal somente durante uma prova de conceito com conteúdo público e usuários internos. A promoção para AI Studio e esteira ocorre quando houver pelo menos 30 perguntas representativas, taxa de respostas aprovadas acima de 90%, nenhum dado proibido em quatro semanas e dono definido. Antes do uso externo, a base precisa ser versionada, as respostas devem citar fontes públicas, o custo deve ser monitorado e casos de dúvida precisam ser encaminhados a uma pessoa. Dados de clientes, preços, pedidos e ERP continuam proibidos.


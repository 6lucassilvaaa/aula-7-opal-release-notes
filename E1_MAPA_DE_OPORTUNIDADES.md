# E1 — Mapa de oportunidades de mini-apps

**Aluno:** Lucas Souza da Silva — **RA:** 26179875

| Prioridade | Tarefa | Classificação | Valor esperado | Risco de dados | Custo e decisão |
|---|---|---|---|---|---|
| 1 | Gerar notas de versão a partir de commits fictícios ou públicos | Opal → AI Studio → esteira | Reduz a redação manual de 4 h para cerca de 20 min por versão e padroniza o texto | Baixo no protótipo; não inserir clientes, pedidos, preços ou ERP | Baixo no Opal e estimado em US$ 2,40/mês na API. Promover porque a saída pode chegar ao cliente |
| 2 | Classificar solicitações internas sem dados pessoais | Só Opal (apoio) | Organiza temas e prioridades para triagem humana | Médio; entradas devem ser anonimizadas | Baixo. Manter no Opal enquanto houver revisão humana e nenhuma automação crítica |
| 3 | Assistente comercial sobre funcionalidades públicas | Opal → AI Studio → esteira | Respostas mais rápidas e consistentes sobre o catálogo e o portal B2B | Médio; bloquear dados comerciais confidenciais e informações de clientes | Começar no Opal e promover após validação, pois será usado externamente |
| 4 | Resumir documentação técnica pública para onboarding | Só Opal (apoio) | Reduz o tempo de leitura e cria roteiros de estudo | Baixo quando as fontes são públicas | Baixo. Não precisa de produção enquanto o resultado for revisado pelo colaborador |
| 5 | Aprovar automaticamente preços, crédito ou prazo de cliente | Não usar IA | O possível ganho não compensa decisões incorretas ou sem explicação | Alto: dados financeiros, contratuais e de ERP | Não adotar. Manter regras determinísticas e aprovação humana formal |
| 6 | Analisar incidentes de produção contendo logs reais | Não usar IA no Opal | Poderia acelerar diagnóstico, mas o experimento não oferece governança suficiente | Alto: tokens, IPs, dados pessoais e informações de infraestrutura | Usar ferramenta corporativa aprovada, com retenção, acesso e auditoria controlados |

## Priorização e mitigação

A primeira oportunidade é a geração de release notes, porque combina ganho mensurável, dados fictícios e um processo de revisão já existente. O principal risco é transformar um protótipo experimental em canal de publicação sem controles. A mitigação consiste em versionar prompt e schema, avaliar pelo menos dez casos no CI, proteger a chave como segredo e exigir aprovação humana antes do envio. O assistente comercial fica em segundo lugar e só deve avançar quando houver base pública curada, monitoramento de custo e registros de aprovação.


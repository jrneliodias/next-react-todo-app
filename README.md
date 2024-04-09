# TO DO APP

## Resumo

To Do App é um projeto clássico que visa criar experiência no front end com interfaces em React, com múltiplos filtros com manipulação de estados, backend Node para o desenvolvimento de API, arquitetura REST para criar um CRUD, banco de dados hospedado na Vercel e aplicação de testes unitários com Jest.

## Tecnologias do projeto

- Next Js
- Node Js
- Daisy Ui
- Typescript
- Banco de dados Postgres da Vercel
- Prisma ORM
- Testes com Jest

## Funcionalidades

- O usuário pode criar, editar, apagar, escolher uma cor para a tarefa, marcar como feito e marcar como favorito qualquer tarefa.



- Todas as tarefas favoritas são movidas para o topo da lista.

- A interface tem filtos para as cores e por tarefa favorita. Sendo que pode escolher múltiplos filtros.

## Back-End 

- No banco de dados foi criado uma tabela Task com os campos
``` SQL
"id" UUID NOT NULL,

"content" VARCHAR(200) NOT NULL,

"favorite" BOOLEAN NOT NULL DEFAULT false,

"color" VARCHAR(10) NOT NULL,

"completed" BOOLEAN NOT NULL DEFAULT false
```

- Toda edição em uma tarefa pelo usuário é salva no banco de dados via API.

- A API foi testada com Jest e encontra-se no repositório. Coloquei na imagem abaixo os resultados.



Hospedagem: https://todo-list-app-nelio.vercel.app/  

Estou aberto para feedbacks e ansioso para discutir mais detalhes sobre o projeto!
## Testes com Jest

![Captura de tela 2024-03-16 153048](https://github.com/jrneliodias/corel-lab-todo-app-nelio/assets/69831915/42161683-0352-488a-a8da-f11f9822dc99)

## Como iniciar

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



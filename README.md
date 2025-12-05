📚 Biblioteca API
=================

Uma API RESTful desenvolvida em **Node.js** com **TypeScript** para gerenciamento de livros em uma biblioteca. Este projeto implementa operações de **CRUD** (Create, Read, Update, Delete) utilizando a arquitetura simplificada de Controller/Repository.

🚀 Tecnologias Utilizadas
-------------------------

O projeto foi desenvolvido utilizando as seguintes tecnologias:

-   [**Node.js**](https://nodejs.org/ "null") - Ambiente de execução JavaScript/TypeScript.

-   [**Express**](https://expressjs.com/ "null") - Framework web rápido e minimalista.

-   [**TypeScript**](https://www.typescriptlang.org/ "null") - Superset do JavaScript com tipagem estática.

-   [**TypeORM**](https://typeorm.io/ "null") - ORM (Object-Relational Mapper) para interação com banco de dados.

-   [**SQLite**](https://www.sqlite.org/index.html "null") - Banco de dados relacional leve e local.

-   [**tsx**](https://github.com/privatenumber/tsx "null") - Executor de TypeScript rápido (usado para desenvolvimento).

⚙️ Funcionalidades
------------------

-   **Criar Livro**: Cadastra um novo livro no sistema.

-   **Listar Livros**: Retorna todos os livros cadastrados.

-   **Buscar por ID**: Retorna os detalhes de um livro específico.

-   **Atualizar Livro**: Atualiza as informações de um livro existente.

-   **Excluir Livro**: Remove um livro do banco de dados.

📦 Como Rodar o Projeto
-----------------------

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passo a Passo

1.  **Clone o repositório** (ou baixe o código):

    ```
    git clone [https://github.com/SEU-USUARIO/biblioteca-api.git](https://github.com/SEU-USUARIO/biblioteca-api.git)
    cd biblioteca-api

    ```

2.  **Instale as dependências**:

    ```
    npm install

    ```

3.  **Inicie o servidor de desenvolvimento**:

    ```
    npm run dev

    ```

4.  **O servidor estará rodando em**: `http://localhost:3000`

🔌 Endpoints da API
-------------------

Aqui estão as rotas disponíveis para teste (via Postman ou Insomnia):

| Método | Rota             | Descrição                  |
|--------|------------------|----------------------------|
| POST   | /api/livros      | Cria um novo livro.        |
| GET    | /api/livros      | Lista todos os livros.     |
| GET    | /api/livros/{id} | Busca um livro pelo ID.    |
| PUT    | /api/livros/{id} | Atualiza um livro existente. |
| DELETE | /api/livros/{id} | Deleta um livro.          |


### Exemplo de JSON para Criação (POST)

```
{
  "titulo": "Clean Code",
  "autor": "Robert C. Martin",
  "isbn": "978-0132350884",
  "anoPublicacao": 2008
}

```

📂 Estrutura de Pastas
----------------------

```
biblioteca-api/
├── src/
│   ├── controller/   # Lógica das requisições (regras de negócio)
│   ├── entity/       # Modelos do banco de dados (TypeORM)
│   ├── data-source.ts # Configuração do Banco de Dados
│   ├── routes.ts     # Definição das rotas da API
│   └── server.ts     # Ponto de entrada da aplicação
├── package.json
├── tsconfig.json
└── README.md

```

👨‍💻 Autor
-----------

Desenvolvido por **Pedro Menezes**.

Projeto realizado como atividade acadêmica para prática de Desenvolvimento Backend com Node.js e TypeScript.
